import { Router } from "express";
import { create } from "./create";

const vacanciesRoutes = Router();

vacanciesRoutes.post("/create", create);

export { vacanciesRoutes };