import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";

const testimonials = [
  {
    image: "/clients/AK.svg",
    quote: `
      Our acquaintance with Shira began her studies at Tel Aviv University. 
      Tha and Liora (the owner of the firm) were her facilitators in the final project, 
      and even then a special relationship was created between them that brought about 
      a fruitful and successful work...
    `,
    author: "Kisselov Kaye Architects.",
  },
  {
    image: "/clients/ODYA.jpg",
    quote: `
      Shira has always been able to represent our projects so that their existence is 
      sharp and vivid and our planning vision is present in all its glory.
    `,
    author: "Urban Vision Studio.",
  },
  {
    image: "/clients/NIZA_1.svg",
    quote: `
      Working with Shira is always very pleasant, fruitful and especially does not 
      compromise on quality.
    `,
    author: "MK Real Estate Architects.",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const item = testimonials[index];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "250px 1fr",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        maxWidth: "1300px",
        mx: "auto",
        px: 14,

        position: "relative",
      }}
    >
      {/* חץ שמאל */}
      <IconButton
        onClick={prev}
        sx={{
          position: "absolute",
          left: 10,
          top: "50%",
          transform: "translateY(-50%)",
          "&:focus": {
            outline: "none",
            boxShadow: "none",
          },
          "& .MuiTouchRipple-root": {
            display: "none",
          },
        }}
      >
        <ArrowBackIosNewIcon fontSize="large" />
      </IconButton>

      <Box
        component="img"
        src={item.image}
        alt=""
        sx={{
          width: "230px",
          height: "230px",
          objectFit: "contain",
          justifySelf: "center",
        }}
      />

      {/* טקסט מימין */}
      <Box sx={{ maxWidth: "800px" }}>
        <Typography
          sx={{
            fontSize: "4rem",
            lineHeight: "0.5",
            color: "#FF007F",
            fontWeight: "bold",
          }}
        >
          "
        </Typography>

        <Typography
          sx={{
            fontSize: "1.1rem",
            lineHeight: 1.7,
            color: "#444",
            whiteSpace: "pre-line",
            mb: 3,
          }}
        >
          {item.quote}
        </Typography>

        <Typography
          sx={{
            fontSize: "1.2rem",
            color: "#FF007F",
            fontWeight: "600",
            letterSpacing: "1px",
          }}
        >
          — {item.author}
        </Typography>
      </Box>

      {/* חץ ימין */}
      <IconButton
        onClick={next}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          "&:focus": {
            outline: "none",
            boxShadow: "none",
          },
          "& .MuiTouchRipple-root": {
            display: "none",
          },
        }}
      >
        <ArrowForwardIosTwoToneIcon fontSize="large" />
      </IconButton>
    </Box>
  );
}
