import { Router } from "express";
import { create } from "./create";

const carsRoutes = Router();

carsRoutes.post("/create", create);

export { carsRoutes };