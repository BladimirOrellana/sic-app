import React, { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import apiTanda from "../../api/tanda";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Loading from "../loading/lindex";
import { getTandaCreatedbyAction } from "../../redux/actions/createTandaAction";

export default function GetTandasCreatedBy() {
  dayjs.extend(relativeTime);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const loading = useSelector((state) => state.user.loading);
  const tandasData = useSelector((state) => state.tandas.tanda);
  const [tanda, setTanda] = useState([]);

  useEffect(() => {}, []);

  const tandas = tandasData.map((tanda) => {
    return (
      <Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Nombre de la tanda: {tanda.tandaName}
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Duracion: {tanda.numberOfWeeks} semanas
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Valor del numero: ${tanda.pricePerNumber}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Mienbros:{" "}
            {tanda.players.length === 0
              ? "Aun no tienes ningun miembro, comiensa a invitar a tus amigos y familiares!"
              : tanda.players.length}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained">Agregar miembro </Button>
        </CardActions>
        <CardActions>
          Tanda creada :{" "}
          {dayjs(tanda.createdAt).fromNow() === "a few seconds ago"
            ? "Just Now"
            : dayjs(tanda.createdAt).fromNow()}
        </CardActions>
      </Fragment>
    );
  });
  // // const tandas = "hi";
  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {tandasData.length === 0 ? (
            "No tandas"
          ) : (
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">
                {tandas.length === 0
                  ? "No has creado ninguna tanda aun! enpiesa Tu propia tanda con familiares y amigos Ya!"
                  : tandas}
              </Card>
            </Box>
          )}
        </div>
      )}
    </Fragment>
  );
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
}
