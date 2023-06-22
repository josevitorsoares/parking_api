import express from "express";
import { router } from "./routes";
import { client } from "../database/db";

client;

const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, ()=> {
    console.log("🚀 Server runing!");
})