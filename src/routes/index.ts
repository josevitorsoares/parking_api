import { Router } from "express";
import { carsRoutes } from "./cars.routes";

const router = Router();

router.use("/cars", carsRoutes);

export { router };