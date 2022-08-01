import React, { useEffect } from "react";

function Counter({ counter, setCounter, setSearchWord, searchWord }) {
  const onClickfunc = () => {
    setCounter(counter + 1);
  };
  const onChanges = (e) => {
    setSearchWord(e.target.value);
  };

  useEffect(() => {
    console.log("API호출");
  }, []);
  useEffect(() => {
    console.log("change input");
  }, [searchWord]);
  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <div>
      <input
        placeholder="검색어"
        type="text"
        value={searchWord}
        onChange={onChanges}
      />
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
