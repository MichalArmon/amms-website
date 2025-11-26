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
          py: { xs: 4, md: 6 },
          px: { xs: 2, md: 2 },
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {/* 🔹 כותרת ראשית */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 600,
            letterSpacing: { xs: "0.1rem", md: "0.2rem" },
            color: "#FF006E",
            mb: { xs: 1.5, md: 2 },
            fontSize: { xs: "1.7rem", sm: "2.3rem", md: "2.8rem" },
            lineHeight: 1.3,
            textAlign: "center", // ✅ לוודא שגם בכותרת ממורכז
            mx: "auto",
          }}
        >
          AMMS VISUALIZATION & ANIMATION
        </Typography>

        {/* 🔹 טקסט הסבר */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
            lineHeight: { xs: 1.8, md: 2 },
            color: "#555",
            letterSpacing: "0.05rem",
            fontWeight: 500,
            textAlign: "center", // ✅ לוודא שממורכז גם בגוף
            px: { xs: 2, sm: 4, md: 0 }, // ✅ רווח צדדים במובייל
            mx: "auto",
            maxWidth: { xs: "90%", sm: "80%", md: "70%" }, // ✅ למנוע הידבקות לשוליים
          }}
        >
          We, at Studio{" "}
          <Box
            component="span"
            sx={{
              color: "#FF006E",
              fontWeight: 600,
            }}
          >
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
