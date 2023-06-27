import { Request, Response } from "express";
import { ParkingService } from "../services/ParkingService";

class ParkingController {
    async createParking(request: Request, response: Response): Promise<Response> {
        const parkinService = new ParkingService();
        const { car_id, vacancy_id } = request.body;

        await parkinService.create(car_id, vacancy_id);

        return response.send();
    }

    async unparking(request: Request, response: Response): Promise<Response> {
        const parkingService = new ParkingService();
        const { vacancy_id } = request.body;

        await parkingService.unparking(vacancy_id);

        return response.send();
    }
}

export { ParkingController };