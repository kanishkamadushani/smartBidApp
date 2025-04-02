import mongoose from "mongoose";
import { Item } from "../models/itemModel.js";

//create an item
export const createItem = async (req, res) => {
  const { name, category, amount, description, img } = req.body;

  let emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }

  if (!category) {
    emptyFields.push("category");
  }

  if (!amount) {
    emptyFields.push("amount");
  }

  if (!description) {
    emptyFields.push("description");
  }

  if (!img) {
    emptyFields.push("img");
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({
      error: "All fields must be filed",
      emptyFields: emptyFields,
    });
  }

  try {
    const item = await Item.create({
      name,
      category,
      amount,
      description,
      img,
    });
    res.status(200).json(item);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

//get all items
export const allitems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// Search items by category
export const searchItems = async (req, res) => {
  const { category } = req.query; // Get the category from the query parameters

  if (!category) {
    return res.status(400).json({ error: "Category is required!" });
  }

  try {
    // Find items where the category matches
    const items = await Item.find({ category: category });

    if (items.length === 0) {
      return res
        .status(404)
        .json({ message: "No items found in this category" });
    }
    // Return the found items
    res.status(200).json(items);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// Update an item (PUT)
export const updateItem = async (req, res) => {
  console.log("Check patch");
  const { id } = req.params; // Get the item ID from the URL
  const { name, category, amount, description, img } = req.body;

  // Find the item by its ID and update it with the new values
  try {
    const item = await Item.findByIdAndUpdate(
      id, // Find the item by its _id
      {
        name,
        category,
        amount,
        description,
        img,
      },
      { new: true } // `new: true` ensures that the updated item is returned
    );

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    // Send back the updated item
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
