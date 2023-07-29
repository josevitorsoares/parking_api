import { Parking } from "../models/Parking";
import { ParkingsRepository } from "../repositories/connection/ConnectionParkingRepository";

interface ListActiveParkingUseCaseResponse {
    parkings: Parking[];
}

export class ListActiveParkingUseCase {
    constructor(private parkingsRepository: ParkingsRepository) {}

    async execute(): Promise<ListActiveParkingUseCaseResponse> {
        const parkings = await this.parkingsRepository.listActiveParkings();

        return { parkings };
    }
}