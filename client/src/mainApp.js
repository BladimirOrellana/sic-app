import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./views/public/home";
import Login from "./views/public/login";
import NoFound from "./views/public/noFound/noFound";
import SignUp from "./views/public/singUp";
import Dashboard from "./views/privates/account/Admin";

function MainApp() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoFound />} />

        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default MainApp;
