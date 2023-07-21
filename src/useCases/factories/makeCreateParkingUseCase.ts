import { ParkingsRepository } from "../../repositories/connection/ConnectionParkingRepository";
import { CreateParkingUseCase } from "../createParking";

export function makeCreateParkgingUseCase() {
    const parkingsRepository = new ParkingsRepository();
    const useCase = new CreateParkingUseCase(parkingsRepository);

    return useCase;
}