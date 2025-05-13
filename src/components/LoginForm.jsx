import React, { useState } from "react";
import { Container, Box, Typography, TextField, Button, Paper, Divider } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("/login", formData);
      const { token } = response.data;

      dispatch(login({ token, user: formData.email }));

      setMessage("Login successful!");
      navigate("/home");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || "Login failed.");
      } else {
        setMessage(`An error occurred: ${error}`);
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 8 }}>
        <Box display="flex" flexDirection="column" alignItems="center" sx={{ my: 15 }}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
            <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required margin="normal" />
            <TextField fullWidth label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required margin="normal" />
            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3 }}>
              Login
            </Button>
          </Box>

          {message && (
            <Typography variant="body1" color="success.main" sx={{ mt: 2 }}>
              {message}
            </Typography>
          )}
        </Box>
        <Box display="flex" justifyContent="center" textAlign="center">
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "red", marginLeft: "4px" }}>
            Signup
          </Link>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginForm;
