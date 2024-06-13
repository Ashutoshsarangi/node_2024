import Product from "../models/product.models.js";
import { erroHandler, sucessHandler } from "../utils/common.utils.js";

export const create = async (req, res) => {
  try {
    const productData = new Product(req.body);

    if (!productData) {
      return erroHandler(res, "Product Data not found", 404);
    }

    const savedData = await productData.save();
    return sucessHandler(res, "Product Saved Sucessfully", savedData);
  } catch (error) {
    return erroHandler(res, error);
  }
};

export const getAllProductByCategory = async (req, res) => {
  try {
    const productData = await Product.find().populate("category");

    if (!productData) {
      return sucessHandler(res, "Product Data not found", [], 404);
    }

    return sucessHandler(res, "Product Saved Sucessfully", productData);
  } catch (error) {
    return erroHandler(res, error);
  }
};
