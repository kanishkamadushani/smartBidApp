import express from "express";
import {
  allitems,
  createItem,
  searchItems,
  updateItem,
  deleteItem,
  getItemById,
} from "../controllers/item.js";

const router = express.Router();

//create an item route
router.post("/create", createItem);

//get all items
router.get("/all", allitems);

//search item
router.get("/search", searchItems);

//get item by id
router.get("/:id", getItemById);

//update item,
router.patch("/:id", updateItem);

//delete item,
router.delete("/:id", deleteItem);
export default router;
