import { ParkingsRepository } from "../repositories/connection/ConnectionParkingRepository";

interface SumAmountOnDayUseCaseResponse {
    sumAmount: number,
}

export class SumAmountOnDayUseCase {
    constructor(private parkingsRepository: ParkingsRepository) { }

    async execute(): Promise<SumAmountOnDayUseCaseResponse> {
        const sumAmount = await this.parkingsRepository.sumAmountOnDay();

        return { sumAmount };
    }
}