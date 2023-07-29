import { Request, Response } from "express";
import { makeUnparkingUseCase } from "../../../useCases/factories/makeUnparkingUseCase";

export async function unparking(request: Request, response: Response): Promise<Response> {
    const { vacancy_id } = request.body;
    const unparkinUseCase = makeUnparkingUseCase();

    await unparkinUseCase.execute({ vacancy_id });

    return response.send();
}