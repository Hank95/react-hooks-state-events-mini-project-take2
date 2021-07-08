import React from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

function TaskList({ tasks, handleDelete }) {
  return (
    <div className="tasks">
      {tasks.map((item) => {
        return <Task key={uuidv4()} todo={item} handleDelete={handleDelete} />;
      })}
    </div>
  );
}

export default TaskList;
