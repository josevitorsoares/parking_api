import { Router } from "express";
import { carsRoutes } from "./cars.routes";
import { vacanciesRoutes } from "./vacancies.routes";
import { parkingRoutes } from "./parking.routes";

const router = Router();

router.use("/cars", carsRoutes);
router.use("/vacancies", vacanciesRoutes);
router.use("/parking", parkingRoutes);

export { router };