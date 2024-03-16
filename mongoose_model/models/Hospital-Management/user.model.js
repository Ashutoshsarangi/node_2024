import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    emial: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["doctor", "patient", "other"],
      default: "other",
    },
  },
  { timestamps: true }
);

export const User = model("User", UserSchema);
