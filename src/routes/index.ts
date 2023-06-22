import { Router } from "express";
import { carsRoutes } from "./cars.routes";
import { vacanciesRoutes } from "./vacancies.routes";

const router = Router();

router.use("/cars", carsRoutes);
router.use("/vacancies", vacanciesRoutes);

export { router };