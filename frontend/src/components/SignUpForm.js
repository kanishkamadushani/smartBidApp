import React, { useState, useRef, useEffect } from "react";
import { useSignup } from "../hooks/useSignUp";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
  CircularProgress,
} from "@mui/material";

const SignUpForm = () => {
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRe_password] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [contact_number, setContactNUmber] = useState("");
  const [address, setAddress] = useState("");

  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loader, setLoader] = useState(false);

  const { signup, loading, error } = useSignup();

  // handle submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    //call the sign up function
    await signup(
      email,
      password,
      re_password,
      first_name,
      last_name,
      contact_number,
      address
    );
    setLoader(false);
    setEmail("");
    setPassword("");
    setRe_password("");
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
          maxWidth: 600,
          borderRadius: 3,
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        }}
      >
        <Typography variant="h5" textAlign="center" mb={3}>
          SignUp
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box sx={{ flex: 1, minWidth: "45%" }}>
            {" "}
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Box>
          <Box sx={{ flex: 1, minWidth: "45%" }}>
            {" "}
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />{" "}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box sx={{ flex: 1, minWidth: "45%" }}>
            <TextField
              label="Re-Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => setRe_password(e.target.value)}
              value={re_password}
            />
          </Box>
          <Box sx={{ flex: 1, minWidth: "45%" }}>
            {" "}
            <TextField
              label="First Name"
              type="text"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => setFirstName(e.target.value)}
              value={first_name}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box sx={{ flex: 1, minWidth: "45%" }}>
            {" "}
            <TextField
              label="Last Name"
              type="text"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => setLastName(e.target.value)}
              value={last_name}
            />
          </Box>
          <Box sx={{ flex: 1, minWidth: "45%" }}>
            {" "}
            <TextField
              label="Contact Number"
              type="text"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => setContactNUmber(e.target.value)}
              value={contact_number}
            />
          </Box>
        </Box>

        <TextField
          label="Address"
          type="text"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
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
          onClick={handleSubmit}
        >
          Signup
        </Button>

        {error && <p> {error} </p>}
      </Paper>
    </Box>
  );
};

export default SignUpForm;
