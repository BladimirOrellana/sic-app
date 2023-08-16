import { Button } from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import Loading from "../../../../components/loading/lindex";

import { auth } from "../../../../firebase/firebase";
import CreateTandaModal from "../../../../components/createTandaModal";
import { logOutUserStartAction } from "../../../../redux/actions/registerUserAction";

export default function Perfil() {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  console.log(" auth user ", User);
  console.log("loading.................", loading);
  return (
    <div>
      {loading === true ? (
        <Loading />
      ) : (
        <div>
          {User !== null ? (
            <div>
              <p>Perfil</p>
              {User.username}
              <div>
                <h1>Mis tandas </h1>

                {}
              </div>
              <Button onClick={() => dispatch(logOutUserStartAction(auth))}>
                Logout
              </Button>{" "}
            </div>
          ) : (
            <Navigate replace to={"/login"} />
          )}
        </div>
      )}
    </div>
  );
}
