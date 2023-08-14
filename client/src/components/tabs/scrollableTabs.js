import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ScrollableTabs() {
  const currentUser = useSelector((state) => state);
  const [value, setValue] = React.useState(0);
  console.log("tab user", currentUser.user.currentUser);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Latino Tanda" />
        <Link to={"/"}>
          <Tab label="Home" />
        </Link>
        <Link to={"/contact"}>
          <Tab label="Contact" />
        </Link>
        <Link to={"/about"}>
          <Tab label="About" />
        </Link>
        <Link to={"/black-list"}>
          <Tab label="Black List" />
        </Link>

        {currentUser.user.currentUser ? (
          <div>
            {" "}
            <Link to={"/perfil"}>
              <Tab label="Perfil" />
            </Link>
          </div>
        ) : (
          <Link to={"/login"}>
            <Tab label="Login" />
          </Link>
        )}
      </Tabs>
    </Box>
  );
}
