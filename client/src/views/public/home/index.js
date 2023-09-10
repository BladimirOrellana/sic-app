import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import Loading from "../../../components/loading/lindex";
function Home() {
  const User = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          style={{
            minHeight: "100vh",
            textAlign: "center",
          }}
          xs={12}
          md={12}
        >
          <Typography variant="h1">SIC</Typography>
          <Typography variant="h3">Download the app</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Home;
