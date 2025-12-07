import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { keyframes } from "@mui/system";

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-30px);
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

          // ✅ מרווחים רספונסיביים
          mt: { xs: 8, sm: 10, md: 16 },
          mb: { xs: 2.5, md: 4 },

          animation: `${slideIn} 0.8s ease forwards`,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 800,
            letterSpacing: { xs: "1px", md: "2px" },
            mb: 2,

            // ✅ גדלי טקסט רספונסיביים
            fontSize: {
              xs: "1.8rem", // מובייל
              sm: "2.3rem", // טאבלט
              md: "3rem", // דסקטופ
            },

            lineHeight: { xs: 1.2, md: 1.1 },
          }}
        >
          {first}{" "}
          <Box component="span" sx={{ color: "#FF007F" }}>
            {last}
          </Box>
        </Typography>
      </Box>

      <Divider sx={{ mb: { xs: 2, md: 3 } }} />
    </>
  );
}
