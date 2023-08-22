import { Router } from "express";
import { create } from "./parking";
import { unparking } from "./unparking";
import { sumAmount } from "./sumAmount";
import { listActive } from "./listActive";
import { listAll } from "./listAll";

const parkingRoutes = Router();

parkingRoutes.post("/create", create);
parkingRoutes.post("/unparking", unparking);
parkingRoutes.get("/sum", sumAmount);
parkingRoutes.get("/listActiveParkings", listActive);
parkingRoutes.get("/listAllParkings", listAll);

export { parkingRoutes };