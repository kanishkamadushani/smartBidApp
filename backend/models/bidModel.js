import mongoose from "mongoose";

const { Schema } = mongoose;

const bidSchema = new Schema({
  item_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
    required: true,
  },

  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  amount: { type: Number, required: true },
});

export const Bid = mongoose.model("Bid", bidSchema);
