import React from "react";

const Mybtn = ({
  text,
  fontSize,
  borderRadius,
  isChecked,
  backgroundColor,
}) => {
  return (
    <div style={{ display: "inline-block" }}>
      <button
        style={{
          backgroundColor: `${backgroundColor}`,
          color: "white",
          padding: "10px 20px",
          border: 0,
          borderRadius: `${borderRadius}`,
          margin: "10px",
          fontSize: `${fontSize}`,
          textDecoration: isChecked ? "line-through" : "none",
          fontWeight: "bold",
        }}
        onClick={() => {
          alert(`${text} 을 클릭하셨습니다.`);
        }}
      >
        {text}
      </button>
    </div>
  );
};
export default Mybtn;
