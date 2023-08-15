import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, Navigate } from "react-router-dom";

import Alerts from "../../../components/alerts";
import { redirect } from "react-router-dom";

import Loading from "../../../components/loading/lindex";
import { registerStartAction } from "../../../redux/actions/registerUserAction";
export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const User = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  console.log(" auth user ", User);
  console.log("loading.................", loading);
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [reEnterPassword, setRenterPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPasword(e.target.value);
  };
  const handleReenterPassword = (e) => {
    setRenterPassword(e.target.value);
  };
  const handleSummit = (e) => {
    e.preventDefault();
    const data = {
      username: userName,
      email: email,
      password: password,
      reEnterPassword: reEnterPassword,
    };
    dispatch(registerStartAction(data));
  };

  if (User) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <div>
        {loading === true ? (
          <Loading />
        ) : (
          <div>
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
                <h1>Sign Up</h1>
                <TextField
                  style={{ display: "block" }}
                  onChange={(e) => handleUsername(e)}
                  label="Username"
                  variant="standard"
                />
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
                <TextField
                  style={{ display: "block" }}
                  onChange={(e) => handleReenterPassword(e)}
                  label="Reenter Password"
                  variant="standard"
                />
              </div>
              <div>
                <Button variant="text" onClick={(e) => handleSummit(e)}>
                  Sign Up
                </Button>
                <Link to={"/login"}>Login</Link>
              </div>
            </Box>
          </div>
        )}
      </div>
    );
  }
}
