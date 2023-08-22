import { AppError } from "../http/middlwares/AppError";
import { ICarsRepository } from "../repositories/CarsRepository";

interface CreateCarsUseCaseRequest {
    owner: string;
    license_plate: string;
    telephone: string;
}

export class CreateCarsUseCase {
    constructor(private carsRepository: ICarsRepository) {}

    async execute({ owner, license_plate, telephone }: CreateCarsUseCaseRequest) {

        const carLicensePlate = await this.carsRepository.verifyLicensePlate(license_plate);

        if (carLicensePlate) {
            throw new AppError("There is already a car with this license plate!", 422);
        }

        await this.carsRepository.create(owner, license_plate, telephone);
    }
}