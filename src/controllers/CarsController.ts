import { Request, Response } from "express";
import { CarsServices } from "../services/CarsServices";

class CarsController {
    async createCars(request: Request, response: Response): Promise<Response> {
        const { owner, license_plate, telephone } = request.body;
        const carsServices = new CarsServices();

        await carsServices.create(owner, license_plate, telephone);

        return response.send();
    }
}

export { CarsController };