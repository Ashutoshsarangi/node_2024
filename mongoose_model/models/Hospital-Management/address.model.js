import mongoose from "mongoose";

const { Schema, model } = mongoose;

const AddressSchema = new Schema({
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
});

export const Address = model("Address", AddressSchema);
