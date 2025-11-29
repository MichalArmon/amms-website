// 📁 src/components/ContactForm.jsx
import React from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
  Email,
} from "@mui/icons-material";

export default function ContactForm() {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        px: { xs: 2, md: 4 },
        py: { xs: 6, md: 8 },
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 3,
          background: "#FF006E",
          mx: "auto",
          mb: 3,
        }}
      />

      {/* 🔹 Contact info */}
      <Typography sx={{ fontSize: "1rem", mb: 1 }}>
        <b style={{ color: "#FF006E" }}>PHONE OR WHATSAPP •</b> +972-0502136623
        • <b style={{ color: "#FF006E" }}>Email:</b> OFFICE@AMMS.CO.IL
      </Typography>

      <Typography sx={{ fontSize: "0.95rem", mt: 3, mb: 1 }}>
        JOIN US IN SOCIAL MEDIA
      </Typography>

      {/* 🔹 Social icons */}
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }}>
        <Facebook sx={{ fontSize: 32 }} />
        <Instagram sx={{ fontSize: 32 }} />
        <LinkedIn sx={{ fontSize: 32 }} />
        <YouTube sx={{ fontSize: 32 }} />
      </Stack>

      {/* 🔹 Middle title */}
      <Typography
        sx={{
          fontSize: "1rem",
          mb: 4,
        }}
      >
        <b style={{ color: "#FF006E" }}>OR</b> LEAVE US YOUR DETAILS, WE'LL{" "}
        <b style={{ color: "#FF006E" }}>TAKE CARE</b> OF THE REST!
      </Typography>

      {/* 🔹 Form */}
      <Stack spacing={2}>
        {/* Row 1 */}
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <TextField fullWidth label="Your Name" />
          <TextField fullWidth label="Last Name" />
          <TextField fullWidth label="Your Phone" />
        </Stack>

        {/* Row 2 */}
        <TextField fullWidth label="Your Email" />

        {/* Row 3 */}
        <TextField fullWidth multiline rows={6} label="How can we help you?" />

        {/* Checkbox style input */}
        <TextField fullWidth label="I also need modeling" />

        {/* SEND Button row */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ mt: 2 }}
        >
          <Button
            variant="text"
            sx={{
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "#000",
              backgroundColor: "transparent", // 🔹 שקוף במצב רגיל
              "&:hover": {
                backgroundColor: "transparent", // 🔹 אין רקע בהובר
                color: "#FF006E",
                // 🔹 רק הטקסט נצבע
              },
              "&:focus": {
                backgroundColor: "transparent",
                outline: "none",
                boxShadow: "none",
              },
            }}
          >
            SEND
          </Button>

          <Typography
            sx={{
              fontSize: "1rem",
              color: "#FF006E",
              fontWeight: 600,
            }}
          >
            AND LET’S DO SOMETHING AMAZING TOGETHER!
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
