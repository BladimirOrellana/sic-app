import React from "react";
import { CircularProgress } from "@mui/material";
export default function Loading() {
  return (
    <div style={style}>
      <div>
        <CircularProgress />
      </div>
    </div>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  marginTop: "-50px",
  marginLeft: "-50px",
  width: "100px",
  height: "100px",
};
