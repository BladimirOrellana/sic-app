import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./../../../firebase/firebase";
import { Button } from "@mui/material";
import GetAllUsers from "../../privates/account/Admin/getAllUsers";
import { useDispatch, useSelector } from "react-redux";
import { signUpUserFirebaseAction } from "../../../redux/actions/userActions";
import { logOutUserAction } from "../../../redux/actions/authUserActions";
import Loading from "../../../components/loading/lindex";
function Home() {
  const currentUser = useSelector((state) => state);
  console.log("home user", currentUser.user.currentUser);
  console.log("home loading", currentUser.user.loading);
  return (
    <div>
      {currentUser.user.loading === true ? (
        <Loading />
      ) : (
        <div>
          <p>Home</p>
          <p>
            Welcome{" "}
            {currentUser.user.currentUser ? (
              currentUser.user.currentUser.username
            ) : (
              <Link to={"/login"}>Entrar O Crear Cuenta</Link>
            )}
          </p>
        </div>
      )}
    </div>
  );
}
export default Home;
