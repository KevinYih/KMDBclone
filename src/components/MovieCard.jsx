import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { Link } from "react-router";
import ScoreCircle from "./ScoreCircle";
// import { Link } from "react-router-dom";

const MovieCard = ({ id, posterUrl, title, score, date, mediaType }) => {
  return (
    <Card
      key={id}
      sx={{
        minWidth: 0,
        maxWidth: 150,
        flexShrink: 0,
        borderRadius: 3,
        position: "relative",
        backgroundColor: "#efefef",
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
              width: 150,
              height: "100%",
              borderRadius: 3,
              objectFit: "cover",
            }}
          />
          <Box sx={{ position: "absolute", top: "208px", left: "8px" }}>
            <ScoreCircle score={score} />
          </Box>
        </Box>
        <CardContent sx={{ pt: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {date}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default MovieCard;
