import React, { useState } from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";

export default function ContactForm() {
  // ניהול הנתונים של הטופס
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    modeling: "",
  });

  // עדכון הנתונים בזמן הקלדה
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // פונקציית השליחה
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3FORMS_KEY, // קריאה מה-env
        ...formData,
      }),
    });

    const result = await response.json();
    if (result.success) {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
        modeling: "",
      });
    } else {
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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
        • <b style={{ color: "#FF006E" }}>Email:</b> studiovis.am.ms@gmail.com
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
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Your Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Stack>

        {/* Row 2 */}
        <TextField
          fullWidth
          label="Your Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Row 3 */}
        <TextField
          fullWidth
          multiline
          rows={6}
          label="How can we help you?"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        {/* Checkbox style input */}
        <TextField
          fullWidth
          label="I also need modeling"
          name="modeling"
          value={formData.modeling}
          onChange={handleChange}
        />

        {/* SEND Button row */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ mt: 2 }}
        >
          <Button
            type="submit"
            variant="text"
            sx={{
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "#000",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#FF006E",
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
