import React, { useState } from 'react';
import './Home.css'; // Import the CSS file

function Home({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [task, setTask] = useState('');
  const [popupMessage, setPopupMessage] = useState('');

  const handleAddTask = () => {
    if (!title || !task) {
      setPopupMessage('Please add both title and task');
    } else {
      const newTask = {
        title,
        task,
        important: false,
      };

      onAddTask(newTask);
      setPopupMessage('New Task Is Added To My Notes'); // Updated popup message

      // Reset the input fields
      setTitle('');
      setTask('');

      // Clear the popup message after 4 seconds
      setTimeout(() => {
        setPopupMessage('');
      }, 2000); // 2 seconds
    }
  };

  const handleMarkImportant = () => {
    // Mark the task as important and display a popup message
    setPopupMessage('This Task Is Marked as Important'); // Updated popup message

    // Clear the popup message after 4 seconds
    setTimeout(() => {
      setPopupMessage('');
    }, 2000); // 2 seconds
  };

  return (
    <div className="home-container">
      <h1 className="large-text">Home</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title-input"
        />
        <input
          type="text"
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="task-input"
        />
        <button onClick={handleAddTask} className="add-button">
          Add Task
        </button>
        <button onClick={handleMarkImportant} className="star-button">
          {/* Star emoji character */}
          &#9733;
        </button>
      </div>
      {popupMessage && <div className="popup">{popupMessage}</div>}
    </div>
  );
}

export default Home;
