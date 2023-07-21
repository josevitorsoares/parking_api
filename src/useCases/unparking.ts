import { ParkingsRepository } from "../repositories/connection/ConnectionParkingRepository";

interface UnparkingRequest {
    vacancy_id: string;
}

export class UnparkingUseCase {
    constructor(private parkingsRepository: ParkingsRepository) {}

    async execute({ vacancy_id }: UnparkingRequest) {
        await this.parkingsRepository.unparking(vacancy_id);
    }
}