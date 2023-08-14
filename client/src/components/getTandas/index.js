import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import apiTanda from "./../../api/tanda";

export default function Tandas() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state);
  const [tanda, setTanda] = useState(null);
  console.log("current user perfil", currentUser.user.currentUser);
  useEffect(() => {
    apiTanda
      .getAll({ createdBy: currentUser.user.currentUser._uid })
      .then((result) => {
        console.log("tanda result  get", result);
        setTanda(result.data ? result.data.length : 0);
      })
      .catch((err) => {
        console.log("error tanda get  ", err);
      });
  }, []);
  return <div>{tanda === 0 ? "No tandas" : tanda}</div>;
}
