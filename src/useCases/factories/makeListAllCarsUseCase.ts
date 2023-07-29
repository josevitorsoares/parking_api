import { CarsRepository } from "../../repositories/connection/ConnectionCarsRepository";
import { ListAllCarsUseCase } from "../listCars";

export function makeListAllCarsUseCase() {
    const carsRepository = new CarsRepository();
    const useCase = new ListAllCarsUseCase(carsRepository);

    return useCase;
}