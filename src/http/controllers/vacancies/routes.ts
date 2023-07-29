import { Router } from "express";
import { create } from "./create";
import { listAvailableVacancies } from "./listAvailable";

const vacanciesRoutes = Router();

vacanciesRoutes.post("/create", create);
vacanciesRoutes.get("/listAvailable", listAvailableVacancies);

export { vacanciesRoutes };