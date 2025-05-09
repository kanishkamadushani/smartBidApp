/*import React, { useState } from "react";
//import axios from "axios"; // Import axios for API calls
import { useAuthContext } from "../hooks/useAuthContext";

const CreateItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("electronics");
  const [amount, setAmount] = useState("");
  const [img, setImg] = useState(""); // State for img file

  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loader, setLoader] = useState(false);
  const { user } = useAuthContext();

  const categories = ["electronics", "vehicles", "furniture"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    //Making the object
    const item = {
      name,
      description,
      category,
      amount,
      img,
      email: user.email,
    };

    setErrorMsg("");
    setMessage("");

    try {
      // Make a POST request to the API endpoint (change the URL if needed)

      const response = await fetch("/api/item/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      const json = await response.json();

      // Handle the API response
      if (!response.ok) {
        setMessage("Item created successfully!");
        console.log("no");
      }

      if (response.ok) {
        console.log("ok");
      }
    } catch (error) {
      setErrorMsg("Error connecting to the server.");
      console.error("API Error:", error);
    }

    // Reset loader and form
    setLoader(false);
    setName("");
    setDescription("");
    setCategory("electronics");
    setAmount("");
    setImg(null);
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="border p-4 rounded">
          <h2>Create Item</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Item Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <select
                className="form-control"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                required
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Starting Amount</label>
              <input
                type="number"
                className="form-control"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Upload Image</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setImg(e.target.value)} // Handle img file
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={loader}>
              {loader ? "Saving..." : "Create Item"}
            </button>
            {errorMsg && <p className="text-danger">{errorMsg}</p>}
            {message && <p className="text-success">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateItem;*/

/*import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
} from "@mui/material";

const CreateItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("electronics");
  const [amount, setAmount] = useState("");
  const [img, setImg] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loader, setLoader] = useState(false);
  const { user } = useAuthContext();

  const categories = ["electronics", "vehicles", "furniture"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    const item = {
      name,
      description,
      category,
      amount,
      img,
      email: user.email,
    };

    setErrorMsg("");
    setMessage("");

    try {
      const response = await fetch("/api/item/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
      const json = await response.json();

      if (!response.ok) {
        setErrorMsg(json.error || "Failed to create item.");
      } else {
        setMessage("Item created successfully!");
      }
    } catch (error) {
      setErrorMsg("Error connecting to the server.");
      console.error("API Error:", error);
    }

    setLoader(false);
    setName("");
    setDescription("");
    setCategory("electronics");
    setAmount("");
    setImg("");
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
        <Typography variant="h5" textAlign="center" mb={3}>
          Create Item
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Item Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Description"
            fullWidth
            multiline
            rows={3}
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <TextField
            select
            label="Category"
            fullWidth
            margin="normal"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Starting Amount"
            type="number"
            fullWidth
            margin="normal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <TextField
            label="Image URL"
            fullWidth
            margin="normal"
            value={img}
            onChange={(e) => setImg(e.target.value)}
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
            disabled={loader}
          >
            {loader ? "Saving..." : "Create Item"}
          </Button>
          {errorMsg && (
            <Typography color="error" mt={2} textAlign="center">
              {errorMsg}
            </Typography>
          )}
          {message && (
            <Typography color="success.main" mt={2} textAlign="center">
              {message}
            </Typography>
          )}
        </form>
      </Paper>
    </Box>
  );
};

export default CreateItem;*/

/*import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
//import { useNotification } from "../hooks/useNotifications";
import { useNotification } from "../hooks/useNotifications";

import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
} from "@mui/material";

const CreateItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("electronics");
  const [amount, setAmount] = useState("");
  const [img, setImg] = useState("");
  const [loader, setLoader] = useState(false);

  const { user } = useAuthContext();
  const { addNotification } = useNotification(); // ✅

  const categories = ["electronics", "vehicles", "furniture"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    const item = {
      name,
      description,
      category,
      amount,
      img,
      email: user.email,
    };

    try {
      const response = await fetch("/api/item/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
      const json = await response.json();

      if (!response.ok) {
        addNotification(json.error || "Failed to create item.", "error"); // ✅
      } else {
        addNotification("Item created successfully!", "success"); // ✅
      }
    } catch (error) {
      addNotification("Error connecting to the server.", "error"); // ✅
      console.error("API Error:", error);
    }

    setLoader(false);
    setName("");
    setDescription("");
    setCategory("electronics");
    setAmount("");
    setImg("");
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
        <Typography variant="h5" textAlign="center" mb={3}>
          Create Item
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Item Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Description"
            fullWidth
            multiline
            rows={3}
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <TextField
            select
            label="Category"
            fullWidth
            margin="normal"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Starting Amount"
            type="number"
            fullWidth
            margin="normal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <TextField
            label="Image URL"
            fullWidth
            margin="normal"
            value={img}
            onChange={(e) => setImg(e.target.value)}
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
            disabled={loader}
          >
            {loader ? "Saving..." : "Create Item"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default CreateItem;*/
import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNotification } from "../hooks/useNotifications";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
  CircularProgress,
} from "@mui/material";

const CreateItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("electronics");
  const [amount, setAmount] = useState("");
  const [img, setImg] = useState("");
  const [loader, setLoader] = useState(false);

  const { user } = useAuthContext();
  const { addNotification } = useNotification();

  const categories = ["electronics", "vehicles", "furniture"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!name || !description || !amount) {
      addNotification("Please fill in all required fields", "info");
      return;
    }

    setLoader(true);

    const item = {
      name,
      description,
      category,
      amount: parseFloat(amount),
      img,
      email: user.email,
    };

    try {
      const response = await fetch("/api/item/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(item),
      });

      const json = await response.json();

      if (!response.ok) {
        addNotification(json.error || "Failed to create item", "error");
      } else {
        addNotification("Item created successfully!", "success");
        // Reset form
        setName("");
        setDescription("");
        setCategory("electronics");
        setAmount("");
        setImg("");
      }
    } catch (error) {
      addNotification("Error connecting to the server", "error");
      console.error("API Error:", error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        background: "linear-gradient(135deg, #bec81f 0%, #2E3A59 100%)",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          width: { xs: "90%", sm: 400 },
          borderRadius: 3,
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          background: "#f0efe0",
        }}
      >
        <Typography variant="h5" textAlign="center" mb={3}>
          Create Item
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Item Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            InputLabelProps={{
              sx: {
                "& .MuiInputLabel-asterisk": { display: "none" },
              },
            }}
          />
          <TextField
            label="Description"
            fullWidth
            multiline
            rows={3}
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            InputLabelProps={{
              sx: {
                "& .MuiInputLabel-asterisk": { display: "none" },
              },
            }}
          />
          <TextField
            select
            label="Category"
            fullWidth
            margin="normal"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            InputLabelProps={{
              sx: {
                "& .MuiInputLabel-asterisk": { display: "none" },
              },
            }}
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Starting Amount ($)"
            type="number"
            fullWidth
            margin="normal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            InputProps={{
              inputProps: {
                min: 0,
                step: "0.01",
              },
            }}
            InputLabelProps={{
              sx: {
                "& .MuiInputLabel-asterisk": { display: "none" },
              },
            }}
          />
          <TextField
            label="Image URL"
            fullWidth
            margin="normal"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder="https://example.com/image.jpg"
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
              height: 42,
            }}
            type="submit"
            disabled={loader}
          >
            {loader ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Create Item"
            )}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default CreateItem;
