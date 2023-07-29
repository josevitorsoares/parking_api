import { Request, Response } from "express";
import { makeListAllParkingsUseCase } from "../../../useCases/factories/makeListAllParkingsUseCase";

export async function listAll(request: Request, response: Response): Promise<Response> {
    const parkingUseCase = makeListAllParkingsUseCase();
    const result = await parkingUseCase.execute();

    return response.json(result.parkings);
}