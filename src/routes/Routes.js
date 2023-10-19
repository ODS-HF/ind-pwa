import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";

const InternalRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/home"} element={<Home/>}/>
    </Routes>
  );
};

export default InternalRoutes;
