import { ParkingsRepository } from "../repositories/connection/ConnectionParkingRepository";

export class SumAmountOnDayUseCase {
    constructor(private parkingsRepository: ParkingsRepository){}
    
    async execute() {
        const result = await this.parkingsRepository.sumAmountOnDay();

        return result;
    }
}