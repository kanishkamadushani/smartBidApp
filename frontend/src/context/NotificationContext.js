// src/context/NotificationContext.js
/*import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, severity = "success") => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, severity }]);

    // Auto remove after 5 seconds
    setTimeout(() => {
      removeNotification(id);
    }, 5000);
  };

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((note) => note.id !== id));
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        clearNotifications,
        removeNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => useContext(NotificationContext);*/
// context/NotificationContext.js
// src/context/NotificationContext.js
import { createContext, useContext, useState, useEffect } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]); // Temporary popup notifications
  const [storedNotifications, setStoredNotifications] = useState(() => {
    // Load from localStorage
    const saved = localStorage.getItem("notifications");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage when storedNotifications change
  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(storedNotifications));
  }, [storedNotifications]);

  const addNotification = (message, severity = "success") => {
    const id = Date.now();
    const newNotification = {
      id,
      message,
      severity,
      timestamp: new Date().toISOString(),
    };

    // Add to both temporary toasts and permanent storage
    setToasts((prev) => [...prev, newNotification]);
    setStoredNotifications((prev) => [newNotification, ...prev]);

    // Auto-remove only from toasts after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((note) => note.id !== id));
    }, 5000);
  };

  const removeNotification = (id) => {
    setStoredNotifications((prev) => prev.filter((note) => note.id !== id));
  };

  const clearNotifications = () => {
    setStoredNotifications([]);
  };

  return (
    <NotificationContext.Provider
      value={{
        toasts,
        storedNotifications,
        addNotification,
        removeNotification,
        clearNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => useContext(NotificationContext);
