import { Vacancies } from "../models/Vacancies";
import { VacanciesRepository } from "../repositories/connection/ConnectionVacanciesRepository";

interface ListAvailableVacanciesUseCaseResponse {
    vacancies: Vacancies[];
}

export class ListAvailableVacanciesUseCase {
    constructor(private vacanciesRepository: VacanciesRepository) { }

    async execute(): Promise<ListAvailableVacanciesUseCaseResponse> {
        const vacancies = await this.vacanciesRepository.listAvailableVacancies();

        return { vacancies };
    }
}