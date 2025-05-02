import React from "react";
import { useNotification } from "../hooks/useNotifications";
import { useNotificationsContext } from "../hooks/useNotificationsContext";
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
  const { notifications } = useNotificationsContext();

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Notification History
      </Typography>

      {notifications.length === 0 ? (
        <Typography>No notifications yet.</Typography>
      ) : (
        <Paper elevation={3}>
          <List>
            {notifications.map((notif) => (
              <React.Fragment key={notif._id}>
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge="end"
                      onClick={() => removeNotification(notif._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <Box width="100%">
                    <Box display="flex" justifyContent="space-between">
                      <Typography>{notif.activity}</Typography>
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
