import React, { useState } from "react";

function Converter({ counter }) {
  return (
    <div
      style={{
        backgroundColor: "red",
        color: "white",
        display: "inline-block",
        border: "10px solid red",
        margin: "20px 0px",
        fontWeight: "bold",
        fontSize: "2rem",
      }}
    >
      {counter % 2 === 0 ? "짝수" : "홀수"}
    </div>
  );
}
export default Converter;
