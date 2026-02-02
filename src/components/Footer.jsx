import React from "react";
import {
  Box,
  Typography,
  Divider,
  Stack,
  IconButton,
  Link,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#fff",
        textAlign: "center",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 8 },
      }}
    >
      {/* 🔹 לוגו */}
      <Box
        component="img"
        src="/LOGO.svg"
        alt="AMMS Logo"
        sx={{
          width: 250,
          mx: "auto",
          mb: 1,
        }}
      />

      {/* 🔹 קו דק מעל החלק התחתון */}
      <Divider sx={{ my: 3, borderColor: "#ccc" }} />

      {/* 🔹 שורת אייקונים ויצירת קשר */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ mb: 2 }}
      >
        <Typography variant="body1" sx={{ fontSize: "1rem" }}>
          Join us at Social Media
        </Typography>

        <Stack direction="row" spacing={1}>
          <IconButton component="a" href="https://facebook.com" target="_blank">
            <FacebookIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://instagram.com"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton component="a" href="https://linkedin.com" target="_blank">
            <LinkedInIcon />
          </IconButton>
          <IconButton component="a" href="https://youtube.com" target="_blank">
            <YouTubeIcon />
          </IconButton>
        </Stack>

        <Typography variant="body1" sx={{ fontSize: "1rem" }}>
          | To contact us: <strong>+972-502136623</strong> &nbsp; Email:{" "}
          <Link
            href="mailto:office@amms.co.il"
            sx={{ color: "inherit", textDecoration: "none", fontWeight: 600 }}
          >
            studiovis.am.ms@gmail.com
          </Link>
        </Typography>
      </Stack>

      {/* 🔹 זכויות יוצרים */}
      <Typography sx={{ fontSize: "0.9rem", mb: 0.5 }}>
        Website Design by AMMS © 2019 By AMMS | ARMON-MARTZIANO.
      </Typography>

      {/* 🔹 טקסט בעברית ואנגלית */}
      <Typography sx={{ fontSize: "0.9rem" }}>
        Architectural Visualizations | עיבוד והדמיות אדריכליות
      </Typography>
    </Box>
  );
}
