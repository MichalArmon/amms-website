import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Button, Stack, useTheme } from "@mui/material";

export default function Navbar() {
  const location = useLocation();
  const theme = useTheme();
  const pages = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "PROJECTS", path: "/projects" },
    { label: "ANIMATION", path: "/animation" },
    { label: "CLIENTS", path: "/clients" },
    { label: "CONTACT US", path: "/contact" },
  ];

  return (
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
        <img src="/LOGO.svg" alt="AMMS logo" style={{ width: 250 }} />
        <Stack direction="row" spacing={4}>
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
                  "&:focus": { outline: "none", boxShadow: "none" },
                }}
              >
                {page.label}
              </Button>
            );
          })}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
