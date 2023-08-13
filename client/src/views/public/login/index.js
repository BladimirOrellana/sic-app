import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, Navigate } from "react-router-dom";

import {
  loginUserAction,
  registerUserWithEmailAction,
  signUpUserFirebaseAction,
} from "../../../redux/actions/userActions";
import GetAllUsers from "../../privates/account/Admin/getAllUsers";

import Alerts from "../../../components/alerts";
import { redirect } from "react-router-dom";

import Loading from "../../../components/loading/lindex";
export default function SignUp() {
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state);

  console.log("current 3.uid", currentUser.user.currentUser);
  console.log("current loading", currentUser.user.loading);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [reEnterPassword, setRenterPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPasword(e.target.value);
  };

  const handleSummit = (e) => {
    e.preventDefault();

    dispatch(
      loginUserAction({
        email: email,
        password: password,
      })
    );
  };
  if (currentUser.user.currentUser) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <div>
        {currentUser.user.loading === true ? (
          <Loading />
        ) : (
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Alerts />
            <div>
              <h1>LOGIN</h1>
              <TextField
                style={{ display: "block" }}
                onChange={(e) => handleEmail(e)}
                label="Email"
                variant="standard"
              />
              <TextField
                style={{ display: "block" }}
                onChange={(e) => handlePassword(e)}
                label="Password"
                placeholder="Placeholder"
                multiline
                variant="standard"
              />
            </div>
            <div>
              <Button variant="outline" onClick={(e) => handleSummit(e)}>
                Login
              </Button>
              <Link to={"/sign-up"}>Sign Up</Link>
            </div>
          </Box>
        )}
      </div>
    );
  }
}
