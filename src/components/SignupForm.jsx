import React, { useState } from "react";
import axios from "axios";
import { Container, Box, Typography, TextField, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router";

const SignupForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    age: "",
    name: "",
  });

  const [message, setMessage] = useState("");

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
      const response = await axios.post("/signup", formData);
      setMessage(response.data.message || "Signup successful!");
      navigate("/"); // registered and jump to login page.
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || "Signup failed.");
      } else {
        setMessage("An error occurred.");
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 8 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h4" gutterBottom>
            Signup
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
            <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required margin="normal" />
            <TextField fullWidth label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required margin="normal" />
            <TextField fullWidth label="Age" name="age" type="number" value={formData.age} onChange={handleChange} required margin="normal" />
            <TextField fullWidth label="Name" name="name" type="text" value={formData.name} onChange={handleChange} required margin="normal" />
            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3 }}>
              SignUp
            </Button>
          </Box>
          {message && (
            <Typography variant="body1" color="success.main" sx={{ mt: 2 }}>
              {message}
            </Typography>
          )}
        </Box>
        <Box>
          Already have an account? <Link to="/login">Login</Link>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignupForm;
