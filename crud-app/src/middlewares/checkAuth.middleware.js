import jwt from "jsonwebtoken";
import ResponseErrorHandler from "../utils/responseErrorHandler.utils";
import { JWT_TOKEN_SALT } from "../constants/app.constants.js";

export const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization(" ")[1]; // 'Bearer Token
    if (!token) {
      throw new Error();
    }
    const decodedToken = jwt.verify(token, JWT_TOKEN_SALT);
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    const error = new ResponseErrorHandler("Authentication Failed !!!", 401);
    return next(error);
  }
};
