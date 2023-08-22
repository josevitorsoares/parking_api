import { AppError } from "../http/middlewares/AppError";
import { IVacanciesRepository } from "../repositories/VacanciesRepository";

interface CreateVacancyRequest {
    vacancy_number: string;
}

export class CreateVacancyUseCase {
    constructor(private vacanciesRepository: IVacanciesRepository){}

    async execute({ vacancy_number }: CreateVacancyRequest) {
        const vacancyNumber = await this.vacanciesRepository.verifyVacancyNumber(vacancy_number);
        
        if (vacancyNumber) {
            throw new AppError("Vacancy number already exists", 422);
        }
        
        await this.vacanciesRepository.create(vacancy_number);
    }
}