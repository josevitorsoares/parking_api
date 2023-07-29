import { ParkingsRepository } from "../../repositories/connection/ConnectionParkingRepository";
import { ListAllParkingsUseCase } from "../listAllParkingsUseCase";

export function makeListAllParkingsUseCase(){
    const parkingsRepository = new ParkingsRepository();
    const useCase = new ListAllParkingsUseCase(parkingsRepository);

    return useCase;
}
