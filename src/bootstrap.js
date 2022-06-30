import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App.js";
// import Unauthorized from "./components/Unauthorized";

const app = document.getElementById("app");
const root = createRoot(app);

root.render(<App></App>);
