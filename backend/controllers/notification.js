import { Notification } from "../models/notificationModel.js";

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
