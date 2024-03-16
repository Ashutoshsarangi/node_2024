import mongoose from "mongoose";

const { Schema, model } = mongoose;

const DoctorSchema = new Schema(
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
    assignedPatients: [
      {
        type: Schema.Types.ObjectId,
        ref: "Patient",
      },
    ],
    qualifications: [
      {
        name: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Doctor = model("Doctor", DoctorSchema);
