import { Box, Button, TextField } from "@mui/material";
import React from "react";

const SearchBox = () => {
  return (
    <div className="mt-5">
      <Box
        sx={{
          height: 50,
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: "100%",
          backgroundColor: "white",
          borderRadius: "999px",
          overflow: "hidden",
          boxShadow: 2,
        }}>
        <TextField
          fullWidth
          placeholder="Search for a movie, tv show, person..."
          variant="standard"
          InputProps={{
            sx: {
              pl: 3,
            },
            disableUnderline: true,
          }}
          sx={{
            "& fieldset": { border: "none" },
            backgroundColor: "white",
          }}
        />
        <Button
          variant="contained"
          sx={{
            px: 4,
            height: "100%",
            bgcolor: "primary.main",
            color: "white",
            fontWeight: "bold",
            borderRadius: "999px",
            textTransform: "none",
            "&:hover": {
              bgcolor: "primary.dark",
            },
            background: "linear-gradient(90deg, #1bd2af 0%, #00c9ff 100%)",
          }}>
          Search
        </Button>
      </Box>
    </div>
  );
};

export default SearchBox;
