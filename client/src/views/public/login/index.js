import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, Navigate } from "react-router-dom";

import Alerts from "../../../components/alerts";
import { redirect } from "react-router-dom";

import Loading from "../../../components/loading/lindex";
import { loginStartAction } from "../../../redux/actions/registerUserAction";
export default function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const User = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
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
    const data = {
      email: email,
      password: password,
    };

    console.log("login user ", data);
    dispatch(loginStartAction(data));
  };
  if (User) {
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
