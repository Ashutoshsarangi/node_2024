import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {},
    password: {},
    contact: {},
  },
  { timestamps: true }
);

export const User = model("User", UserSchema);

// in mongo db the collection name would be :- users
