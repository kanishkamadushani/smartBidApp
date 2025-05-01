/*import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const BidForm = () => {
  const [item, setItem] = useState(null);
  const [newBid, setNewBid] = useState("");
  const [existingBid, setExistingBid] = useState("");
  const { id } = useParams();
  const { user } = useAuthContext();

  useEffect(() => {
    //Api request
    const getItem = async () => {
      try {
        const response = await fetch(`/api/item/${id}`);
        const json = await response.json();

        if (response.ok) {
          setItem(json);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    getItem();
  }, []);

  const handleBid = async () => {
    const data = {
      item_id: id,
      email: user.email,
      amount: newBid,
    };

    try {
      const response = await fetch("/api/bid/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();

      // Reset form
      setNewBid("");
    } catch (error) {
      console.error("API Error:", error);
    } finally {
    }
  };

  return (
    <div>
      {item && (
        <div className="card mb-3">
          <img
            src="https://picsum.photos/200"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">List price : {item.amount}</p>
            <p className="card-text">Item user id: {item.user_id}</p>
            <small className="text-body-secondary">
              Last updated 3 mins ago
            </small>

            <div style={{ marginTop: "1rem" }}>
              <TextField
                label="Bid here"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => setNewBid(e.target.value)}
                value={newBid}
              />

              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  mt: 2,
                  backgroundColor: "#005248",
                  "&:hover": {
                    backgroundColor: "#bec81f",
                  },
                }}
                onClick={handleBid}
              >
                Bid
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BidForm;*/

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";

const BidForm = () => {
  const [item, setItem] = useState(null);
  const [newBid, setNewBid] = useState("");
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const { id } = useParams();
  const { user } = useAuthContext();

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await fetch(`/api/item/${id}`);
        const json = await response.json();
        if (response.ok) {
          setItem(json);
        }
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    getItem();
  }, [id]);

  const handleBid = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      item_id: id,
      email: user.email,
      amount: Number(newBid),
    };

    try {
      const response = await fetch("/api/bid/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();
      if (!response.ok) {
        setSnack({
          open: true,
          message: json.error || "Failed to place bid.",
          severity: "error",
        });
      } else {
        setSnack({
          open: true,
          message: "Bid placed successfully!",
          severity: "success",
        });
        setNewBid("");
      }
    } catch (error) {
      console.error("API Error:", error);
      setSnack({
        open: true,
        message: "An unexpected error occurred.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnack({ ...snack, open: false });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f0efe0"
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          width: 400,
          borderRadius: 3,
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        }}
      >
        <Typography variant="h5" textAlign="center" mb={2}>
          Place Your Bid
        </Typography>

        {item ? (
          <>
            <Typography variant="body1" gutterBottom>
              <strong>Item:</strong> {item.name}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Description:</strong> {item.description}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Minimum Amount:</strong> ${item.amount}
            </Typography>

            <form onSubmit={handleBid}>
              <TextField
                label="Your Bid Amount"
                type="number"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => setNewBid(e.target.value)}
                value={newBid}
                required
              />

              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  mt: 2,
                  backgroundColor: "#005248",
                  "&:hover": {
                    backgroundColor: "#bec81f",
                  },
                }}
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Place Bid"
                )}
              </Button>
            </form>
          </>
        ) : (
          <Typography textAlign="center" mt={3}>
            Loading item details...
          </Typography>
        )}
      </Paper>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snack.severity}
          sx={{ width: "100%" }}
        >
          {snack.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BidForm;
