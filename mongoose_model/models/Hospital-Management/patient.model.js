import mongoose from "mongoose";

const { Schema, model } = mongoose;

const PatientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    address: {
      name: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      district: {
        type: String,
        required: true,
      },
      policeStation: {
        type: String,
        required: true,
      },
      pin: {
        type: Number,
        required: true,
      },
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      type: String,
      enum: ["A", "B+", "E+", "AB+"],
      required: true,
    },
  },
  { timestamps: true }
);

export const Patient = model("Patient", PatientSchema);
