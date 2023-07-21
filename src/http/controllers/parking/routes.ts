import { Router } from "express";
import { create } from "./parking";
import { unparking } from "./unparking";

const parkingRoutes = Router();

parkingRoutes.post("/create", create);
parkingRoutes.post("/unparking", unparking);

export { parkingRoutes };