import mongoose from "mongoose";

const { Schema, model } = mongoose;

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const Category = model("Category", CategorySchema);

export default Category;
