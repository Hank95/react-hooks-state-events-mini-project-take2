import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [active, setActive] = useState("All");

  const handleDelete = (text) => {
    const newTaskArr = tasks.filter((item) => item.text !== text);
    setTasks(newTaskArr);
  };

  const handleClick = (e) => {
    setActive(e.target.textContent);
  };
  const newTaskArr = tasks.filter((item) => {
    if (active === "All") {
      return true;
    } else {
      return item.category === active;
    }
  });

  const onTaskFormSubmit = (formData) => {
    const newTask = [...tasks, formData];
    setTasks(newTask);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        handleClick={handleClick}
        active={active}
      />
      <NewTaskForm categories={CATEGORIES} handleSubmit={onTaskFormSubmit} />
      <TaskList tasks={newTaskArr} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
