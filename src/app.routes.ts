import { Router } from "express";
import { carsRoutes } from "./http/controllers/cars/routes";
import { vacanciesRoutes } from "./http/controllers/vacancies/routes";
import { parkingRoutes } from "./http/controllers/parking/routes";

const router = Router();

router.use("/cars", carsRoutes);
router.use("/vacancies", vacanciesRoutes);
router.use("/parking", parkingRoutes);

export { router };