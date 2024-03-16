import mongoose from "mongoose";

const { Schema, model } = mongoose;

const HospitalSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    noOfBeds: {
      type: Number,
      required: true,
      default: 1,
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: "Address",
    },
  },
  { timestamps: true }
);

export const Hospital = model("Hospital", HospitalSchema);
