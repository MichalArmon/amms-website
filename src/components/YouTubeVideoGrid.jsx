import React from "react";
import { Box, Typography } from "@mui/material";

export default function YouTubeVideoGrid() {
  const videos = [
    {
      id: "PQlF_zLLeMw", // כאן תכניסי רק את ה-ID של יוטיוב
      title: "Virtual walkthrough | Penthouse | Hod Hasharon",
      text: "Interior Scandinavian design and Virtual walkthrough for Penthouse in Hod Hasharon, Israel. A work that combines a virtual 3D tour of the house and Adobe After-Effect editing.",
    },
    {
      id: "Py56VfClOqw",
      title: "AMMS – Architectural Visualization",
      text: "3D Architecture video walkthrough for a private 2-story luxury apartment. Produced by AMMS studio with full modeling, texturing, lighting, animation and post-production.",
    },
    {
      id: "3tEY4U5mTgU",
      title: "AMMS – Architectural Visualization",
      text: "3D Architecture video walkthrough for a private 2-story luxury apartment. Produced by AMMS studio with full modeling, texturing, lighting, animation and post-production.",
    },
    {
      id: "zVO6h3Nzg-8",
      title: "AMMS – Architectural Visualization",
      text: "3D Architecture video walkthrough for a private 2-story luxury apartment. Produced by AMMS studio with full modeling, texturing, lighting, animation and post-production.",
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: 4,
        px: { xs: 2, md: 4 },
        py: 6,
        maxWidth: "1400px",
        mx: "auto",
      }}
    >
      {videos.map((v, i) => (
        <Box key={i}>
          {/* --- IFRAME --- */}
          <Box
            sx={{
              width: "100%",
              aspectRatio: "16/9",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${v.id}`}
              title={v.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>

          {/* --- TITLE --- */}
          <Typography
            sx={{
              mt: 2,
              fontSize: "1.3rem",
              fontWeight: 600,
            }}
          >
            {v.title}
          </Typography>

          {/* --- TEXT --- */}
          <Typography sx={{ mt: 1, color: "#555", lineHeight: 1.6 }}>
            {v.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
