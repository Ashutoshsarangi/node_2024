import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ProductSchema = new Schema(
  {
    productName: {
      type: String,
      unique: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    stock: {
      type: Number,
      required: true,
    },
    pricePerUnit: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      enum: ["$", "R"],
      required: true,
      default: "R",
    },
  },
  { timestamps: true }
);

const Product = model("Product", ProductSchema);

export default Product;
