import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function Projects() {
  const location = useLocation();
  const path = location.pathname.toLowerCase(); // נורמליזציה למקרה של אותיות גדולות

  // 💡 כותרת דינמית לפי הנתיב
  let title = "OUR PROJECTS";

  if (path.includes("graphics")) title = "GRAPHICS";
  else if (path.includes("marketing")) title = "MARKETING & REAL ESTATE";
  else if (path.includes("exterior")) title = "EXTERIOR RENDERINGS";
  else if (path.includes("creative")) title = "CREATIVE";
  else if (path.includes("interior") || path.endsWith("/projects")) {
    title = "OUR PROJECTS";
  }

  // 💡 האות הראשונה בצבע ורוד
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
        }}
      >
        <Box component="span" sx={{ color: "#FF007F" }}>
          {firstLetter}
        </Box>
        {rest}
      </Typography>

      <Divider sx={{ mb: 3 }} />

      {/* --- תפריט ניווט פנימי --- */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          mb: 5,
          flexWrap: "wrap",
        }}
      >
        <NavLinkItem to="Interior">INTERIOR RENDERINGS</NavLinkItem>
        <NavLinkItem to="exterior">EXTERIOR RENDERINGS</NavLinkItem>
        <NavLinkItem to="marketing">MARKETING & REAL ESTATE</NavLinkItem>
        <NavLinkItem to="graphics">GRAPHICS</NavLinkItem>
        <NavLinkItem to="creative">CREATIVE</NavLinkItem>
      </Box>

      {/* --- כאן נטענים הדפים הפנימיים --- */}
      <Outlet />
    </Box>
  );
}

/* --------------- קומפוננטה קטנה לקישורים --------------- */
function NavLinkItem({ to, children }) {
  return (
    <NavLink
      to={to.toLowerCase()}
      style={({ isActive }) => ({
        textDecoration: "none",
        fontWeight: isActive ? 700 : 500,
        color: isActive ? "#FF007F" : "#333",
        borderBottom: isActive ? "2px solid #FF007F" : "2px solid transparent",
        paddingBottom: "4px",
        transition: "0.3s",
      })}
    >
      {children}
    </NavLink>
  );
}
