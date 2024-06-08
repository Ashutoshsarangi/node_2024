import User from "../models/userModels.js";
import { erroHandler, sucessHandler } from "../utils/common.utils.js";

export const create = async (req, res) => {
  try {
    const userData = new User(req.body);

    if (!userData) {
      return erroHandler(res, "User Data not found", 404);
    }

    const savedData = await userData.save();
    return sucessHandler(res, "User Data Saved Sucessfully", savedData);
  } catch (error) {
    console.log("Failed in Back End User Creation, ", error);
    return erroHandler(res, error);
  }
};

export const getAll = async (req, res) => {
  try {
    const allUser = await User.find();
    if (!allUser) {
      return res.status(404).json({
        message: "No user found",
        data: [],
        status: 404,
        sucess: true,
      });
    }
    return res.status(200).json({
      message: "Found All user",
      data: allUser,
      status: 200,
      sucess: true,
    });
  } catch (error) {
    console.log("Failed in Back End User Creation, ", error);
    return res.status(500).json({
      message: error,
      status: 500,
      sucess: false,
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return erroHandler(res, "User Data not found", 404);
    }

    return sucessHandler(res, "User Data get Sucessfully", userExist);
  } catch (error) {
    return erroHandler(res, error);
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return erroHandler(res, "User Data not found", 404);
    }

    return sucessHandler(res, "User Data get Sucessfully", updatedUser);
  } catch (error) {
    return erroHandler(res, error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);

    return sucessHandler(res, "User Data Deleted Sucessfully");
  } catch (error) {
    return erroHandler(res, error);
  }
};
