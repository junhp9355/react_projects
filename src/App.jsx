import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import Converter from "./components/Converter";
import Mybtn from "./components/Mybtn";
import TimeConverter from "./components/TimeConverter";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoTemplateList from "./components/TodoTemplateList";

function App() {
  const [counter, setCounter] = useState(0);
  const [amount, setAmount] = useState(0);
  const [active, setActive] = useState(true);
  const [searchWord, setSearchWord] = useState("");
  const [contents, setContents] = useState([]);
  const [todos, setTodos] = useState([]);
  const [content, setContent] = useState("");
  const nextID = useRef(1);
  const onInsert = (text) => {
    const todo = {
      id: nextID.current,
      text: text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextID.current++;
  };
  const onToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  const reset = () => {
    setAmount(0);
  };
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const changeActive = () => {
    reset();
    setActive(!active);
  };

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoTemplateList todos={todos} onToggle={onToggle} />
      </TodoTemplate>
      <hr />
      <Counter
        counter={counter}
        setCounter={setCounter}
        searchWord={searchWord}
        setSearchWord={setSearchWord}
      />
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
      <hr />
      <TimeConverter
        amount={amount}
        active={active}
        changeActive={changeActive}
        reset={reset}
        onChange={onChange}
      />
      <hr />
      <TodoList
        contents={contents}
        setContents={setContents}
        content={content}
        setContent={setContent}
      />
    </>
  );
}

export default App;
