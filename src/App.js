import React from "react";

import { ThemeProvider } from "@mui/material/styles";

import Menu from "./components/Menu";
import Routes from "./routes";

import theme from "./assets/theme/theme";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Menu />
        <Routes />
      </ThemeProvider>
    </>
  );
};

export default App;
