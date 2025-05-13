import React from "react";
import { Container, Grid, Typography, Link, Box, Button } from "@mui/material";
import tmdbP from "../assets/tmdbPrimary.svg";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
//import { login, logout } from "../features/auth/authSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  console.log(user);

  const handleLogin = () => {
    dispatch(
      login({
        user: {
          id: 1,
          name: "KevinY",
          email: "kevin@kmdb.com",
        },
        token: null,
      })
    );
  };

  // const handleLogout = () => {
  //   dispatch(logout());
  //   setOpen(false); //logout then close dropdown
  // };

  return (
    <Box sx={{ bgcolor: "#032541", color: "#fff", py: 4 }}>
      <Container maxWidth="lg" sx={{ overflowX: "auto" }}>
        <Box sx={{ display: "flex", flexWrap: "nowrap" }} justifyContent="center">
          {/* Logo + Button */}
          <Box sx={{ minWidth: 220, pr: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box>
              <img src={tmdbP} alt="DBLogo" style={{ height: 94, width: "auto" }} />
            </Box>
            <Box mt={2}>
              {isAuthenticated ? (
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#fff",
                    color: "#01b4e4",
                    fontWeight: "bold",
                    textTransform: "none",
                    cursor: "default",
                    pointerEvents: "none",
                  }}>
                  Hi Kuser!
                </Button>
              ) : (
                <Button onClick={handleLogin} sx={{ fontWeight: "bold", color: "white" }}>
                  Login
                </Button>
              )}
            </Box>
          </Box>

          {/* Column: THE BASICS */}
          <Box sx={{ minWidth: 180, pr: 4 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              THE BASICS
            </Typography>
            <Link href="#" display="block" color="inherit" underline="none">
              About TMDB
            </Link>
            <Link href="#" display="block" color="inherit" underline="none">
              Contact Us
            </Link>
            <Link href="#" display="block" color="inherit" underline="none">
              Support Forums
            </Link>
            <Link href="#" display="block" color="inherit" underline="none">
              API Documentation
            </Link>
            <Link href="#" display="block" color="inherit" underline="none">
              System Status
            </Link>
          </Box>

          {/* Column: GET INVOLVED */}
          <Box sx={{ minWidth: 180, pr: 4 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              GET INVOLVED
            </Typography>
            <Link href="#" display="block" color="inherit" underline="none">
              Contribution Bible
            </Link>
            <Link href="#" display="block" color="inherit" underline="none">
              Add New Movie
            </Link>
            <Link href="#" display="block" color="inherit" underline="none">
              Add New TV Show
            </Link>
          </Box>

          {/* Column: COMMUNITY */}
          <Box sx={{ minWidth: 180, pr: 4 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              COMMUNITY
            </Typography>
            <Link href="#" display="block" color="inherit" underline="none">
              Guidelines
            </Link>
            <Link href="#" display="block" color="inherit" underline="none">
              Discussions
            </Link>
            <Link href="#" display="block" color="inherit" underline="none">
              Leaderboard
            </Link>
          </Box>

          {/* Column: LEGAL */}
          <Box sx={{ minWidth: 180, pr: 4 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              LEGAL
            </Typography>
            <Link href="#" display="block" color="inherit" underline="none">
              Terms of Use
            </Link>
            <Link href="#" display="block" color="inherit" underline="none">
              API Terms of Use
            </Link>
            <Link href="#" display="block" color="inherit" underline="none">
              Privacy Policy
            </Link>
            <Link href="#" display="block" color="inherit" underline="none">
              DMCA Policy
            </Link>
          </Box>
        </Box>

        {/* Footer Build Info */}
        <Box mt={4} textAlign="center">
          <Typography variant="caption" color="gray">
            Build f94fc73 (8731)
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
