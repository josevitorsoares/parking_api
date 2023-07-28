import { ParkingsRepository } from "../../repositories/connection/ConnectionParkingRepository";
import { ListActiveParkingUseCase } from "../listActiveParkingsUseCase";

export function makeListActiveParkingsUseCase(){
    const parkingsRepository = new ParkingsRepository();
    const useCase = new ListActiveParkingUseCase(parkingsRepository);

    return useCase;
}