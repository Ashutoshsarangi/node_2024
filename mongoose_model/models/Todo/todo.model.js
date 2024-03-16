import mongoose from "mongoose";
import { Subtodo } from "./subTodo.model.js";

const { Schema, model } = mongoose;

const TodoSchema = new Schema(
  {
    todoTitle: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    todoList: [
      {
        type: Schema.Types.ObjectId,
        ref: "Subtodo",
      },
    ],
  },
  { timestamps: true }
);

export const Todo = model("Todo", TodoSchema);
