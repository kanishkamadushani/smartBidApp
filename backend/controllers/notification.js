import { Notification } from "../models/notificationModel.js";
import { User } from "../models/userModel.js";

//create an notification
export const createNotification = async (req, res) => {
  const { activity, primary_user_id, secondary_user_id } = req.body;
  try {
    //create notification
    const notification = await Notification.create({
      activity,
      primary_user_id,
      secondary_user_id,
    });
    res.status(200).json(notification);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

//gell all notifications for an email (user)
export const getNotification = async (req, res) => {
  const { email } = req.params;
  try {
    //search user_id from email
    const user = await User.findOne({ email }, { _id: 1 }).lean();
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const notifications = await Notification.find({
      $or: [{ primary_user_id: user }, { secondary_user_id: user }],
    });

    res.status(200).json(notifications);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
//delete notofications
export const deleteNotification = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Notification.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: "Notification not found" });
    }

    res.status(200).json({ message: "Notification deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
