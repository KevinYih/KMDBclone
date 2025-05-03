import React from "react";
import { AppBar, Box, Toolbar, Typography, IconButton, Button, InputBase, Avatar } from "@mui/material";
import { Add, NotificationsNone, Search, Language } from "@mui/icons-material";

// const menuItems = {
//   Movies: ["Popular", "Now Playing", "Upcoming", "Top Rated"],
//   "TV Shows": ["Popular", "Airing Today", "On TV", "Top Rated"],
//   People: ["Popular People"],
//   More: ["Discussions", "Leaderboard", "Support", "API Documentation", "API for Business"],
// };

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* top AppBar */}
      <AppBar position="static" sx={{ backgroundColor: "#032541", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* left Logo + menu */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: "bold", color: "#01b4e4", display: "flex", alignItems: "center" }}>
              TMDB
              <Box
                sx={{
                  width: 40,
                  height: 16,
                  background: "linear-gradient(to left, #01b4e4, #90cea1)",
                  borderRadius: "999px",
                  ml: 1,
                }}
              />
            </Typography>
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
                minWidth: "36px",
                textTransform: "none",
                fontSize: "0.75rem",
                px: 1,
              }}>
              EN
            </Button>
            <IconButton sx={{ color: "white" }}>
              <NotificationsNone />
            </IconButton>
            <Avatar sx={{ width: 32, height: 32, bgcolor: "#01b4e4", fontSize: "0.875rem" }}>K</Avatar>
            <IconButton sx={{ color: "#01b4e4" }}>
              <Search />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* 搜索栏 */}
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
  );
}

export default Navbar;
