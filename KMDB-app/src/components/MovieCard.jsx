import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { Link } from "react-router";
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
          {score !== null && (
            <Box
              sx={{
                position: "absolute",
                bottom: -18,
                left: 12,
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: `conic-gradient(${score >= 70 ? "#21d07a" : "#d2d531"} ${score}%, ${score >= 70 ? "#204529" : "#423d0f"} ${score}% 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 4px rgba(0,0,0,0.5)",
                zIndex: 2,
              }}>
              <Box
                sx={{
                  width: 33,
                  height: 33,
                  borderRadius: "50%",
                  backgroundColor: "#081c22",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start", //
                    lineHeight: 1,
                  }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "0.85rem",
                      lineHeight: 1,
                    }}>
                    {score}
                  </Typography>
                  <Typography component="span" sx={{ color: "white", fontSize: "0.4rem", ml: "1px" }}>
                    %
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
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
