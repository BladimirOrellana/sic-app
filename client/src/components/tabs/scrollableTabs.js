import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ScrollableTabs() {
  const User = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Candelaria" />
        <Link to={"/"}>
          <Tab label="hogar" />
        </Link>
        <Link to={"/contact"}>
          <Tab label="Contactar" />
        </Link>
        <Link to={"/about"}>
          <Tab label="historia" />
        </Link>

        {User ? (
          <div>
            {" "}
            <Link to={"/perfil"}>
              <Tab label="perfil" />
            </Link>
          </div>
        ) : (
          <Link to={"/login"}>
            <Tab label="ingresar" />
          </Link>
        )}
      </Tabs>
    </Box>
  );
}
