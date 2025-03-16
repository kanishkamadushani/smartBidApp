import express from "express";
import { allitems, createItem } from "../controllers/item.js";

const router = express.Router();

//create an item route
router.post("/create", createItem);

//get all items
router.get("/all", allitems);
export default router;
