import { CarsRepository } from "../../repositories/connection/ConnectionCarsRepository";
import { CreateCarsUseCase } from "../createCar";

export function makeCreateCarUseCase() {
    const carsRepository = new CarsRepository();
    const useCase = new CreateCarsUseCase(carsRepository);

    return useCase;
}