import { Request, Response } from "express";
import { makeCreateParkgingUseCase } from "../../../useCases/factories/makeCreateParkingUseCase";

export async function create(request: Request, response: Response): Promise<Response> {
    const parkinService = makeCreateParkgingUseCase();
    const { car_id, vacancy_id } = request.body;

    await parkinService.execute({ car_id, vacancy_id });

    return response.send();
}