import mongoose from "mongoose";
import { Item } from "../models/itemModel.js";
import { User } from "../models/userModel.js";

//create an item
export const createItem = async (req, res) => {
  const { name, category, amount, description, img, email } = req.body;
  console.log(name, category, amount, description, img, email);
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
    //search user_id from email
    const user = await User.findOne({ email }, { _id: 1 }).lean();
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    //create user
    const item = await Item.create({
      name,
      category,
      amount,
      description,
      img,
      user_id: user,
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
export const searchItems = async (req, res) => {
  const { id, name, category, amount, userId } = req.query; // Get filters from query parameters

  if (!id && !name && !category && !amount && !userId) {
    return res
      .status(400)
      .json({ error: "At least one search parameter is required!" });
  }

  try {
    // Build dynamic query object
    let query = {};
    if (id) query.id = id;
    if (name) query.name = { $regex: new RegExp(name, "i") }; // Case-insensitive search
    if (category) query.category = category;
    if (amount) query.amount = amount;
    if (userId) query.userId = userId;

    // Execute the query
    const items = await Item.find(query);

    if (items.length === 0) {
      return res
        .status(404)
        .json({ message: "No items found matching the criteria" });
    }

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
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
// Delete an item (DELETE)
export const deleteItem = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid item ID" });
    }

    const item = await Item.findByIdAndDelete(id);

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json({ message: "Item deleted successfully", item });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findById(id);

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getItemsbyEmail = async (req, res) => {
  try {
    //getting userid by email.
    const { email } = req.body;
    const user = await User.findOne({ email }, { _id: 1 }).lean();
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    console.log(user);

    //get all items from the user id
    const items = await Item.find({ user_id: user });
    //const items = await Item.find({ user_id: user._id });

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
