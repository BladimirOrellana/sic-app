import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import GetAllUsers from "./getAllUsers";
import user from "../../../../api/user";

function Dashboard() {
  const currentUser = useSelector(
    (state) => (state = { user: state.currentuser })
  );

  return (
    <div>
      <h1>DASHBORD</h1>
      <div></div>
    </div>
  );
}
export default Dashboard;
