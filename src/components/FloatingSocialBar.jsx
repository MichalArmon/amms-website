import React, { useState } from "react";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseIcon from "@mui/icons-material/Close";
import ChatIcon from "@mui/icons-material/Chat";

export default function FloatingSocialBar() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [open, setOpen] = useState(false);

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
      link: "https://api.whatsapp.com/send?phone=97233752011",
    },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: isMobile ? 20 : -150,
        left: 20,
        transform: isMobile ? "none" : "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        zIndex: 2000,
      }}
    >
      {/* ✅ כפתור פתיחה במובייל */}
      {isMobile && !open && (
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            backgroundColor: "#FF006E",
            color: "white",
            boxShadow: 4,
          }}
        >
          <ChatIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
      )}

      {/* ✅ האייקונים שנפתחים */}
      {(open || !isMobile) &&
        items.map((item, i) => (
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
              transition: "all 0.3s ease",
              boxShadow: 2,

              "&:hover": {
                transform: "scale(0.9)",
                boxShadow: 4,
              },

              "& svg": {
                fontSize: "2.2rem",
              },
            }}
          >
            {item.icon}
          </IconButton>
        ))}

      {/* ✅ כפתור סגירה */}
      {isMobile && open && (
        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            backgroundColor: "#fff",
            color: "#FF006E",
            boxShadow: 4,
          }}
        >
          <CloseIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
      )}
    </Box>
  );
}
