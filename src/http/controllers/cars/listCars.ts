import { Request, Response } from "express";
import { makeListAllCarsUseCase } from "../../../useCases/factories/makeListAllCarsUseCase";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function listCars(request: Request, response: Response): Promise<Response> {
    const listCarsUseCase = makeListAllCarsUseCase();

    const result = await listCarsUseCase.execute();

    return response.json(result);
}