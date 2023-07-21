import { Request, Response } from "express";
import { makeUnparkingUseCase } from "../../../useCases/factories/makeUnparkingUseCase";

export async function unparking(request: Request, response: Response): Promise<Response> {
    const parkingService = makeUnparkingUseCase();
    const { vacancy_id } = request.body;

    await parkingService.execute(vacancy_id);

    return response.send();
}