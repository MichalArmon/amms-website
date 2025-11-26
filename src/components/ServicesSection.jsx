import React from "react";
import { Box, Typography, Divider, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const services = [
  {
    letter: "C",
    title: "CONSULT",
    description:
      "We at AMMS studio have a professional architects team working to make your VISION A REALITY. Providing impeccable service to create a perfect image FOR U!",
  },
  {
    letter: "G",
    title: "GRAPHICS",
    description:
      "High-end Marketing floor plans to illustrate your vision to the potential buyers.",
  },
  {
    letter: "A",
    title: "ANIMATION",
    description:
      "Architectural animation. Unlike an architectural rendering, which is a single image from a single point of view, it provides a more realistic way to show your vision to the client.",
  },
  {
    letter: "R",
    title: "RENDERING",
    description:
      "We at studio AMMS offer a wide range of 3D solutions. Photorealistic architectural rendering.",
  },
  {
    letter: "C",
    title: "CREATIVE",
    description:
      "Illustrations from blueprints and 2D drawing post-production and verbal diagrams to explain the project and editing presentation sheets.",
  },
];

export default function ServicesSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 4, md: 8 },
        backgroundColor: "#fff",
        textAlign: "center",
        maxWidth: "1400px",
        mx: "auto",
      }}
    >
      {/* כותרת עליונה */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Typography
          variant="h5"
          sx={{
            display: "inline-block",
            fontWeight: 700,
            letterSpacing: { xs: "0.1rem", md: "0.25rem" },
            px: { xs: 1.5, md: 2.5 },
            py: 1,
            borderRadius: "2px",
            textTransform: "uppercase",
            fontSize: { xs: "1.2rem", md: "1.6rem" },
          }}
        >
          OUR SERVICES
        </Typography>
        <Divider
          sx={{
            width: "50px",
            height: "3px",
            backgroundColor: "#E91E63",
            mx: "auto",
            mt: 1.5,
            mb: { xs: 6, md: 8 },
          }}
        />
      </motion.div>

      {/* רשימת השירותים */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: { xs: 6, md: 8 },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{
              flex: "1 1 200px",
              maxWidth: "230px",
              minWidth: "200px",
              textAlign: "center",
            }}
          >
            {/* אות גדולה */}
            <Typography
              sx={{
                display: "block",
                fontSize: { xs: "3.5rem", md: "5rem" },
                fontWeight: 900,
                color: "#212121",
                lineHeight: 1,
                mb: 1,
                transition: "color 0.3s ease, transform 0.2s ease",
                cursor: "pointer",
                "&:hover": {
                  color: "#E91E63",
                  transform: "scale(1.08)",
                },
              }}
            >
              {service.letter}
            </Typography>

            {/* כותרת ורודה */}
            <Typography
              sx={{
                color: "#E91E63",
                fontWeight: 700,
                letterSpacing: "0.25rem",
                mb: isMobile ? 0 : 2,
              }}
            >
              {service.title}
            </Typography>

            {/* תיאור – רק בדסקטופ */}
            {!isMobile && (
              <Typography
                sx={{
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: "#333",
                  maxWidth: 250,
                  mx: "auto",
                }}
              >
                {service.description}
              </Typography>
            )}
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
