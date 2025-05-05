import { Box, Container, Typography } from "@mui/material";
import SearchBox from "../SearchBox";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

const Hero = () => {
  const endpoint = "/movie/now_playing";

  const { responseData, loading } = useFetch(endpoint);
  const [backgroundHero, setBackgroundHero] = useState("");

  useEffect(() => {
    if (responseData && responseData.length > 0) {
      const randomIndex = Math.floor(Math.random() * responseData.length);
      const randomItem = responseData[randomIndex];
      const heroPoster = randomItem.backdrop_path;
      if (heroPoster) setBackgroundHero(`https://image.tmdb.org/t/p/w1280${heroPoster}`);

      // item.poster_path ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
    }
  }, [responseData]);

  return (
    <>
      <Box sx={{ height: "110px", backgroundColor: "#032541" }} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: 360,
            backgroundImage: `url(${backgroundHero})`,
            backgroundSize: "cover", // fill cover
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            marginBottom: 5,
            overflow: "hidden",
          }}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              // inset: 0,
              backgroundColor: "rgba(0, 30, 54, 0.6)", // 0.5 #0d253f
              zIndex: 0,
            }}
          />

          {/*  Container center/limit width */}
          <Container maxWidth="lg" disableGutters sx={{ px: 6, position: "relative", zIndex: 1 }}>
            <Typography variant="h2" color="white" sx={{ fontSize: 48, fontWeight: 700 }}>
              Welcome.
            </Typography>
            <Typography variant="h3" color="white" sx={{ fontSize: 32, fontWeight: 600 }}>
              Millions of movies, TV shows and people to discover. Explore now.
            </Typography>
            <SearchBox />
          </Container>
        </Box>
      )}
    </>
  );
};

export default Hero;
