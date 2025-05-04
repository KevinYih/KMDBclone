import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

// import { Link } from "react-router-dom";

const MovieCardShow = ({ id, posterUrl, title, date, setBackgroundImage }) => {
  return (
    <Card
      onMouseEnter={() => setBackgroundImage(posterUrl)}
      key={id}
      sx={{
        minWidth: 0,
        maxWidth: 360,
        flexShrink: 0,
        borderRadius: 3,
        position: "relative",
        backgroundColor: "#efefef",
        boxShadow: "none",
        border: "none",
      }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={posterUrl}
          alt={title}
          sx={{
            width: "100%",
            height: 160,
            borderRadius: 3,
            objectFit: "cover",
          }}
        />
      </Box>
      <CardContent sx={{ pt: 3 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCardShow;
