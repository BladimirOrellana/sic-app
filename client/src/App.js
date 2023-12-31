import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import logo from "./logo.svg";
import "./App.css";
import Home from "./views/public/home";
import MainApp from "./mainApp";
import {
  setAuthUserStartAction,
  setAuthUserSuccessAction,
} from "./redux/actions/registerUserAction";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const dispach = useDispatch();
  // onAuthStateChanged(auth, (user) => {
  //   // dispach(setAuthUserAction({ currentUser: null, loading: true }));
  //   if (user) {
  //     const currentUser = localStorage.getItem("user");
  //     console.log("app user data ", currentUser);
  //     dispach(setAuthUserStartAction());
  //   } else {
  //     // dispach(setAuthUserSuccessAction({ currentUser: null, loading: false }));
  //   }
  // });
  return (
    <div className="App">
      <MainApp />
    </div>
  );
}

export default App;
