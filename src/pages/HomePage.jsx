import { Box, Container, Typography } from "@mui/material";

import TrendingSection from "../components/sections/TrendingSection";
import LatestTrailersSection from "../components/sections/LatestTrailersSection";
import WhatsPopularSection from "../components/sections/WhatsPopularSection";
import FreeToWatchSection from "../components/sections/FreeToWatchSection";
import Hero from "../components/sections/Hero";

const HomePage = () => {
  ////////  2    //////// Trending Bar ////////////////
  // const [timeWindow, setTimeWindow] = useState("day"); // 'day' or 'week'
  // const endpointAll = `/trending/all/${timeWindow}`;
  // console.log(endpointAll);
  // const { responseData: nowPlayData, loading: nowPlaying } = useFetch(endpointAll);

  /////////  5   /////// Latest Trailers ////////////////

  //popular:    /person/popular  Lastest

  ////////  4  //////// What's Popular ////////////////
  //                   /trending/all/{time_window}
  //                   /trending/movie/{time_window}
  //                   /trending/person/{time_window}
  //                   /trending/tv/{time_window}

  //                   /movie/now_playing   Lastest
  //                   /movie/popular      Lastest
  //                   /movie/now_playing
  //                  /movie/top_rated     Free
  //                   /movie/upcoming

  //                   /tv/airing_today     Lastest
  //                   /tv/on_the_air        Lastest
  //                   /tv/popular
  //                   /tv/top_rated        Free

  ///////  2   ///////// Free To Watch ////////////////

  ///movie:   /movie/top_rated
  ///Tv:      /tv/top_rated

  // "/discover/movie?watch_region=US&with_watch_monetization_types=free",

  // const { responseData: topRatedData, loading: topRating } = useFetch("/movie/top_rated");
  // const { responseData: tvOnAir, loading: tvOning } = useFetch("/tv/on_the_air");
  // const { responseData: topRatedTv, loading: topTvRating } = useFetch("/tv/top_rated");

  return (
    <>
      <Hero />      
      <TrendingSection />
      <LatestTrailersSection />
      <WhatsPopularSection />
      <FreeToWatchSection />
      <div>Leaderboard</div>
    </>
  );
};

export default HomePage;
