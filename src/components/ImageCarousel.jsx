import React from "react";
import Slider from "react-slick";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      disableRipple
      disableFocusRipple
      sx={{
        position: "absolute",
        top: "50%",
        right: 100,
        transform: "translateY(-50%)",
        color: "#fff",

        "&:hover": { color: "primary.main" },
        "&:focus": {
          outline: "none",
          boxShadow: "none",
        },
        "&:active": {},
        zIndex: 5,
      }}
    >
      <ArrowForwardIos fontSize="large" />
    </IconButton>
  );
}

function PrevArrow({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: 100,
        transform: "translateY(-50%)",
        color: "#fff",

        "&:hover": { color: "primary.main" },
        "&:focus": {
          outline: "none",
          boxShadow: "none",
        },
        "&:active": {},
        zIndex: 5,
      }}
    >
      <ArrowBackIosNew fontSize="large" />
    </IconButton>
  );
}

export default function ImageCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    "/carousel/Master-bedroom.jpg",
    "/carousel/CHILDBEDROOM2.jpg",
    "/carousel/BETHROOM.jpg",
    "/carousel/int-2.jpg",
    "/carousel/EX-1.jpg",
    "/carousel/EX_1_.jpg",
    "/carousel/NIGHT.jpg",
  ];

  return (
    <Box
      sx={{
        position: "relative",
        left: 0,
        right: 0,
        width: "100vw",
        height: "90vh",
        overflow: "hidden",
        mt: "70px", // אם ה-navbar שלך fixed
      }}
    >
      <Slider {...settings}>
        {images.map((img, index) => (
          <Box key={index} sx={{ width: "100vw", height: "90vh" }}>
            <img
              src={img}
              alt={`slide-${index}`}
              style={{
                width: "100vw",
                height: "90vh",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
