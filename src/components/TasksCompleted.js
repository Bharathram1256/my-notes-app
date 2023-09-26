import React from 'react';
import PropTypes from 'prop-types';

function TasksCompleted({ tasks, onRemoveTask }) {
  return (
    <div>
      <h1 className="large-text">Tasks Completed</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => onRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

TasksCompleted.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveTask: PropTypes.func.isRequired,
};

export default TasksCompleted;
