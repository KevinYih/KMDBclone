import { useEffect, useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import MovieShowList from "../MovieShowList";

const endpointMap = {
  Popular: "/movie/now_playing",
  Streaming: "/trending/movie/day",
  "On TV": "/tv/airing_today",
  "For Rent": "/movie/popular",
  "In Theatres": "/tv/airing_today",
};

const mediaTypeMap = {
  Popular: "movie",
  Streaming: "tv",
  "On TV": "tv",
  "For Rent": "movie",
  "In Theatres": "tv",
};

const LatestTrailersSection = () => {
  const [selected, setSelected] = useState("Popular");
  const endpoint = endpointMap[selected];
  const { responseData, loading } = useFetch(endpoint);
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    if (responseData && responseData.length > 0) {
      const firstPoster = responseData[0].backdrop_path;
      if (firstPoster) setBackgroundImage(`https://image.tmdb.org/t/p/w1280${firstPoster}`);

      // item.poster_path ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
    }
  }, [responseData]);

  const options = Object.keys(endpointMap);
  return (
    <Box sx={{ position: "relative", mb: 4, height: 360, paddingTop: 4, backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", transition: "background-image 0.3s ease-in-out", overflow: "hidden" }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          // inset: 0,
          backgroundColor: "rgba(13, 37, 63, 0.7)", // 0.5 #0d253f
          zIndex: 0,
        }}
      />
      <Container maxWidth="lg" disableGutters sx={{ px: 6, position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}>
          <Typography variant="h5" fontWeight="500" color="#efefef">
            Latest Trailers
          </Typography>

          <Stack direction="row" spacing={0} sx={{ border: "1px solid #00ffcc", borderRadius: "999px" }}>
            {options.map((opt) => (
              <Button
                key={opt}
                onClick={() => setSelected(opt)}
                disableRipple
                sx={{
                  textTransform: "none",
                  px: 2,
                  py: 0.5,
                  fontWeight: "bold",
                  borderRadius: "999px",
                  minWidth: 0,
                  color: selected === opt ? "#0d253f" : "#efefef",
                  backgroundColor: selected === opt ? "#00ffcc" : "transparent",
                }}>
                {opt}
              </Button>
            ))}
          </Stack>
        </Box>

        {loading ? <p>Loading...</p> : <MovieShowList items={responseData} setBackgroundImage={setBackgroundImage} mediaType={mediaTypeMap[selected]} />}
      </Container>
    </Box>
  );
};

export default LatestTrailersSection;
