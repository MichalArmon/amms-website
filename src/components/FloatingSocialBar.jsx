import React from "react";
import { Box, IconButton } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function FloatingSocialBar() {
  const items = [
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UClR6gWX9REUAin4K9r9Ab9Q/featured",
    },
    { icon: <FacebookIcon />, link: "https://www.facebook.com/STUDIOAMMS" },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/shira-martziano-971481114",
    },
    { icon: <InstagramIcon />, link: "https://www.instagram.com/studio_amms/" },
    { icon: <EmailIcon />, link: "office@amms.co.il" },
    {
      icon: <WhatsAppIcon />,
      link: "https://api.whatsapp.com/send?phone=97233752011&text=&source=&data=",
    },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: 20,
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        zIndex: 2000,
      }}
    >
      {items.map((item, i) => (
        <IconButton
          key={i}
          component="a"
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          disableRipple
          disableFocusRipple
          sx={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            backgroundColor: "#BDBDBD",
            color: "white",
            transition: "all 0.25s ease",
            boxShadow: 2,

            // ביטול כל מה שמכוער:
            outline: "none !important",
            "&:focus": { outline: "none" },
            "&:focus-visible": { outline: "none" },

            "&:hover": {
              transform: "scale(0.9)",

              boxShadow: 4,
            },

            "& svg": {
              fontSize: "2.2rem", // 💥 הגדלת אייקונים
            },
          }}
        >
          {item.icon}
        </IconButton>
      ))}
    </Box>
  );
}
