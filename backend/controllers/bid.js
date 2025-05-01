import mongoose from "mongoose";
import { User } from "../models/userModel.js";
import { Bid } from "../models/bidModel.js";
import { Item } from "../models/itemModel.js";

export const createBid = async (req, res) => {
  const { item_id, email, amount } = req.body;

  try {
    // 1. Find user
    const user = await User.findOne({ email }, { _id: 1 }).lean();
    if (!user) return res.status(404).json({ error: "User not found" });

    // 2. Get item
    const item = await Item.findById(item_id);
    if (!item) return res.status(404).json({ error: "Item not found" });

    // 3. Prevent bidding on own item
    if (item.user_id.toString() === user._id.toString()) {
      return res
        .status(403)
        .json({ error: "User cannot bid on their own item" });
    }

    // 4. Check against current highest bid
    const currentHighestBid = await Bid.findOne({ item_id })
      .sort({ amount: -1 })
      .lean();

    if (currentHighestBid) {
      if (amount <= currentHighestBid.amount) {
        return res.status(400).json({
          error: `Your bid must be higher than the current highest bid of $${currentHighestBid.amount}`,
        });
      }
    } else {
      // No existing bids — check against starting amount
      if (amount <= item.amount) {
        return res.status(400).json({
          error: `Your bid must be higher than the starting amount of $${item.amount}`,
        });
      }
    }

    // 5. Create the bid
    const bid = await Bid.create({
      item_id,
      user_id: user._id,
      amount,
    });

    return res.status(200).json(bid);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
