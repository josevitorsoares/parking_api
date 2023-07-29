import { Request, Response } from "express";
import { makeCreateCarUseCase } from "../../../useCases/factories/makeCreateCarUseCase";

export async function create(request: Request, response: Response): Promise<Response> {
    const { owner, license_plate, telephone } = request.body;
    const createCarsUseCase = makeCreateCarUseCase();

    await createCarsUseCase.execute({ owner, license_plate, telephone });

    return response.send();
}
