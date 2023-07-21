import { Request, Response } from "express";
import { makeCreateVacancyUseCase } from "../../../useCases/factories/makeCreateVacancyUseCase";

export async function create(request: Request, response: Response): Promise<Response> {
    const { vacancy_number } = request.body;
    const vacanciesServices = makeCreateVacancyUseCase();

    await vacanciesServices.execute(vacancy_number);

    return response.send();
}