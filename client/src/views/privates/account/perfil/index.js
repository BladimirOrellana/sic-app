import SelectInput from "@mui/material/Select/SelectInput";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
export default function Perfil() {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => (state = { user: state }));
  console.log("current user ", currentUser.user.user.currentUser);
  if (currentUser.user.user.currentUser === null) {
    navigate("/");
  }

  return (
    <div>
      <h1>Perfil</h1>
      <div>
        <h3>
          {currentUser.user.user.currentUser
            ? currentUser.user.user.currentUser.username
            : null}
        </h3>
      </div>
    </div>
  );
}
