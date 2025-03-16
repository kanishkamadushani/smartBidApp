import mongoose from "mongoose";

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
});

export const Item = mongoose.model("Item", itemSchema);
