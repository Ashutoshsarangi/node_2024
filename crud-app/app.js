import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoute from "./src/routes/userRoute.js";
import categoryRoute from "./src/routes/categoryRoute.js";
import productRoute from "./src/routes/productRoute.js";
import ResponseErrorHandler from "./src/utils/responseErrorHandler.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URI;
console.log(DATABASE_URL, PORT);

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log("DB Connected Sucessfully");
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  })
  .catch((err) =>
    console.log("Failed While connecting to Database ---> ", err)
  );

app.use("/api/user", userRoute);
app.use("/api/category", categoryRoute);
app.use("/api/product", productRoute);

app.use((req, res, next) => {
  const error = new ResponseErrorHandler("Could not found this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "Something Went Wrong..." });
});
