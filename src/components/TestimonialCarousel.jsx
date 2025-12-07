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

  const arrowStyles = {
    disableRipple: true,
    disableFocusRipple: true,
    sx: {
      "& .MuiTouchRipple-root": { display: "none" },
      "&:focus": { outline: "none", boxShadow: "none" },
      "&:focus-visible": { outline: "none", boxShadow: "none" },
    },
  };

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

        // ✅ מובייל בלבד
        "@media (max-width: 900px)": {
          gridTemplateColumns: "1fr",
          textAlign: "center",
          px: 2,
          py: 4,
        },
      }}
    >
      {/* ✅ חץ שמאל – דסקטופ בלבד */}
      <IconButton
        onClick={prev}
        sx={{
          position: "absolute",
          left: 10,
          top: "50%",
          transform: "translateY(-50%)",

          "@media (max-width: 900px)": {
            display: "none",
          },
          "& .MuiTouchRipple-root": { display: "none" },
          "&:focus": { outline: "none", boxShadow: "none" },
          "&:focus-visible": { outline: "none", boxShadow: "none" },
        }}
      >
        <ArrowBackIosNewIcon fontSize="large" />
      </IconButton>

      {/* ✅ תמונה */}
      <Box
        component="img"
        src={item.image}
        alt=""
        sx={{
          width: "230px",
          height: "230px",
          objectFit: "contain",
          justifySelf: "center",

          "@media (max-width: 900px)": {
            width: "160px",
            height: "160px",
            mb: 2,
          },
        }}
      />

      {/* ✅ טקסט */}
      <Box
        sx={{
          maxWidth: "800px",
          minHeight: "260px",

          "@media (max-width: 900px)": {
            maxWidth: "100%",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "4rem",
            lineHeight: "0.5",
            color: "#FF007F",
            fontWeight: "bold",

            "@media (max-width: 900px)": {
              fontSize: "3rem",
            },
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

            "@media (max-width: 900px)": {
              fontSize: "1rem",
              px: 1,
            },
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

            "@media (max-width: 900px)": {
              fontSize: "1rem",
            },
          }}
        >
          — {item.author}
        </Typography>
      </Box>

      {/* ✅ חץ ימין – דסקטופ בלבד */}
      <IconButton
        onClick={next}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",

          "@media (max-width: 900px)": {
            display: "none",
          },
          "& .MuiTouchRipple-root": { display: "none" },
          "&:focus": { outline: "none", boxShadow: "none" },
          "&:focus-visible": { outline: "none", boxShadow: "none" },
        }}
      >
        <ArrowForwardIosTwoToneIcon fontSize="large" />
      </IconButton>

      {/* ✅ ✅ ✅ חצים ביחד – מובייל בלבד */}
      <Box
        sx={{
          display: "none",

          "@media (max-width: 900px)": {
            display: "flex",
            justifyContent: "center",
            gap: 4,
            mt: 3,
          },
        }}
      >
        <IconButton onClick={prev} {...arrowStyles}>
          <ArrowBackIosNewIcon />
        </IconButton>

        <IconButton onClick={next} {...arrowStyles}>
          <ArrowForwardIosTwoToneIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
