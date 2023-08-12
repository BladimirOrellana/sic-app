import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import GetAllUsers from "./getAllUsers";
import user from "../../../../api/user";

function Dashboard() {
  const currentUser = useSelector(
    (state) => (state = { user: state.currentuser })
  );
  console.log(
    "dashboard CURRENT USER",
    currentUser.user
      ? currentUser.user.currentuser.currentUser.uid
      : currentUser.user
  );
  return (
    <div>
      <h1>DASHBORD</h1>
      <div>
        <h4>All Users</h4>
      </div>
    </div>
  );
}
export default Dashboard;
