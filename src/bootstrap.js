import React from "react";
import { createRoot } from 'react-dom/client';

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App.js";
import theme from "./assets/theme/theme";
// import Unauthorized from "./components/Unauthorized";

const app = document.getElementById("app");
const root = createRoot(app);

root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>  
);
