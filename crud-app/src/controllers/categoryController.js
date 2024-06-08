import Category from "../models/categoryModel.js";
import { erroHandler, sucessHandler } from "../utils/common.utils.js";

export const create = async (req, res) => {
  try {
    const categoryData = new Category(req.body);

    if (!categoryData) {
      return erroHandler(res, "Category Data not found", 404);
    }

    const savedData = await categoryData.save();
    return sucessHandler(res, "Category Saved Sucessfully", savedData);
  } catch (error) {
    return erroHandler(res, error);
  }
};

export const getAll = async (req, res) => {
  try {
    const categoryData = await Category.find();

    if (!categoryData) {
      return sucessHandler(res, "Category Data not found", [], 404);
    }

    return sucessHandler(res, "Category Saved Sucessfully", categoryData);
  } catch (error) {
    return erroHandler(res, error);
  }
};
