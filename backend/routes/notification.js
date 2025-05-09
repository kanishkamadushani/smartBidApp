import express from "express";
import {
  createNotification,
  getNotification,
  deleteNotification,
} from "../controllers/notification.js";

const router = express.Router();

//create notification
router.post("/create", createNotification);

//get all notification for a user
router.get("/:email", getNotification);

//delete notification
router.delete("/notification/:id", deleteNotification);

export default router;
