import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "../../../../redux/actions/userActions";

export default function GetAllUsers() {
  const data = useSelector((state) => state.getAllUsers.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsersAction());
  }, []);
  return (
    <div>
      <h1>All Users {data ? data.length : "NO USERS YET"}</h1>
      <div>
        {data ? (
          data.map((user) => {
            return (
              <div key={user._id}>
                <p>{user.username}</p>
              </div>
            );
          })
        ) : (
          <p>NOP</p>
        )}
      </div>
    </div>
  );
}
