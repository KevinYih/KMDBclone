import React from "react";
import { Box, Typography } from "@mui/material";
import MovieCardShow from "./MovieCardShow";

const MovieShowList = ({ items, setBackgroundImage, mediaType }) => {
  if (!items || items.length === 0) return <Typography>No data</Typography>;

  return (
    <Box sx={{ overflowX: "auto", display: "flex", gap: 2, pt: 2 }}>
      {items.map((item) => {
        const id = item.id;
        const title = item.title || item.name;
        const overview = item.overview;
        const posterUrl = item.backdrop_path ? `https://image.tmdb.org/t/p/w1280${item.backdrop_path}` : "https://via.placeholder.com/300x450?text=No+Image";

        return <MovieCardShow key={id} id={id} title={title} overview={overview} posterUrl={posterUrl} setBackgroundImage={setBackgroundImage} mediaType={mediaType} />;
      })}
    </Box>
  );
};

export default MovieShowList;
