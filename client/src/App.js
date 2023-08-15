import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import logo from "./logo.svg";
import "./App.css";
import Home from "./views/public/home";
import MainApp from "./mainApp";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const dispach = useDispatch();

  return (
    <div className="App">
      <MainApp />
    </div>
  );
}

export default App;
