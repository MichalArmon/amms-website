import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme.js";
import "./index.css"; // 👈 לוודא שהשורה הזו קיימת בראש הקובץ

import "@fontsource/montserrat";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
