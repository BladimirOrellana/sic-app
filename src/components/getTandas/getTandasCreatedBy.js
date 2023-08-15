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

  const tanda = useSelector((state) => state.tandas.tandaCreatedBy);
  console.log("user tandas==========> ", tanda);

  // // const tandas = "hi";

  return (
    <div>
      <h1>hi</h1>
      <Button onClick={() => dispatch(getTandaCreatedbyAction(user._id))}>
        Get tandas
      </Button>
    </div>
  );
}
