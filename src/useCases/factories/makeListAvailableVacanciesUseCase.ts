import { VacanciesRepository } from "../../repositories/connection/ConnectionVacanciesRepository";
import { ListAvailableVacanciesUseCase } from "../listVacancies";

export function makeListAvailableVacanciesUseCase(){
    const vacanciesRepository = new VacanciesRepository();
    const useCase = new ListAvailableVacanciesUseCase(vacanciesRepository);

    return useCase;
}