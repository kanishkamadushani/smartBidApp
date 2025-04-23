import mongoose from "mongoose";
import { User } from "../models/userModel.js";
import { Bid } from "../models/bidModel.js";
import { Item } from "../models/itemModel.js";

//create an item
export const createBid = async (req, res) => {
  const { item_id, email, amount } = req.body;

  try {
    //search user_id from email
    const user = await User.findOne({ email }, { _id: 1 }).lean();
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    //check same user or not
    const item = await Item.findById(item_id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    console.log(item.user_id, user);

    if (item.user_id.toString() === user._id.toString()) {
      return res
        .status(404)
        .json({ error: "User can not bid for own listed items." });
    }

    //Check existing bids
    const currentHighestBid = await Bid.findOne({ item_id })
      .sort({ amount: -1 }) // descending
      .lean(); // optional, returns a plain JS object

    if (currentHighestBid && amount <= currentHighestBid.amount) {
      return res.status(400).json({
        error: `Your bid must be higher than the current highest bid of ${currentHighestBid.amount}`,
      });
    }
    //create bid
    const bid = await Bid.create({
      item_id: item_id,
      user_id: user,
      amount,
    });
    res.status(200).json(bid);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
