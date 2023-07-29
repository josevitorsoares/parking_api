import { VacanciesRepository } from "../repositories/connection/ConnectionVacanciesRepository";

interface CreateVacancyRequest {
    vacancy_number: string;
}

export class CreateVacancyUseCase {
    constructor(private vacanciesRepository: VacanciesRepository){}

    async execute({ vacancy_number }: CreateVacancyRequest) {
        await this.vacanciesRepository.create(vacancy_number);
    }
}