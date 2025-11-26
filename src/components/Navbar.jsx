import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  useTheme,
  IconButton,
  Drawer,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const location = useLocation();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const pages = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "PROJECTS", path: "/projects" },
    { label: "ANIMATION", path: "/animation" },
    { label: "CLIENTS", path: "/clients" },
    { label: "CONTACT US", path: "/contact" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "0px 6px 6px -6px rgba(0,0,0,0.3)",
          paddingY: 1,
          zIndex: 1200,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* 🔹 לוגו */}
          <img
            src="/LOGO.svg"
            alt="AMMS logo"
            style={{ width: "180px", maxWidth: "40vw" }}
          />

          {/* 🔹 תפריט למחשב */}
          <Stack
            direction="row"
            spacing={4}
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => {
              const isActive = location.pathname === page.path;
              return (
                <Button
                  key={page.label}
                  component={Link}
                  to={page.path}
                  disableRipple
                  sx={{
                    color: isActive ? theme.palette.primary.main : "#222",
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: isActive ? 0 : 0.5,
                    fontSize: "0.9rem",
                    borderBottom: isActive
                      ? `2px solid ${theme.palette.primary.main}`
                      : "2px solid transparent",
                    borderRadius: 0,
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: theme.palette.primary.main,
                    },
                    "&:focus": {
                      outline: "none",
                      boxShadow: "none",
                    },
                    "&:focus-visible": {
                      outline: "none",
                      boxShadow: "none",
                    },
                  }}
                >
                  {page.label}
                </Button>
              );
            })}
          </Stack>

          {/* 🔹 כפתור תפריט במובייל */}
          <IconButton
            sx={{
              display: { xs: "flex", md: "none" },
              "&:focus": { outline: "none", boxShadow: "none" },
              "&:focus-visible": { outline: "none", boxShadow: "none" },
            }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* 🔹 Drawer למובייל */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "70%",
            backgroundColor: "#fff",
            p: 3,
          },
        }}
      >
        <Box display="flex" justifyContent="flex-end">
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              "&:focus": { outline: "none", boxShadow: "none" },
              "&:focus-visible": { outline: "none", boxShadow: "none" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Stack spacing={3} alignItems="center" mt={4}>
          {pages.map((page) => (
            <Button
              key={page.label}
              component={Link}
              to={page.path}
              onClick={() => setOpen(false)}
              sx={{
                color:
                  location.pathname === page.path
                    ? theme.palette.primary.main
                    : "#222",
                fontWeight: location.pathname === page.path ? "bold" : "normal",
                fontSize: "1rem",
                "&:focus": { outline: "none", boxShadow: "none" },
                "&:focus-visible": { outline: "none", boxShadow: "none" },
              }}
            >
              {page.label}
            </Button>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}
