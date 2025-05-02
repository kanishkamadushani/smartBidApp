import React from "react";
import { Alert, Stack } from "@mui/material";
import { useNotification } from "../hooks/useNotifications";
import { useNotificationsContext } from "../hooks/useNotificationsContext";

const NotificationBanner = () => {
  const { toasts } = useNotification();
  const { notifications } = useNotificationsContext();

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
