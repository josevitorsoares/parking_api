import { Request, Response } from "express";
import { VacanciesServices } from "../services/VacanciesService";

class VacanciesController {
    async createVacancy(request: Request, response: Response): Promise<Response> {
        const { vacancy_number } = request.body;
        const vacanciesServices = new VacanciesServices();

        await vacanciesServices.create(vacancy_number);

        return response.send();
    }
}

export { VacanciesController };