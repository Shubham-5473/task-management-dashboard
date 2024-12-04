import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [task, setTask] = useState({ title: '', description: '', dueDate: '' });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask({ title: '', description: '', dueDate: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" value={task.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={task.description} onChange={handleChange} required />
      <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
