import { Button } from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import Loading from "../../../../components/loading/lindex";
import { logOutUserAction } from "../../../../redux/actions/authUserActions";
import { auth } from "../../../../firebase/firebase";
import CreateTandaModal from "../../../../components/createTandaModal";
import Tandas from "../../../../components/getTandas";
import GetTandasCreatedBy from "../../../../components/getTandas/getTandasCreatedBy";
export default function Perfil() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const user = useSelector((state) => state.user.currentUser);
  const loading = useSelector((state) => state.user.loading);
  console.log("state ", state);
  console.log("user perfil ", user);
  console.log("loading ", loading);
  return (
    <div>
      {loading === true ? (
        <Loading />
      ) : (
        <div>
          {user ? (
            <div>
              <p>Perfil</p>
              {user.username}
              <CreateTandaModal />
              <div>
                <h1>Mis tandas </h1>
                <GetTandasCreatedBy />
                {}
              </div>
              <Button onClick={() => dispatch(logOutUserAction(auth))}>
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
