import express from "express";
import { createNotification } from "../controllers/notification.js";

const router = express.Router();

//create notification
router.post("/create", createNotification);

export default router;
