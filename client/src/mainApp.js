import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./views/public/home";
import Login from "./views/public/login";
import NoFound from "./views/public/noFound/noFound";
import SignUp from "./views/public/singUp";
import Dashboard from "./views/privates/account/Admin";
import Perfil from "./views/privates/account/perfil";
import About from "./views/public/about";
import Contact from "./views/public/contact";
import BlackList from "./views/public/blackList";
import Header from "./components/header";

function MainApp() {
  return (
    <div>
      <Header />
      <Routes>
        {/*  private roots*/}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/perfil" element={<Perfil />} />
        {/*  public roots*/}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/black-list" element={<BlackList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </div>
  );
}

export default MainApp;
