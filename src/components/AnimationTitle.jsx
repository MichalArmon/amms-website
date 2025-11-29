import React from "react";
import { Box, Typography, keyframes, Divider } from "@mui/material";

// אנימציה: הופעה משמאל + Fade in
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

export default function AnimationTitle({ text }) {
  // מפרידים את האות הראשונה
  const first = text.charAt(0);
  const rest = text.slice(1);

  return (
    <Box sx={{ textAlign: "center", mb: 4 }}>
      <Typography
        sx={{
          fontSize: "3rem",
          fontWeight: 800,
          letterSpacing: "2px",
          animation: `${slideIn} 0.7s ease forwards`,
          display: "inline-block",
        }}
      >
        {/* אות ראשונה ורודה וגדולה */}
        <Box
          component="span"
          sx={{
            color: "#FF007F",
            fontSize: "3.4rem",
            mr: 0.3,
          }}
        >
          {first}
        </Box>

        {/* שאר המילה */}
        <Box component="span" sx={{ color: "#333" }}>
          {rest}
        </Box>
      </Typography>

      <Divider sx={{ mb: 3 }} />
    </Box>
  );
}
