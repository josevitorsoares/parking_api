import { Router } from "express";
import { ParkingController } from "../controllers/ParkingController";

const parkingRoutes = Router();

const parkingController = new ParkingController();

parkingRoutes.post("/create", parkingController.createParking);
parkingRoutes.post("/unparking", parkingController.unparking);

export { parkingRoutes };