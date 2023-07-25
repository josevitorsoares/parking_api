import { Router } from "express";
import { create } from "./parking";
import { unparking } from "./unparking";
import { sumAmount } from "./sumAmount";

const parkingRoutes = Router();

parkingRoutes.post("/create", create);
parkingRoutes.post("/unparking", unparking);
parkingRoutes.get("/sum", sumAmount);

export { parkingRoutes };