import { Request, Response } from "express";
import { ParkingService } from "../services/ParkingService";

class ParkingController {
    async createParking(request: Request, response: Response): Promise<Response> {
        const parkinService = new ParkingService();
        const { entry_time, exit_time, fk_car_id, fk_vacancy_id } = request.body;
        
        await parkinService.create(entry_time, exit_time, fk_car_id, fk_vacancy_id);
        
        return response.send();

    }
}

export { ParkingController };