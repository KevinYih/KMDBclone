import { useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import MovieList from "../MovieList";

const endpointMap = {
  Streaming: "/tv/airing_today",
  "On TV": "/movie/now_playing",
  "For Rent": "/tv/airing_today",
  "In Theatres": "/movie/now_playing",
};

const mediaTypeMap = {
  Streaming: "tv",
  "On TV": "movie",
  "For Rent": "tv",
  "In Theatres": "movie",
};

const WhatsPopularSection = () => {
  const [selected, setSelected] = useState("Streaming");
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
            What's Popular
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

        {loading ? <p>Loading...</p> : <MovieList items={responseData} mediaType={mediaTypeMap[selected]} />}
      </Container>
    </Box>
  );
};

export default WhatsPopularSection;
