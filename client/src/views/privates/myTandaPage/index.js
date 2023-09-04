import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
export default function MyTandaPage() {
  const [tanda, setTanda] = useState([]);

  const queryParameters = new URLSearchParams(window.location.search);
  const name = queryParameters.get("id");
  console.log("param================ ", queryParameters);
  useEffect(() => {}, []);
  return (
    <div>
      <h1>My Tanda 1{name}</h1>
    </div>
  );
}
