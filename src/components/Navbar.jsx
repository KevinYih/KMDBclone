import React, { useEffect, useState, useRef } from "react";
import { AppBar, Box, Toolbar, Typography, IconButton, Popper, Button, InputBase, Avatar, Container, List, ListItem, ListItemText, Divider, Paper } from "@mui/material";
import { Add, NotificationsNone, Search, Language } from "@mui/icons-material";
import tmdbS from "../assets/tmdbShort.svg";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/auth/authSlice";

// const menuItems = {
//   Movies: ["Popular", "Now Playing", "Upcoming", "Top Rated"],
//   "TV Shows": ["Popular", "Airing Today", "On TV", "Top Rated"],
//   People: ["Popular People"],
//   More: ["Discussions", "Leaderboard", "Support", "API Documentation", "API for Business"],
// };

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const [showAppBar, setShowAppBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false); //control dropdown Profile

  const anchorRef = useRef(null);

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

  const handleLogout = () => {
    dispatch(logout());
    setOpen(false); //logout then close dropdown
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scroll down
        setShowAppBar(false);
      } else {
        // scroll up
        setShowAppBar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1100 }}>
      {/* top AppBar */}

      <Box
        sx={{
          transform: showAppBar ? "translateY(0)" : "translateY(-58%)",
          transition: "transform 0.2s ease-in-out",
        }}>
        <AppBar position="static" sx={{ backgroundColor: "#032541", boxShadow: "none" }}>
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: "space-between", flexWrap: "nowrap", overflow: "hidden", minWidth: 0 }}>
              {/* left Logo + menu */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexShrink: 0 }}>
                <Link to="/">
                  <Box
                    component="img"
                    src={tmdbS}
                    alt="Logo"
                    sx={{
                      width: 160,
                      height: "auto",
                      borderRadius: 0,
                    }}
                  />
                </Link>
                {["Movies", "TV Shows", "People", "More"].map((item) => (
                  <Button key={item} sx={{ color: "white", fontWeight: "bold", textTransform: "none" }}>
                    {item}
                  </Button>
                ))}
              </Box>

              {/* right button */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButton sx={{ color: "white" }}>
                  <Add />
                </IconButton>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    width: 28,
                    height: 28,
                    minWidth: 0,
                    textTransform: "none",
                    fontSize: "0.75rem",
                    px: 1,
                    transition: "all 0.2s ease",
                    ":hover": {
                      backgroundColor: "white",
                      color: "#032541",
                      borderColor: "white",
                    },
                  }}>
                  EN
                </Button>
                <IconButton sx={{ color: "white" }}>
                  <NotificationsNone />
                </IconButton>

                {isAuthenticated ? (
                  <Box>
                    <Box>
                      <Avatar ref={anchorRef} onClick={() => setOpen((prev) => !prev)} sx={{ width: 32, height: 32, bgcolor: "#01b4e4", fontSize: "0.875rem" }}>
                        {user.name.slice(0, 1)}
                      </Avatar>
                    </Box>

                    <Popper open={open} anchorEl={anchorRef.current} placement="bottom" sx={{ zIndex: 1300 }}>
                      <Paper
                        sx={{
                          mt: 1,
                          minWidth: 200,
                          borderRadius: 2,
                          overflow: "hidden",
                          boxShadow: 3,
                        }}>
                        <div style={{ padding: "12px 16px" }}>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {user.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            View profile
                          </Typography>
                        </div>
                        <Divider />
                        <List dense disablePadding>
                          {["Discussions", "Lists", "Ratings", "Watchlist"].map((text) => (
                            <ListItem
                              button
                              key={text}
                              sx={{
                                cursor: "pointer",
                                ":hover": {
                                  backgroundColor: "#0d253f",
                                  color: "white",
                                },
                              }}>
                              <ListItemText primary={text} />
                            </ListItem>
                          ))}
                        </List>
                        <Divider />
                        <List dense disablePadding>
                          {["API Subscription", "Edit Profile", "Settings"].map((text) => (
                            <ListItem
                              button
                              key={text}
                              sx={{
                                cursor: "pointer",
                                ":hover": {
                                  backgroundColor: "#0d253f",
                                  color: "white",
                                },
                              }}>
                              <ListItemText primary={text} />
                            </ListItem>
                          ))}
                        </List>
                        <Divider />
                        <List dense disablePadding>
                          <ListItem
                            button
                            sx={{
                              cursor: "pointer",
                              ":hover": {
                                backgroundColor: "#0d253f",
                                color: "white",
                              },
                            }}>
                            <ListItemText onClick={handleLogout} primary="Logout" />
                          </ListItem>
                        </List>
                      </Paper>
                    </Popper>
                  </Box>
                ) : (
                  <Box>
                    <Button onClick={handleLogin} sx={{ color: "white", textTransform: "none" }}>
                      Login
                    </Button>
                  </Box>
                )}

                <IconButton sx={{ color: "#01b4e4" }}>
                  <Search />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Search bar */}
        <Box
          sx={{
            backgroundColor: "white",
            px: 2,
            py: 1,
            display: "flex",
            alignItems: "center",
            boxShadow: 1,
          }}>
          <Search sx={{ color: "gray", mr: 1 }} />
          <InputBase placeholder="Search for a movie, tv show, person" fullWidth sx={{ fontSize: "0.95rem", color: "gray" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
