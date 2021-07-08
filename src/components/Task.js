import React from "react";

function Task({ todo, handleDelete }) {
  return (
    <div className="task">
      <div className="label">{todo.category}</div>
      <div className="text">{todo.text}</div>
      <button className="delete" onClick={() => handleDelete(todo.text)}>
        X
      </button>
    </div>
  );
}

export default Task;
