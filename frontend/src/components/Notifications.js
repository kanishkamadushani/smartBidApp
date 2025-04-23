/*import React from "react";
import { Alert, Stack } from "@mui/material";
import { useNotification } from "../hooks/useNotifications"; // ✅ Correct import

const Notifications = () => {
  const { notifications } = useNotification(); // ✅ Correct hook usage

  return (
    <Stack
      spacing={2}
      sx={{ position: "fixed", top: 16, right: 16, zIndex: 9999 }}
    >
      {notifications.map((note, idx) => (
        <Alert key={idx} severity="success" variant="filled">
          {note.message}
        </Alert>
      ))}
    </Stack>
  );
};

export default Notifications;*/
// components/Notifications.js (toast notifications)
import React from "react";
import { Alert, Stack } from "@mui/material";
import { useNotification } from "../hooks/useNotifications";

const NotificationBanner = () => {
  const { toasts } = useNotification();

  return (
    <Stack
      spacing={2}
      sx={{ position: "fixed", top: 16, right: 16, zIndex: 9999 }}
    >
      {toasts.map((note) => (
        <Alert
          key={note.id}
          severity={note.severity || "success"}
          variant="filled"
        >
          {note.message}
        </Alert>
      ))}
    </Stack>
  );
};

export default NotificationBanner;
