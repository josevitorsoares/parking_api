import { ParkingsRepository } from "../repositories/connection/ConnectionParkingRepository";

interface CreateParkinRequest {
    car_id: string;
    vacancy_id: string;
}

export class CreateParkingUseCase {
    constructor(private parkingsRepository: ParkingsRepository) { }

    async execute({ car_id, vacancy_id }: CreateParkinRequest) {
        await this.parkingsRepository.create(car_id, vacancy_id);
    }
}