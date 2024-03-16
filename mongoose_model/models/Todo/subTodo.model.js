import mongoose from "mongoose";

const { Schema, model } = mongoose;

const SubTodoSchema = new Schema(
  {
    todoContent: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subtodo = model("Subtodo", SubTodoSchema);
