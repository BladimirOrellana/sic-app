import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import Loading from "../../../../components/loading/lindex";
import { Button } from "@mui/material";
import { auth } from "../../../../firebase/firebase";
import CreateTandaModal from "../../../../components/createTandaModal";
import { logOutUserStartAction } from "../../../../redux/actions/registerUserAction";
import { getTandaCreatedByUserStartAction } from "../../../../redux/actions/getTandaCreatedByUserActions";
import MyTandaCard from "./myTandaCard";
import userAvatar from "./../../../../assets/img/avatar.PNG";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
export default function Perfil() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
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
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid xs={12} md={12}>
                  <Item>
                    {" "}
                    <h1>Perfil</h1>
                    <Avatar
                      alt="Remy Sharp"
                      src={userAvatar}
                      sx={{ width: 100, height: 100 }}
                    />
                    {User.username}{" "}
                  </Item>
                </Grid>
                <Grid xs={4} md={4}>
                  {" "}
                  <CreateTandaModal />{" "}
                </Grid>
                <Grid xs={4} md={4}>
                  <Button onClick={() => dispatch(logOutUserStartAction(auth))}>
                    Logout
                  </Button>
                </Grid>
              </Grid>
              {userTandas === 0 ? <h1>Mo has creado</h1> : <MyTandaCard />}
            </Box>
          ) : (
            <Navigate replace to={"/login"} />
          )}
        </div>
      )}
    </div>
  );
}
