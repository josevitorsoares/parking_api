import { Request, Response } from "express";
import { makeListActiveParkingsUseCase } from "../../../useCases/factories/makeListActiveParkingsUseCase";

export async function listActive(request: Request, response: Response): Promise<Response> {
    const parkingUseUseCase = makeListActiveParkingsUseCase();
    
    const result = await parkingUseUseCase.execute();

    return response.json({message: !result ? `${result}` : "There are currently no active parking lots"});
}

