import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, Navigate } from "react-router-dom";

import {
  loginUserAction,
  registerUserWithEmailAction,
  LoginUserFirebaseAction,
} from "../../../redux/actions/userActions";
import GetAllUsers from "../../privates/account/Admin/getAllUsers";

import Alerts from "../../../components/alerts";
import { redirect } from "react-router-dom";

import Loading from "../../../components/loading/lindex";
export default function Login() {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.currentUser);
  const loading = useSelector((state) => state.user.loading);

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
  if (user) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <div>
        {loading === true ? (
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
