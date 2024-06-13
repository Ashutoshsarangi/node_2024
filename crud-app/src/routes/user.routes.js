import express from "express";
import {
  create,
  deleteUser,
  getAll,
  getOne,
  update,
} from "../controllers/user.controllers.js";
import { checkAuth } from "../middlewares/checkAuth.middleware.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAll", getAll);
route.use(checkAuth); // Middleware after this all routes are going through the middleware, the above routes are
// not going to use the middleware
route.get("/getOne/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);

export default route;
