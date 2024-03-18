import mongoose from "mongoose";

const { Schema, model } = mongoose;

const OrderItemSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  productQuantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

const OrderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    orderItem: {
      type: [OrderItemSchema],
    },
  },
  { timestamps: true }
);

export const Order = model("Order", OrderSchema);
