import { Router } from "express";
import { CarsController } from "../controllers/CarsController";

const carsRoutes = Router();
const carsController = new CarsController();

carsRoutes.post("/create", carsController.createCars);

export { carsRoutes };