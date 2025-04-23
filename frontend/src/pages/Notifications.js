/*import React from "react";
import { useNotification } from "../hooks/useNotifications";
import { Box, Typography, Paper, List, ListItem, Divider } from "@mui/material";

const Notifications = () => {
  const { notifications } = useNotification();

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Notifications
      </Typography>

      {notifications.length === 0 ? (
        <Typography>No notifications yet.</Typography>
      ) : (
        <Paper elevation={3}>
          <List>
            {notifications.map((notif, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <Typography>{notif.message}</Typography>
                </ListItem>
                {index < notifications.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default Notifications;*/
// pages/Notifications.js
import React from "react";
import { useNotification } from "../hooks/useNotifications";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  Divider,
  Chip,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const NotificationsPage = () => {
  const { storedNotifications, removeNotification } = useNotification();

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Notification History
      </Typography>

      {storedNotifications.length === 0 ? (
        <Typography>No notifications yet.</Typography>
      ) : (
        <Paper elevation={3}>
          <List>
            {storedNotifications.map((notif) => (
              <React.Fragment key={notif.id}>
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge="end"
                      onClick={() => removeNotification(notif.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <Box width="100%">
                    <Box display="flex" justifyContent="space-between">
                      <Typography>{notif.message}</Typography>
                      <Chip
                        label={notif.severity}
                        size="small"
                        color={
                          notif.severity === "error"
                            ? "error"
                            : notif.severity === "warning"
                            ? "warning"
                            : "success"
                        }
                      />
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      {new Date(notif.timestamp).toLocaleString()}
                    </Typography>
                  </Box>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default NotificationsPage;
