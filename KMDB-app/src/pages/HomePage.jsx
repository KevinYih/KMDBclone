import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div>
        <h4>Trending Today This Week</h4>
        <div class="h-30 w-full bg-green-300"></div>
      </div>
      <div>
        <h4>Latest Trailers Popular Streaming On TV For Rent In Theatres</h4>
        <div class="h-30 w-full bg-green-700"></div>
      </div>
      <div>
        <h4> What's Popular Streaming On TV For Rent In Theatres</h4>
        <div class="h-30 w-full bg-green-100"></div>
      </div>
      <div>
        <h4>Free To Watch Movies TV</h4>
        <div class="h-30 w-full bg-green-100"></div>
      </div>
      <div>
        <h4>Leaderboard All Time Edits</h4>
        <div class="h-60 w-full bg-orange-300"></div>
      </div>
    </>
  );
};

export default HomePage;
