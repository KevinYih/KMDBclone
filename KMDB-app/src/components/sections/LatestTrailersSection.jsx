import { useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import MovieList from "../MovieList";

const endpointMap = {
  Popular: "/movie/now_playing",
  Streaming: "/trending/movie/day",
  "On TV": "/tv/airing_today",
  "For Rent": "/movie/popular",
  "In Theatres": "/tv/airing_today",
};

const LatestTrailersSection = () => {
  const [selected, setSelected] = useState("Popular");
  const endpoint = endpointMap[selected];
  const { responseData, loading } = useFetch(endpoint);

  const options = Object.keys(endpointMap);
  return (
    <Box sx={{ mb: 4 }}>
      <Container maxWidth="lg" disableGutters sx={{ px: 6 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}>
          <Typography variant="h5" fontWeight="500">
            Latest Trailers
          </Typography>

          <Stack direction="row" spacing={0} sx={{ border: "1px solid #0d253f", borderRadius: "999px" }}>
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
                  color: selected === opt ? "#00ffcc" : "#000",
                  backgroundColor: selected === opt ? "#0d253f" : "#efefef",
                }}>
                {opt}
              </Button>
            ))}
          </Stack>
        </Box>

        {loading ? <p>Loading...</p> : <MovieList items={responseData} />}
      </Container>
    </Box>
  );
};

export default LatestTrailersSection;
