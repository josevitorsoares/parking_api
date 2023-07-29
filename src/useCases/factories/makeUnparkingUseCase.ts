import { ParkingsRepository } from "../../repositories/connection/ConnectionParkingRepository";
import { UnparkingUseCase } from "../unparking";

export function makeUnparkingUseCase() {
    const parkingsRepository = new ParkingsRepository();
    const useCase = new UnparkingUseCase(parkingsRepository);

    return useCase;
}