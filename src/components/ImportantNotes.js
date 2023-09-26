import React, { useState, useEffect, useCallback } from 'react';

const ImportantNotes = ({ tasks }) => {
  const [importantTasks, setImportantTasks] = useState([]);

  // Function to filter and set important tasks
  const filterImportantTasks = useCallback(() => {
    const filteredTasks = tasks.filter(task => task.important);
    setImportantTasks(filteredTasks);
  }, [tasks]);

  // Call filterImportantTasks when the component mounts or when tasks change
  useEffect(() => {
    filterImportantTasks();
  }, [tasks, filterImportantTasks]);

  return (
    <div className="important-notes">
      <h2>Important Notes</h2>
      {importantTasks.length > 0 ? (
        <ul>
          {importantTasks.map(task => (
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.task}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No important tasks to display.</p>
      )}
    </div>
  );
};

export default ImportantNotes;
