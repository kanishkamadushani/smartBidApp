import express from "express";
import { createBid } from "../controllers/bid.js";

const router = express.Router();

//create bid route
router.post("/create", createBid);

export default router;
