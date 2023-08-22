import { AppError } from "../http/middlwares/AppError";
import { IParkingRepository } from "../repositories/ParkingRepository";
import { IVacanciesRepository } from "../repositories/VacanciesRepository";

interface UnparkingRequest {
    vacancy_id: string;
}

const OPENINGTIME = 9; // Opening time
const CLOSETIME = 18; // Closing time
const MINIMUMHOURS = 1; //Minimum number of hours
const VALORPERHOUR = 20; // Value per 1h on parking

export class UnparkingUseCase {
    constructor(
        private parkingsRepository: IParkingRepository,
        private vacanciesRepository: IVacanciesRepository
    ) {}

    async execute({ vacancy_id }: UnparkingRequest) {
        const currentDate = this.parkingsRepository.getCurrentDate();
        const currentHour = this.parkingsRepository.getHour(currentDate);

        if (currentHour < OPENINGTIME || currentHour > CLOSETIME) {
            throw new AppError("Hours outside opening hours. Please try again during opening hours.", 403);
        }

        const vacancy = await this.vacanciesRepository.findByID(vacancy_id);

        if (!vacancy) {
            throw new AppError("This Vacancy ID doesn't exist.", 404);
        }

        const parking = await this.parkingsRepository.verifyVacancyIdParking(vacancy_id);

        if (!parking) {
            throw new AppError("There is no car parked in the vacancy.", 409);
        }

        const entryTime = await this.parkingsRepository.getEntryTimeParking(parking.id);
        let hour = this.parkingsRepository.compareInHours(entryTime, currentDate);

        if (hour < MINIMUMHOURS) {
            hour = MINIMUMHOURS;
        }

        const value = hour * VALORPERHOUR;
        
        await this.parkingsRepository.unparking(vacancy_id);
        await this.parkingsRepository.updateValueAndExitTimeParking(parking.id, value, currentDate);
    }
}