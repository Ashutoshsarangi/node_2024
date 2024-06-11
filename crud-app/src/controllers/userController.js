import User from "../models/userModels.js";
import { sucessHandler } from "../utils/common.utils.js";
import ResponseErrorHandler from "../utils/responseErrorHandler.js";

export const create = async (req, res, next) => {
  try {
    const userData = new User(req.body);

    if (!userData) {
      return next(new ResponseErrorHandler("User Data not found", 404));
    }

    const savedData = await userData.save();
    return sucessHandler(res, "User Data Saved Sucessfully", savedData);
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
