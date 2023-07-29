import { CarsRepository } from "../repositories/connection/ConnectionCarsRepository";

interface CreateCarsUseCaseRequest{
    owner: string;
    license_plate: string;
    telephone: string;
}

export class CreateCarsUseCase{
    constructor(private carsRepository: CarsRepository){}

    async execute({owner, license_plate, telephone}: CreateCarsUseCaseRequest){
        await this.carsRepository.create(owner, license_plate, telephone);
    }
}