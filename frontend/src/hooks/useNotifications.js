import { useNotificationContext } from "../context/NotificationContext";

export const useNotification = () => {
  const context = useNotificationContext();
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};
