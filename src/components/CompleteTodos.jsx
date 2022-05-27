import React from "react";

const completeArea = {
  backgroundColor: "#ffffe0",
  width: "400px",
  minHeight: " 200px",
  padding: "8px",
  margin: " 8px auto",
  borderRadius: "8px"
};

export const CompleteTodos = (props) => {
  const { todos, onClickBack, onClickCompleteDelete } = props;
  return (
    <div style={completeArea}>
      <p className="title">完了したTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="flex-box">
              <p>{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
              <button onClick={() => onClickCompleteDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
