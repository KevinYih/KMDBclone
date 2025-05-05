import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { Link } from "react-router";

// import { Link } from "react-router-dom";

const MovieCardShow = ({ id, posterUrl, title, overview, mediaType, setBackgroundImage }) => {
  return (
    <Card
      onMouseEnter={() => setBackgroundImage(posterUrl)}
      key={id}
      sx={{
        minWidth: 0,
        maxWidth: 300,
        flexShrink: 0,
        borderRadius: 3,
        position: "relative",
        backgroundColor: "transparent",
        boxShadow: "none",
        border: "none",
      }}>
      <Link to={"/" + mediaType + "/" + id}>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            image={posterUrl}
            alt={title}
            sx={{
              width: "100%",
              height: 168,
              borderRadius: 3,
              objectFit: "cover",
            }}
          />
        </Box>
        <CardContent sx={{ pt: 2.6 }}>
          <Typography variant="subtitle1" fontWeight="bold" textAlign="center" sx={{ color: "#efefef" }}>
            {title.slice(0, 28)}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ color: "#efefef" }}>
            {overview.slice(0, 35)}...
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default MovieCardShow;
