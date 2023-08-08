import { CarsRepository } from "../../repositories/connection/ConnectionCarsRepository";
import { ParkingsRepository } from "../../repositories/connection/ConnectionParkingRepository";
import { VacanciesRepository } from "../../repositories/connection/ConnectionVacanciesRepository";
import { CreateParkingUseCase } from "../createParking";

export function makeCreateParkgingUseCase() {
    const parkingsRepository = new ParkingsRepository();
    const vacaciesRepository = new VacanciesRepository();
    const carsRepository = new CarsRepository();
    
    const useCase = new CreateParkingUseCase(
        parkingsRepository, 
        vacaciesRepository, 
        carsRepository
    );

    return useCase;
}