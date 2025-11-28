import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { keyframes } from "@mui/system";

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export default function TitleWithHighlight({ first, last }) {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          mt: 16,
          mb: 4,
          animation: `${slideIn} 0.8s ease forwards`,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 800,
            letterSpacing: "2px",
            mb: 2,
          }}
        >
          {first}{" "}
          <Box component="span" sx={{ color: "#FF007F" }}>
            {last}
          </Box>
        </Typography>
      </Box>
      <Divider sx={{ mb: 3 }} />
    </>
  );
}
