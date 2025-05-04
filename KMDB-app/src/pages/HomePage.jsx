import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Hero from "../components/Hero";
import useFetch from "../hooks/useFetch";

const HomePage = () => {
  ////////  2    //////// Trending Bar ////////////////
  const [timeWindow, setTimeWindow] = useState("day"); // 'day' or 'week'
  const endpointAll = `/trending/all/${timeWindow}`;
  console.log(endpointAll);
  const { responseData: nowPlayData, loading: nowPlaying } = useFetch(endpointAll);

  /////////  5   /////// Latest Trailers ////////////////

  //popular:    /person/popular

  ////////  4  //////// What's Popular ////////////////
  //                   /trending/all/{time_window}
  //                   /trending/movie/{time_window}
  //                   /trending/person/{time_window}
  //                   /trending/tv/{time_window}

  //                   /movie/now_playing
  //                   /movie/popular
  //                   /movie/now_playing
  //                  /movie/top_rated
  //                   /movie/upcoming

  //                   /tv/airing_today
  //                   /tv/on_the_air
  //                   /tv/popular
  //                   /tv/top_rated

  ///////  2   ///////// Free To Watch ////////////////

  ///movie:   /movie/top_rated
  ///Tv:      /tv/top_rated

  const { responseData: topRatedData, loading: topRating } = useFetch("/movie/top_rated");
  const { responseData: tvOnAir, loading: tvOning } = useFetch("/tv/on_the_air");
  const { responseData: topRatedTv, loading: topTvRating } = useFetch("/tv/top_rated");

  return (
    <>
      <Hero />
      <div>
        <h4>Trending Today This Week</h4>
        <div className="h-30 w-full bg-green-300"></div>
      </div>
      <div>
        <h4>Latest Trailers Popular Streaming On TV For Rent In Theatres</h4>
        <div className="h-30 w-full bg-green-700"></div>
      </div>
      <div>
        <h4> What's Popular Streaming On TV For Rent In Theatres</h4>
        <div className="h-30 w-full bg-green-100"></div>
      </div>
      <div>
        <h4>Free To Watch Movies TV</h4>
        <div className="h-30 w-full bg-green-100"></div>
      </div>
      <div>
        <h4>Leaderboard All Time Edits</h4>
        <div className="h-60 w-full bg-orange-300"></div>
      </div>
    </>
  );
};

export default HomePage;
