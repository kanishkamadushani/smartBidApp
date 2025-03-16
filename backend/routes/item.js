import express from "express";
import { createItem } from "../controllers/item.js";

const router = express.Router();

//create an item route
router.post("/create", createItem);

export default router;
