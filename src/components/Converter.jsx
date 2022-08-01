import React from "react";

function Converter({ counter }) {
  return (
    <div
      style={{
        backgroundColor: "green",
        color: "white",
        display: "inline-block",
        border: "5px solid green",
        margin: "10px 0px",
        fontWeight: "bold",
        fontSize: "1.5rem",
      }}
    >
      {counter % 2 === 0 ? "짝수" : "홀수"}
    </div>
  );
}
export default Converter;
