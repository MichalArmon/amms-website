import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import { Box, Typography } from "@mui/material";
import ServicesSection from "../components/ServicesSection";
import ClientsSection from "../components/ClientsSection";
import IdentitySection from "../components/IdentitySection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <ImageCarousel />
      <Box
        textAlign="center"
        sx={{
          py: 6,
          px: 2,
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 600,
            letterSpacing: "0.2rem",
            color: "#FF006E", // ורוד פוקסיה כמו בתמונה
            mb: 2,
          }}
        >
          AMMS VISUALIZATION & ANIMATION
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "1.1rem",
            lineHeight: 2,
            color: "#555",
            letterSpacing: "0.05rem",
            fontWeight: 600,
          }}
        >
          We, at Studio{" "}
          <Box component="span" sx={{ color: "#FF006E", fontWeight: 600 }}>
            AMMS
          </Box>
          , specialize in 3D modeling, rendering, and architectural
          visualization. We help each client bring their personal vision to life
          through tailored guidance and conceptual consolidation.
        </Typography>
      </Box>
      <ServicesSection />
      <ClientsSection />
      <IdentitySection />
      <Footer />
    </>
  );
}
