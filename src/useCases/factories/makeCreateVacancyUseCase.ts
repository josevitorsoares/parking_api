import { VacanciesRepository } from "../../repositories/connection/ConnectionVacanciesRepository";
import { CreateVacancyUseCase } from "../createVacancy";

export function makeCreateVacancyUseCase() {
    const vacanciesRepository = new VacanciesRepository();
    const useCase = new CreateVacancyUseCase(vacanciesRepository);

    return useCase;
}