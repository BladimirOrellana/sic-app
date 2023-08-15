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
import BottomAppBar from "./components/bottomNavBar";
import { ViewPortCheck } from "./components/viewPortCheck/index";
import Menu from "./components/menu";

function MainApp() {
  return (
    <div>
      {ViewPortCheck().innerWidth <= 500 ? null : <Header />}
      <Routes>
        {/*  private roots*/}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/perfil" element={<Perfil />} />
        {/*  public roots*/}
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/black-list" element={<BlackList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
      {ViewPortCheck().innerWidth <= 500 ? <BottomAppBar /> : null}
    </div>
  );
}

export default MainApp;
