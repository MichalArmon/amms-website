import React from "react";
import { Box, Typography } from "@mui/material";

export default function ProjectsGallery({ items, onImageClick }) {
  return (
    <Box
      sx={{
        display: "grid",

        // ✅ רספונסיביות אמיתית
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)", // ✅ מובייל – 2 בשורה
          sm: "repeat(3, 1fr)", // ✅ טאבלט – 3 בשורה
          md: "repeat(7, 1fr)", // ✅ דסקטופ – המקור שלך
        },

        gridAutoRows: {
          xs: "170px", // מובייל
          sm: "180px", // טאבלט
          md: "160px", // דסקטופ
        },

        gap: 2,
      }}
    >
      {items.map((img, i) => (
        <Box
          key={i}
          onClick={() => onImageClick && onImageClick(i)}
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 2,
            cursor: "pointer",
            boxShadow: 3,

            // ✅ ביטול span במובייל
            gridColumn: {
              xs: "span 1",
              sm: "span 1",
              md: `span ${img.col}`,
            },
            gridRow: {
              xs: "span 1",
              sm: "span 1",
              md: `span ${img.row}`,
            },

            "&:hover img": {
              transform: "scale(1.05)",
              filter: "brightness(1.15)",
            },

            "&:hover .overlay": {
              opacity: 1,
            },
          }}
        >
          <Box
            component="img"
            src={img.src}
            alt={img.alt}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.6s ease, filter 0.4s ease",
              display: "block",
            }}
          />

          <Box
            className="overlay"
            sx={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(255,255,255,0.6)",
              opacity: 0,
              transition: "0.4s",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.4rem" },
                fontWeight: 600,
                color: "#333",
              }}
            >
              {img.alt}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
