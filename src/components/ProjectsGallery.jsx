import React from "react";
import { Box, Typography } from "@mui/material";

export default function ProjectsGallery({ items, onImageClick }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gridAutoRows: "160px",
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
            gridColumn: `span ${img.col}`,
            gridRow: `span ${img.row}`,
            boxShadow: 3,

            "&:hover img": {
              transform: "scale(1.05)",
              filter: "brightness(1.15)",
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
            }}
          >
            <Typography
              sx={{
                fontSize: "1.4rem",
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
