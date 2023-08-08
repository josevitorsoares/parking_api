import { ParkingsRepository } from "../../repositories/connection/ConnectionParkingRepository";
import { VacanciesRepository } from "../../repositories/connection/ConnectionVacanciesRepository";
import { UnparkingUseCase } from "../unparking";

export function makeUnparkingUseCase() {
    const parkingsRepository = new ParkingsRepository();
    const vacanciesRepository = new VacanciesRepository();

    const useCase = new UnparkingUseCase(parkingsRepository, vacanciesRepository);

    return useCase;
}