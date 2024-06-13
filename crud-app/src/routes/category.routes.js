import express from "express";
import { create, getAll } from "../controllers/category.controllers.js";

const categoryRoute = express.Router();

categoryRoute.post("/create", create);
categoryRoute.get("/get-all", getAll);

export default categoryRoute;
