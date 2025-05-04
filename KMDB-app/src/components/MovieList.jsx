import { Box, Typography, Card, CardMedia, CardContent, CircularProgress, Chip } from "@mui/material";

const MovieList = ({ items }) => {
  if (!items || items.length === 0) return <Typography>No data</Typography>;

  return (
    <Box sx={{ overflowX: "auto", display: "flex", gap: 2, py: 2 }}>
      {items.map((item) => {
        const title = item.title || item.name;
        const date = item.release_date || item.first_air_date;
        const score = item.vote_average ? Math.round(item.vote_average * 10) : null;
        const posterUrl = item.poster_path ? `https://image.tmdb.org/t/p/w300${item.poster_path}` : "https://via.placeholder.com/300x450?text=No+Image";

        return (
          <Card
            key={item.id}
            sx={{
              minWidth: 150,
              maxWidth: 180,
              flexShrink: 0,
              borderRadius: 2,
              boxShadow: 3,
              position: "relative",
            }}>
            <CardMedia component="img" height="270" image={posterUrl} alt={title} sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
            {score !== null && (
              <Chip
                label={`${score}%`}
                color="primary"
                size="small"
                sx={{
                  position: "absolute",
                  top: 8,
                  left: 8,
                  backgroundColor: "#0f0f0f",
                  color: "lime",
                  fontWeight: "bold",
                }}
              />
            )}
            <CardContent sx={{ p: 1.5 }}>
              <Typography variant="subtitle2" noWrap>
                {title}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {date}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default MovieList;
