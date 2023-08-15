import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import BlockIcon from "@mui/icons-material/Block";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function BottomAppBar() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Link to={"/"}>
            <BottomNavigationAction label="home" icon={<HomeIcon />} />
          </Link>
          <Link to={"/contact"}>
            <BottomNavigationAction
              label="contact"
              icon={<ContactMailIcon />}
            />
          </Link>
          <Link to={"/black-list"}>
            <BottomNavigationAction label="black List" icon={<BlockIcon />} />
          </Link>
          <Link to={"/perfil"}>
            <BottomNavigationAction
              label="black List"
              icon={<AccountCircleIcon />}
            />
          </Link>
          <Link to={"/menu"}>
            <BottomNavigationAction label="more" icon={<MoreVertIcon />} />
          </Link>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
