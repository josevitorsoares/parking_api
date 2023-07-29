import { Router } from "express";
import { create } from "./create";
import { listCars } from "./listCars";

const carsRoutes = Router();

carsRoutes.post("/create", create);
carsRoutes.get("/listAll", listCars);

export { carsRoutes };