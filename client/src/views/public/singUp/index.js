import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import {
  registerUserWithEmailAction,
  signUpUserFirebaseAction,
} from "../../../redux/actions/userActions";
import GetAllUsers from "../../privates/account/Admin/getAllUsers";
import { Alert } from "@mui/joy";
import Alerts from "../../../components/alerts";
import { redirect } from "react-router-dom";
import { Loader } from "three";
import Loading from "../../../components/loading/lindex";
export default function SignUp() {
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state);
  const errorMessage = useSelector((state) => state);

  if (currentUser.user.currentUser) {
    navigate("/");
  }

  console.log("current 3.uid", currentUser.user.currentUser);
  console.log("current 3.uid", errorMessage);
  const dispatch = useDispatch();
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

    dispatch(
      signUpUserFirebaseAction({
        username: userName,
        email: email,
        password: password,
      })
    );
  };

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
              Registrarte
            </Button>
            <Link to={"/login"}>Login</Link>
          </div>
        </Box>
      )}
    </div>
  );
}
