import mongoose from "mongoose";
const val = ["Coffee", "Tea"];
const { Schema, model } = mongoose;
const BreakFastSchemaV2 = new Schema(
  {
    eggs: {
      type: Number,
      required: true,
      min: [6, "Must be at least 6, got {VALUE}"],
      max: 12,
    },
    bacon: {
      type: Number,
      required: [true, "Why not Becon ?"],
    },
    drinks: {
      type: String,
      enum: {
        values: val,
        message: `{VALUE} is not supported, only Supported Drinks are --> ${val}`,
      },
      required: function () {
        return this.bacon > 3;
      },
    },
  },
  { timestamps: true }
);

export const Breakfastv2 = model("Breakfastv2", BreakFastSchemaV2);

// in mongo db the collection name would be :- users
