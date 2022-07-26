import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Containers
import Home from "../containers/Home";
import HowItWorks from "../containers/HowItWorks";
import NotFound from "../containers/404";
import Mapping from "../containers/Mapping";
import Login from "../containers/Login";
import Logged from "../containers/Logged";
import History from "../containers/History";

import path from "./paths";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path={path.default} element={<Home />} />
        <Route path={path.home} element={<Home />} />
        <Route path={path.history} element={<History />} />
        <Route path={path.logged} element={<Logged />} />
        <Route path={path.howItWorks} element={<HowItWorks />} />
        <Route path={path.whereToDonate} element={<NotFound />} />
        <Route path={path.notFound} element={<NotFound />} />
        <Route path={path.login} element={<Login />} />
        <Route path={path.mapping} element={<Mapping />} />
      </Routes>
    </Router>
  );
}
