import React, { useState } from "react";
import Counter from "./components/Counter";
import Converter from "./components/Converter";
import Mybtn from "./components/Mybtn";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Counter counter={counter} setCounter={setCounter} />
      <Converter counter={counter} />
      <hr />
      <Mybtn
        text={"1번 버튼"}
        fontSize={"10px"}
        borderRadius={"0px"}
        isChecked={true}
        backgroundColor={"orange"}
      />
      <Mybtn
        text={"2번 버튼"}
        fontSize={"12px"}
        borderRadius={"10px"}
        isChecked={false}
        backgroundColor={"green"}
      />
      <Mybtn
        text={"3번 버튼"}
        fontSize={"14px"}
        borderRadius={"20px"}
        isChecked={true}
        backgroundColor={"blue"}
      />
      <Mybtn
        text={"4번 버튼"}
        fontSize={"16px"}
        borderRadius={"30px"}
        isChecked={false}
        backgroundColor={"black"}
      />
      <Mybtn
        text={"5번 버튼"}
        fontSize={"18px"}
        borderRadius={"40px"}
        isChecked={true}
        backgroundColor={"red"}
      />
      <Mybtn
        text={"6번 버튼"}
        fontSize={"20px"}
        borderRadius={"50px"}
        isChecked={false}
        backgroundColor={"pink"}
      />
    </>
  );
}

export default App;
