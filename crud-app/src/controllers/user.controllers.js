import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.models.js";
import { sucessHandler } from "../utils/common.utils.js";
import ResponseErrorHandler from "../utils/responseErrorHandler.utils.js";
import { JWT_TOKEN_SALT } from "../constants/app.constants.js";

export const create = async (req, res, next) => {
  let hashedPassword;

  try {
    hashedPassword = await bcrypt.hash(req.body.password, 12);
  } catch (error) {
    return next(
      new ResponseErrorHandler(
        "Something wrong in the Hashing of Password !!!",
        500
      )
    );
  }

  try {
    const userData = new User({ ...req.body, password: hashedPassword });

    if (!userData) {
      return next(new ResponseErrorHandler("User Data not found", 404));
    }

    const savedData = await userData.save();
    const token = jwt.sign(
      {
        userId: savedData._id,
        email: savedData.email,
      },
      JWT_TOKEN_SALT,
      { expiresIn: "1h" }
    );

    return sucessHandler(res, "User Data Saved Sucessfully", {
      ...savedData,
      token,
    });
  } catch (error) {
    return next(error);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const allUser = await User.find();
    if (!allUser) {
      return next(new ResponseErrorHandler("No user found", 404));
    }

    return sucessHandler(res, "User Data Saved Sucessfully", allUser);
  } catch (error) {
    return next(error);
  }
};

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return next(new ResponseErrorHandler("User Data not found", 404));
    }

    return sucessHandler(res, "User Data get Sucessfully", userExist);
  } catch (error) {
    return next(error);
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return next(new ResponseErrorHandler("User Data not found", 404));
    }

    return sucessHandler(res, "User Data get Sucessfully", updatedUser);
  } catch (error) {
    return next(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);

    return sucessHandler(res, "User Data Deleted Sucessfully");
  } catch (error) {
    return next(error);
  }
};

export const login = async () => {
  // Find oneElement by Id/Email
  const existingUser = {
    password: "", //Hashed Password
    id: "", // We will get from DB
    email: "",
  };
  const isValidPassword = await bcrypt.compare(
    req.body.password,
    existingUser.password
  );

  const token = jwt.sign(
    {
      userId: existingUser.id,
      email: existingUser.email,
    },
    JWT_TOKEN_SALT,
    { expiresIn: "1h" }
  );

  return sucessHandler(res, "User Data Saved Sucessfully", {
    userId: existingUser.id,
    token,
  });
};
