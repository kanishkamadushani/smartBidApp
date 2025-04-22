import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
const LoginForm = () => {
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const { login, error, loading } = useLogin();

  // handle submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    //call the login function
    await login(email, password);
    setLoader(false);
    setEmail("");
    setPassword("");
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
          width: 350,
          borderRadius: 3,
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        }}
      >
        <Typography variant="h5" textAlign="center" mb={3}>
          Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
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
          Sign In
        </Button>
        <Typography variant="body2" textAlign="right" mt={1}>
          <MuiLink
            component={Link}
            to="/forgot-password"
            underline="hover"
            color="primary"
          >
            Forgot password?
          </MuiLink>
        </Typography>
      </Paper>
    </Box>
  );
};

export default LoginForm;
