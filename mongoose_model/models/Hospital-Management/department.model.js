import mongoose from "mongoose";

const { Schema, model } = mongoose;

const DepartmentSchema = new Schema(
  {
    hospital: {
      type: String,
      required: true,
    },
    departmentName: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },
  },
  { timestamps: true }
);

export const Department = model("Department", DepartmentSchema);
