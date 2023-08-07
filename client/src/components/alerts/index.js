import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Alerts() {
  const message = useSelector(
    (state) =>
      (state = {
        messages: state,
      })
  );

  return (
    <div>
      {message.messages.messages === null ? null : (
        <div>
          <p
            style={{ color: "black", backgroundColor: "red", margin: "0 auto" }}
          >
            {message.messages.messages.message}
          </p>
        </div>
      )}
    </div>
  );
}
