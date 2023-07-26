import { CarsRepository } from "../repositories/connection/ConnectionCarsRepository";

export class ListAllCarsUseCase {
    constructor(private carsRepository: CarsRepository){}

    async execute(){
        const result = await this.carsRepository.listAllCars();
        return result;
    }
}