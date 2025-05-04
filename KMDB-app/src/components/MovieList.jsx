import React from "react";
import { Box, Typography } from "@mui/material";
import MovieCard from "./MovieCard";

const MovieList = ({ items, setBackgroundImage }) => {
  if (!items || items.length === 0) return <Typography>No data</Typography>;

  return (
    <Box sx={{ overflowX: "auto", display: "flex", gap: 2, pt: 2 }}>
      {items.map((item) => {
        const id = item.id;
        const title = item.title || item.name;
        const date = item.release_date || item.first_air_date;
        const score = item.vote_average ? Math.round(item.vote_average * 10) : null;
        const posterUrl = item.poster_path ? `https://image.tmdb.org/t/p/w300${item.poster_path}` : "https://via.placeholder.com/300x450?text=No+Image";

        return <MovieCard id={id} title={title} date={date} score={score} posterUrl={posterUrl} setBackgroundImage={setBackgroundImage} fullPosterUrl={item.poster_path ? `https://image.tmdb.org/t/p/w780${item.poster_path}` : null} />;
      })}
    </Box>
  );
};

export default MovieList;
