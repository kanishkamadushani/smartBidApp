import express from "express";
import {
  allitems,
  createItem,
  searchItems,
  updateItem,
} from "../controllers/item.js";

const router = express.Router();

//create an item route
router.post("/create", createItem);

//get all items
router.get("/all", allitems);

//search item
router.get("/search", searchItems);

//update item,
router.patch("/:id", updateItem);
export default router;
