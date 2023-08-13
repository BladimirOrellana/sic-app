import { Button } from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import Loading from "../../../../components/loading/lindex";
import { logOutUserAction } from "../../../../redux/actions/authUserActions";
import { auth } from "./../../../../firebase/firebase";
import CreateTandaModal from "../../../../components/createTandaModal";
export default function Perfil() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state);
  console.log("current user perfil", currentUser.user.currentUser);
  return (
    <div>
      {currentUser.user.loading === true ? (
        <Loading />
      ) : (
        <div>
          {currentUser.user.currentUser ? (
            <div>
              <p>Perfil</p>
              {currentUser.user.currentUser.username}
              <Button onClick={() => dispatch(logOutUserAction(auth))}>
                Logout
              </Button>{" "}
              <CreateTandaModal />
            </div>
          ) : (
            <Navigate replace to={"/login"} />
          )}
        </div>
      )}
    </div>
  );
}
