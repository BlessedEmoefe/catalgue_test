import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import {
  // ErrorPage,
  Home,
  Cart
} from "../../pages/index.jsx";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
