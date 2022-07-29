import React from "react";

function Counter({ counter, setCounter }) {
  const onClickfunc = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "3rem",
          textDecorationLine: "underline",
        }}
      >
        {counter}번 클릭했습니다
      </div>
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          fontSize: "2rem",
          margin: "20px 0px",
        }}
        onClick={onClickfunc}
      >
        Click me
      </button>
    </div>
  );
}
export default Counter;
