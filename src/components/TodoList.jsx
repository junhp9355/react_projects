import React from "react";

const TodoList = ({ content, contents, setContent, setContents }) => {
  const onChange = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (content === "") {
      alert("1글자 이상 입력해주세요");
      return;
    }

    setContents((currentArray) => [content, ...currentArray]);
    setContent("");
  };

  return (
    <div>
      <h1>할 일</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={content}
          placeholder="할 일을 적어주세요"
        />
        <button>등록</button>
      </form>

      <button
        onClick={() => {
          console.log(contents);
        }}
      >
        Check
      </button>
      <hr />
      <ul>
        {contents.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
