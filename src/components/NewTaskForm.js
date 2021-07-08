import React, { useState } from "react";

function NewTaskForm({ categories, handleSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: "Code",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onTaskFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  console.log(formData);
  const minusAll = [...categories];
  minusAll.shift();
  console.log(minusAll);
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {minusAll.map((item) => {
            return <option key={item}>{item}</option>;
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
