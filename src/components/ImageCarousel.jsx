import React from "react";
import Slider from "react-slick";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/carousel/Master-bedroom.jpg",
  "/carousel/CHILDBEDROOM2.jpg",
  "/carousel/BETHROOM.jpg",
  "/carousel/int-2.jpg",
  "/carousel/EX-1.jpg",
  "/carousel/EX_1_.jpg",
  "/carousel/NIGHT.jpg",
];
function NextArrow({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      disableRipple
      disableFocusRipple
      sx={{
        position: "absolute",
        top: "50%",
        right: { xs: 20, sm: 40, md: 200 }, // 🔹 קרוב יותר במובייל
        transform: "translateY(-50%)",
        color: "#fff",
        "&:hover": { border: "1px solid" },
        "&:focus": { outline: "none", boxShadow: "none" },
        zIndex: 5,
        fontSize: { xs: "medium", md: "2.4rem" },
      }}
    >
      <ArrowForwardIos fontSize="inherit" />
    </IconButton>
  );
}

function PrevArrow({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      disableRipple
      disableFocusRipple
      sx={{
        position: "absolute",
        top: "50%",
        left: { xs: 20, sm: 40, md: 100 }, // 🔹 קרוב יותר במובייל
        transform: "translateY(-50%)",
        color: "#fff",
        "&:hover": {
          border: "1px solid",
        },
        "&:focus": { outline: "none", boxShadow: "none" },
        zIndex: 5,
        fontSize: { xs: "medium", md: "2.4rem" },
      }}
    >
      <ArrowBackIosNew fontSize="inherit" />
    </IconButton>
  );
}

export default function ImageCarousel() {
  const isMobile = useMediaQuery("(max-width:900px)");

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

  // 🔥 הגבהים החדשים
  const heroHeight = isMobile ? "45vh" : "65vh";

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: heroHeight,
        overflow: "hidden",
        mt: "70px",
      }}
    >
      <Slider {...settings}>
        {images.map((img, index) => (
          <Box key={index} sx={{ width: "100%", height: heroHeight }}>
            <img
              src={img}
              alt={`slide-${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: isMobile ? "contain" : "cover", // 🔥 הכי חשוב
                objectPosition: "center",
                display: "block",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
