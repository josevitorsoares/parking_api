import { ParkingsRepository } from "../../repositories/connection/ConnectionParkingRepository";
import { SumAmountOnDayUseCase } from "../sumAmountOnDay";

export function makeSumAmountOnDayUseCase(){
    const parkingsRepository = new ParkingsRepository();
    const useCase = new SumAmountOnDayUseCase(parkingsRepository);

    return useCase;
}