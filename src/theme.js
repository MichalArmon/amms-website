import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E91E63", // ורוד חם
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#212121", // שחור
    },
    background: {
      default: "#FFFFFF", // רקע לבן נקי
    },
    text: {
      primary: "#212121", // טקסט כהה
      secondary: "#777777", // טקסט משני
    },
  },

  typography: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 900,
    h1: { fontSize: "3rem", fontWeight: 700 },
    h2: { fontSize: "2rem", fontWeight: 700 },
    h3: { fontSize: "1.5rem", fontWeight: 600 },
    h4: { fontSize: "1.25rem", fontWeight: 600 },
    body1: { fontSize: "1rem" },
    button: {
      textTransform: "uppercase",
      fontWeight: 900,
      letterSpacing: "0.05em",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: "8px 24px",
          "&:hover": {
            backgroundColor: "#C2185B",
          },
        },
      },
    },
  },
});

export default theme;
