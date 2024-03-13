import mongoose from "mongoose";

const { Schema, model } = mongoose;
const BreakFastSchema = new Schema(
  {
    eggs: {
      type: Number,
      required: true,
      min: [6, "Too few Eggs"],
      max: 12,
    },
    bacon: {
      type: Number,
      required: [true, "Why not Becon ?"],
    },
    drinks: {
      type: String,
      enum: ["Coffee", "Tea"],
      required: function () {
        return;
        this.bacon > 3;
      },
    },
  },
  { timestamps: true }
);

export const Breakfast = model("Breakfast", BreakFastSchema);

// in mongo db the collection name would be :- users
