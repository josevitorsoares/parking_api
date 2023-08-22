import { Request, Response } from "express";
import { makeSumAmountOnDayUseCase } from "../../../useCases/factories/makeSumAmountOnDayUseCase";

export async function sumAmount(request: Request, response: Response): Promise<Response> {
    const sumAmountUseCase = makeSumAmountOnDayUseCase();

    const result = await sumAmountUseCase.execute();

    return response.json({message: !result ? `${result}` : "There was no completed parking today"});
}