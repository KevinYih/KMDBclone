import { Typography, Box } from "@mui/material";

const ScoreCircle = ({ score }) => {  
  return (
    <>
      {score !== null && (
        <Box
          sx={{                        
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
    </>
  );
};

export default ScoreCircle;
