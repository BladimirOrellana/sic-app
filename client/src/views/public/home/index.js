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
import { logOUTUserAction } from "../../../redux/actions/authUserActions";
import Loading from "../../../components/loading/lindex";
function Home() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state);
  console.log("home user", currentUser.user.currentUser);
  console.log("home loading", currentUser.user.loading);
  return (
    <div>
      <p>Home</p>
      {currentUser.user.loading === true ? (
        <Loading />
      ) : (
        <div>
          {currentUser.user.currentUser ? (
            <div>
              {" "}
              <Button onClick={() => dispatch(logOUTUserAction(auth))}>
                Logout
              </Button>{" "}
              <h2>{currentUser.user.currentUser.username}</h2>
            </div>
          ) : (
            <Link to={"/sign-up"}>Register</Link>
          )}
        </div>
      )}
    </div>
  );
}
export default Home;
