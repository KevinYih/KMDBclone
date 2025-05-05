import { Box, Container, Typography, Chip, Button, Stack, IconButton, Avatar } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ScoreCircle from "../ScoreCircle";

const HeroDetail = ({ data, loading }) => {
  console.log("first data:", data);

  const backgroundHero = `https://image.tmdb.org/t/p/w1280${data?.backdrop_path}`;
  const poster = `https://image.tmdb.org/t/p/w300${data?.poster_path}`;
  const genres = data?.genres;

  // const score = data.vote_average ? Math.round(data.vote_average * 10) : null;
  const score = data?.vote_average ? Math.round(data?.vote_average * 10) : null;
  //if (heroPoster) setBackgroundHero(`https://image.tmdb.org/t/p/w1280${heroPoster}`);
  // item.poster_path ? `https://image.tmdb.org/t/p/w300${item.poster_path}`

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
            height: 520,
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
              backgroundColor: "rgba(0, 30, 54, 0.8)", // 0.5 #0d253f
              zIndex: 0,
            }}
          />

          {/*  Container center/limit width */}
          <Container maxWidth="lg" sx={{ py: 4, position: "relative", zIndex: 1 }}>
            <Box display="flex" gap={4}>
              {/* Movie Poster */}
              <Box
                component="img"
                src={poster} // 使用你自己的图片链接
                alt="Movie Poster"
                sx={{ width: 300, height: 450, borderRadius: 2 }}
              />

              {/* Right Content */}
              <Box flex={1} sx={{ color: "white" }}>
                {/* Title */}
                <Typography variant="h4" fontWeight="bold">
                  Star Wars: Tales of the Underworld
                  <Typography component="span" variant="h4" color="text.secondary">
                    {" "}
                    (2025)
                  </Typography>
                </Typography>

                {/* Genre Chip */}
                <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                  <Chip label="PG" size="small" sx={{ color: "white" }} />
                  <Typography variant="body2"> {Array.isArray(genres) ? genres.map((genre) => genre.name).join(", ") : "No genres available"}</Typography>
                </Stack>

                {/* Score and Buttons */}
                <Stack direction="row" alignItems="center" spacing={2} mt={3}>
                  {/* Score Circle */}
                  <Box sx={{ flexShrink: 0 }}>
                    <ScoreCircle score={score} />
                  </Box>
                  <Typography variant="body2">User Score</Typography>

                  <Button variant="contained" startIcon={<InfoOutlinedIcon sx={{ color: "white" }} />} sx={{ textTransform: "none" }}>
                    What's your Vibe?
                  </Button>
                </Stack>

                {/* Action Buttons */}
                <Stack direction="row" spacing={2} mt={2}>
                  <IconButton>
                    <PlaylistAddIcon sx={{ color: "white" }} />
                  </IconButton>
                  <IconButton>
                    <FavoriteBorderIcon sx={{ color: "white" }} />
                  </IconButton>
                  <IconButton>
                    <PlayArrowIcon sx={{ color: "white" }} />
                  </IconButton>
                  <Button variant="text" startIcon={<PlayArrowIcon />} sx={{ textTransform: "none" }}>
                    Play Trailer
                  </Button>
                </Stack>

                {/* Tagline */}
                <Typography variant="subtitle1" fontStyle="italic" mt={3}>
                  {data?.tagline}
                </Typography>

                {/* Overview */}
                <Box mt={2}>
                  <Typography variant="h6" fontWeight="bold">
                    Overview
                  </Typography>
                  <Typography variant="body1" mt={1}>
                    {data?.overview}
                  </Typography>
                </Box>

                {/* Creator */}
                <Box mt={2}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Dave Filoni
                  </Typography>
                  <Typography variant="body2">Creator</Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
};

export default HeroDetail;
