import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("사용자");
  const [articles, setArticles] = useState([
    { subject: "글 1번", content: "내용 1번" },
    { subject: "글 2번", content: "내용 2번" },
    { subject: "글 3번", content: "내용 3번" },
  ]);

  const onClickfunc = () => {
    setCounter(counter + 1);
  };

  const changeName = () => {
    setName("박준형");
  };

  const addArticle = () => {
    setArticles(articles.concat({ subject: "글 4번", content: "내용 4번" }));
  };

  return (
    <div>
      <div>환영합니다. {name}님</div>
      <div>{counter}번 클릭했습니다</div>
      <button onClick={changeName}>이름변경</button>
      <button onClick={onClickfunc}>Click me</button>

      <ul>
        {articles.map((article, index) => {
          return (
            <li key={index}>
              <div>제목: {article.subject}</div>
              <div>내용: {article.content}</div>
            </li>
          );
        })}
      </ul>
      <button onClick={addArticle}>게시물 추가</button>
    </div>
  );
}

export default App;
