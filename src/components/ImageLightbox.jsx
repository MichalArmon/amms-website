import React from "react";
import { Box, Typography, IconButton, Modal } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos, Close } from "@mui/icons-material";

export default function ImageLightbox({
  open,
  onClose,
  items,
  index,
  setIndex,
}) {
  if (!items?.length) return null;

  const img = items[index];

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          bgcolor: "rgba(0,0,0,0.92)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          p: 3,
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 20, right: 20, color: "white" }}
        >
          <Close />
        </IconButton>

        <IconButton
          onClick={prev}
          sx={{ position: "absolute", left: 30, top: "50%", color: "white" }}
        >
          <ArrowBackIosNew />
        </IconButton>

        <IconButton
          onClick={next}
          sx={{ position: "absolute", right: 30, top: "50%", color: "white" }}
        >
          <ArrowForwardIos />
        </IconButton>

        <Box
          component="img"
          src={img.src}
          alt={img.alt}
          sx={{
            maxWidth: "80vw",
            maxHeight: "70vh",
            objectFit: "contain",
            mb: 3,
          }}
        />

        <Typography sx={{ fontSize: "1.5rem", fontWeight: 700 }}>
          {img.alt}
        </Typography>

        <Typography sx={{ mt: 1, opacity: 0.8 }}>
          <strong>Architect:</strong> {img.architect} &nbsp; | &nbsp;
          <strong>Year:</strong> {img.year} &nbsp; | &nbsp;
          <strong>Location:</strong> {img.location}
        </Typography>

        <Typography
          sx={{
            mt: 2,
            opacity: 0.75,
            maxWidth: "70vw",
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          {img.description}
        </Typography>
      </Box>
    </Modal>
  );
}
