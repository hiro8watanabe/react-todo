import React from "react";

const sectionStyle = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px auto",
  borderRadius: "8px"
};

const inputStyle = {
  borderRadius: "16px",
  border: "none",
  padding: "6px 16px",
  outline: "none"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={sectionStyle}>
      <input
        disabled={disabled}
        style={inputStyle}
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
