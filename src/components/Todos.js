import React from 'react';

function Todos({ tasks, onMarkImportant, onMarkCompleted, onRemoveTask }) {
  // Filter tasks to only include incomplete tasks (where completed is false)
  const incompleteTasks = tasks.filter((task) => !task.completed);

  return (
    <div>
      <h1 className="large-text">Todos</h1>
      <ul>
        {incompleteTasks.map((task, index) => (
          <li key={index}>
            <div>
              <h2>{task.title}</h2>
              <p>{task.task}</p>
            </div>
            <div>
              <button onClick={() => onMarkImportant(index)}>
                {task.important ? 'Important' : 'Not Important'}
              </button>
              <button onClick={() => onMarkCompleted(index)}>
                {task.completed ? 'Completed' : 'Mark as Completed'}
              </button>
              <button onClick={() => onRemoveTask(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;


