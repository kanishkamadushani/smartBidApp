import mongoose from "mongoose";
import { Item } from "../models/itemModel.js";

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
