import React from 'react';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <button onClick={() => onToggle(task.id)}>{task.completed ? 'Mark Incomplete' : 'Mark Complete'}</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
