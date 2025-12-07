import React from "react";
import {
  Box,
  Typography,
  Divider,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { NavLink, Outlet, useLocation } from "react-router-dom";

// ICONS (רק למובייל)
import ChairIcon from "@mui/icons-material/Chair";
import ApartmentIcon from "@mui/icons-material/Apartment";
import RealEstateAgentIcon from "@mui/icons-material/RealEstateAgent";
import BrushIcon from "@mui/icons-material/Brush";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export default function Projects() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  const isMobile = useMediaQuery("(max-width:600px)");

  // 💡 כותרת דינמית לפי הנתיב
  let title = "OUR PROJECTS";

  if (path.includes("graphics")) title = "GRAPHICS";
  else if (path.includes("marketing")) title = "MARKETING & REAL ESTATE";
  else if (path.includes("exterior")) title = "EXTERIOR RENDERINGS";
  else if (path.includes("creative")) title = "CREATIVE";
  else if (path.includes("interior") || path.endsWith("/projects")) {
    title = "OUR PROJECTS";
  }

  const firstLetter = title.charAt(0);
  const rest = title.slice(1);

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 4, mt: 10 }}>
      {/* --- כותרת דינמית --- */}
      <Typography
        variant="h1"
        sx={{
          fontWeight: 800,
          textAlign: "center",
          mb: 2,
          letterSpacing: "2px",
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        <Box component="span" sx={{ color: "#FF007F" }}>
          {firstLetter}
        </Box>
        {rest}
      </Typography>

      <Divider sx={{ mb: 3 }} />

      {/* --- תפריט ניווט --- */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: { xs: 3, md: 4 },
          mb: 5,
          flexWrap: "wrap",
        }}
      >
        <NavLinkItem
          to="interior"
          label="INTERIOR RENDERINGS"
          icon={<ChairIcon />}
          isMobile={isMobile}
        />

        <NavLinkItem
          to="exterior"
          label="EXTERIOR RENDERINGS"
          icon={<ApartmentIcon />}
          isMobile={isMobile}
        />

        <NavLinkItem
          to="marketing"
          label="MARKETING & REAL ESTATE"
          icon={<RealEstateAgentIcon />}
          isMobile={isMobile}
        />

        <NavLinkItem
          to="graphics"
          label="GRAPHICS"
          icon={<BrushIcon />}
          isMobile={isMobile}
        />

        <NavLinkItem
          to="creative"
          label="CREATIVE"
          icon={<AutoAwesomeIcon />}
          isMobile={isMobile}
        />
      </Box>

      {/* --- תוכן פנימי --- */}
      <Outlet />
    </Box>
  );
}

/* ---------------- ITEM רספונסיבי ---------------- */
function NavLinkItem({ to, label, icon, isMobile }) {
  const link = (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        textDecoration: "none",
        fontWeight: isActive ? 700 : 500,
        color: isActive ? "#FF007F" : "#333",
        borderBottom:
          isActive && !isMobile ? "2px solid #FF007F" : "2px solid transparent",
        paddingBottom: isMobile ? "0px" : "6px",
        transition: "0.3s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: isMobile ? "1.6rem" : "0.95rem",
      })}
    >
      {/* ✅ במובייל – רק אייקון */}
      {isMobile ? icon : label}
    </NavLink>
  );

  // ✅ Tooltip רק במובייל
  return isMobile ? (
    <Tooltip title={label} arrow placement="top">
      <span>{link}</span>
    </Tooltip>
  ) : (
    link
  );
}
