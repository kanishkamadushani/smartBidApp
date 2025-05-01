import express from "express";
import Notification from "../models/notificationModel.js";
const router = express.Router();

router.get("/:userId", async (req, res) => {
  try {
    const notifications = await Notification.find({
      user_id: req.params.userId,
    }).sort({ createdAt: -1 });
    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
