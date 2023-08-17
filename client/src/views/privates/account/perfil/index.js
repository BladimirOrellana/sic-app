import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import Loading from "../../../../components/loading/lindex";
import { Button } from "@mui/material";
import { auth } from "../../../../firebase/firebase";
import CreateTandaModal from "../../../../components/createTandaModal";
import { logOutUserStartAction } from "../../../../redux/actions/registerUserAction";
import { getTandaCreatedByUserStartAction } from "../../../../redux/actions/getTandaCreatedByUserActions";

export default function Perfil() {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  const userTandas = useSelector((state) => state.tandaCreatedByUser.userTanda);

  console.log(" auth user ", User);
  console.log("loading.................", loading);
  console.log("user Tandas.................", userTandas);
  const data = {};
  useEffect(() => {
    dispatch(getTandaCreatedByUserStartAction(User._id));
  }, []);
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
                <CreateTandaModal />
                <p>Tandas Creadas {userTandas.length}</p>
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
