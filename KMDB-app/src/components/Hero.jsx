import { Box, Container, Typography } from "@mui/material";
import SearchBox from "./SearchBox";

const Hero = () => {
  return (
    <>
      <Box sx={{ height: "110px", backgroundColor: "#032541"}} />

      <Box
        sx={{
          width: "100%",
          height: 360,
          backgroundImage: "url(https://picsum.photos/1600/900)",
          backgroundSize: "cover", // fill cover
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
        }}>
        {/*  Container center/limit width */}
        <Container maxWidth="lg" disableGutters sx={{ px: 6 }}>
          <Typography variant="h2" color="white" sx={{ fontSize: 48, fontWeight: 700 }}>
            Welcome.
          </Typography>
          <Typography variant="h3" color="white" sx={{ fontSize: 32, fontWeight: 600 }}>
            Millions of movies, TV shows and people to discover. Explore now.
          </Typography>
          <SearchBox />
        </Container>
      </Box>
    </>
  );
};

export default Hero;
