import { Request, Response } from "express";
import { makeListAvailableVacanciesUseCase } from "../../../useCases/factories/makeListAvailableVacanciesUseCase";

export async function listAvailableVacancies(request: Request, response: Response): Promise<Response>{
    const listAvailablVacanciesUseCase = makeListAvailableVacanciesUseCase();

    const result = await listAvailablVacanciesUseCase.execute();

    return response.json(result.vacancies);
}