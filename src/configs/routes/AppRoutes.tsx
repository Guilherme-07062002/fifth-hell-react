import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Scenario } from "@/pages";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/scenario" element={<Scenario />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
