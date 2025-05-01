import mongoose from "mongoose";

const { Schema } = mongoose;

const notificationSchema = new Schema({
  activity: { type: String, required: true },
  primary_user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  secondary_user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Notification = mongoose.model("Notification", notificationSchema);
