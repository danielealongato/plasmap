import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Containers
import Home from "../containers/Home";
import HowItWorks from "../containers/HowItWorks";
import NotFound from "../containers/404";
import Mapping from "../containers/mapping";

import path from "./paths";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path={path.home} element={<Home />} />
        <Route path={path.howItWorks} element={<HowItWorks />} />
        <Route path={path.whereToDonate} element={<NotFound />} />
        <Route path={path.notFound} element={<NotFound />} />
        <Route path={path.mapping} element={<Mapping />} />
      </Routes>
    </Router>
  );
}
