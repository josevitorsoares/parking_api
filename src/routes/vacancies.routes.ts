import { Router } from "express";
import { VacanciesController } from "../controllers/VacanciesController";

const vacanciesRoutes = Router();
const vacanciesController = new VacanciesController();

vacanciesRoutes.post("/create", vacanciesController.createVacancy);

export { vacanciesRoutes };