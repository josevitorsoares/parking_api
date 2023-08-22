import { AppError } from "../http/middlewares/AppError";
import { ICarsRepository } from "../repositories/CarsRepository";
import { IParkingRepository } from "../repositories/ParkingRepository";
import { IVacanciesRepository } from "../repositories/VacanciesRepository";

interface CreateParkinRequest {
    car_id: string;
    vacancy_id: string;
}

const OPENINGTIME = 9; // Opening time
const CLOSETIME = 18; // Closing time
const ALLVACANCIES = 20; // Total parking vacancies

export class CreateParkingUseCase {
    constructor(
        private parkingsRepository: IParkingRepository,
        private vacanciesRepository: IVacanciesRepository,
        private carsRepository: ICarsRepository
    ) {}

    async execute({ car_id, vacancy_id }: CreateParkinRequest): Promise<void> {
        const currentDate = this.parkingsRepository.getCurrentDate();
        const hour = this.parkingsRepository.getHour(currentDate);

        if (hour < OPENINGTIME || hour > CLOSETIME) {
            throw new AppError("Hours outside opening hours. Please try again during opening hours.", 403);
        }

        const allAvailableVacancies = await this.vacanciesRepository.verifyAllAvailableVacancies();

        if (allAvailableVacancies == ALLVACANCIES) {
            throw new AppError("There are no vacancies available. Please try again later.", 503);
        }

        const carID = await this.carsRepository.findByID(car_id);
        const vacancyID = await this.vacanciesRepository.findByID(vacancy_id);

        if (!carID || !vacancyID) {
            throw new AppError("Not exist this Car ID or not exist this Vacancy ID.", 404);
        }

        const carIdParking = await this.parkingsRepository.verifyCarIdParking(car_id);

        if (carIdParking) {
            throw new AppError("That car already parked!", 409);
        }

        const vacancyAvailable = await this.vacanciesRepository.verifyAvailableVacancy(vacancy_id);

        if (!vacancyAvailable) {
            throw new AppError("This vacancy doesn't available.", 409);
        }

        await this.parkingsRepository.create(car_id, vacancy_id);
        await this.vacanciesRepository.updateAvailableVacancy(vacancy_id, false);
    }
}