import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, toggleComplete } from '../redux/tasksSlice';
import Sidebar from '../components/Sidebar';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (task) => {
    dispatch(addTask({ ...task, id: Date.now(), completed: false }));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleTask = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <TaskForm onSubmit={handleAddTask} />
        <TaskList tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleTask} />
      </div>
    </div>
  );
};

export default Dashboard;
