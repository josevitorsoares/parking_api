import { Parking } from "../models/Parking";
import { ParkingsRepository } from "../repositories/connection/ConnectionParkingRepository";

interface ListAllParkingsUseCaseResponse{
    parkings: Parking[];
}

export class ListAllParkingsUseCase {
    constructor (private parkingsRepository: ParkingsRepository){}

    async execute(): Promise<ListAllParkingsUseCaseResponse>{
        const parkings = await this.parkingsRepository.listAllParkings();

        return { parkings };
    }
}