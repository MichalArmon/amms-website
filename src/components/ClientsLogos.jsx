import React from "react";
import { Box } from "@mui/material";

const logos = [
  "/clients/AK.svg",
  "/clients/LOTAN.svg",
  "/clients/NIZA_1.svg",
  "/clients/meirALON.png",
  "/clients/SABRA.png",
  "/clients/pant.png",
];

export default function ClientsLogos() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 1fr" },
        gap: 4,
        maxWidth: "1200px",
        minWidth: "1200px",
        mx: "auto",
        mt: 6,

        px: 2,
      }}
    >
      {logos.map((src, i) => (
        <Box
          key={i}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.03)",
            borderRadius: "8px",
            height: "110px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "0.3s ease",
            cursor: "pointer",

            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
            },
          }}
        >
          <Box
            component="img"
            src={src}
            alt=""
            sx={{
              width: "70%",
              height: "70%",
              objectFit: "contain",
              opacity: 0.8,
              transition: "0.3s",

              "&:hover": {
                opacity: 1,
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
}
