import { Cars } from "../models/Cars";
import { CarsRepository } from "../repositories/connection/ConnectionCarsRepository";

interface ListAllCarsUseCaseResponse {
    cars: Cars[];
}

export class ListAllCarsUseCase {
    constructor(private carsRepository: CarsRepository) {}

    async execute(): Promise<ListAllCarsUseCaseResponse> {
        const cars = await this.carsRepository.listAllCars();
        return { cars };
    }
}