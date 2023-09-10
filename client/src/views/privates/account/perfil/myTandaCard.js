import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
export default function MyTandaCard() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  dayjs.extend(relativeTime);
  const dispatch = useDispatch();
  const User = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  const userTandas = useSelector((state) => state.tandaCreatedByUser.userTanda);

  const myTandas = userTandas.map((tanda) => {
    const id = tanda._id;
    return (
      <Grid xs={12} md={3} key={tanda._id}>
        {" "}
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Tanda: {tanda.tandaName}
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Duracion: {tanda.numberOfWeeks} semanas.
            </Typography>
            <Typography variant="body2">
              Valor del Numero: {tanda.pricePerNumber}
            </Typography>
            <Typography variant="body2">
              numeros disponibles: {tanda.numberOfWeeks - 1}
            </Typography>
          </CardContent>
          <CardActions>
            <Button>
              {" "}
              <Link to={"/perfil/my-tanda/" + id}>ver </Link>
            </Button>

            {dayjs(tanda.createdAt).fromNow() === "a few seconds ago"
              ? "Just Now"
              : dayjs(tanda.createdAt).fromNow()}
          </CardActions>
        </Card>
      </Grid>
    );
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {myTandas}
      </Grid>
    </Box>
  );
}
