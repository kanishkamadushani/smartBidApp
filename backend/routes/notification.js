import express from "express";
import {
  createNotification,
  getNotification,
} from "../controllers/notification.js";

const router = express.Router();

//create notification
router.post("/create", createNotification);

//get all notification for a user
router.get("/:email", getNotification);

export default router;
