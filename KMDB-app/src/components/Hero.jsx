import { Box, Container, Typography } from "@mui/material";
import SearchBox from "./SearchBox";

const Hero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 360,
        backgroundImage: "url(https://picsum.photos/1600/900)",
        backgroundSize: "cover", // 图片填满
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
      }}>
      {/* 内容可以用 Container 居中/限制宽度 */}
      <Container
        maxWidth="lg"
        sx={{
          px: "35px", // x padding
        }}>
        <Typography variant="h2" color="white" sx={{ fontSize: 48, fontWeight: 700 }}>
          Welcome.
        </Typography>
        <Typography variant="h3" color="white" sx={{ fontSize: 32, fontWeight: 600 }}>
          Millions of movies, TV shows and people to discover. Explore now.
        </Typography>
        <SearchBox />
      </Container>
    </Box>
  );
};

export default Hero;
