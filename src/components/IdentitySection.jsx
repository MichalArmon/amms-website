import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function IdentitySection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "90vh",
        overflow: "hidden",
      }}
    >
      {/* 🖼️ שכבת התמונה ברקע */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url("/about/ABOUT.png")`, // עדכני את הנתיב לפי מיקום התמונה שלך
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // אפקט של "מודבק"
          zIndex: 1,
        }}
      />

      {/* 🩶 השכבה האפורה הדבוקה לראש */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          width: "100%",
          height: 120,
          backgroundColor: "rgba(90, 90, 90, 0.9)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, md: 8 },
          py: { xs: 1.5, md: 2 },
          zIndex: 2, // מעל התמונה
          backdropFilter: "blur(4px)", // מוסיף תחושת עומק
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.1rem",
            color: "#fff",
          }}
        >
          <Box component="span" sx={{ color: "#E91E63" }}>
            OUR
          </Box>{" "}
          IDENTITY
        </Typography>

        <Button
          sx={{
            color: "#fff",
            fontWeight: 700,
            fontSize: { xs: "0.9rem", md: "1rem" },
            textTransform: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Click here to know about our story &gt;&gt;
        </Button>
      </Box>

      {/* אזור שקוף מעל התמונה (כדי לשמור עליה בגובה) */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
        }}
      />
    </Box>
  );
}
