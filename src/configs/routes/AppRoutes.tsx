import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Initial } from "@/pages";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
