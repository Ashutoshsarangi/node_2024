import express from "express";
import {
  create,
  getAllProductByCategory,
} from "../controllers/productController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAllProductByCategory", getAllProductByCategory);

export default route;
