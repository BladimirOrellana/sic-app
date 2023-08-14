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
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
export default Home;
