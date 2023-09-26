import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Todos from './components/Todos';
import ImportantNotes from './components/ImportantNotes';
import TasksCompleted from './components/TasksCompleted';

import './components/Navbar.css';
import './components/Home.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [importantTasks, setImportantTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  // Function to mark a task as important
  const onMarkImportant = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].important = !updatedTasks[index].important;
    setTasks(updatedTasks);

    if (updatedTasks[index].important) {
      setImportantTasks([...importantTasks, updatedTasks[index]]);
    } else {
      const updatedImportantTasks = importantTasks.filter(
        (task) => task !== updatedTasks[index]
      );
      setImportantTasks(updatedImportantTasks);
    }
  };

  // Function to mark a task as completed
  const onMarkCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);

    setCompletedTasks([...completedTasks, updatedTasks[index]]);
  };

  // Function to remove a task
  const onRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    const removedTask = updatedTasks.splice(index, 1)[0];
    setTasks(updatedTasks);

    if (removedTask.important) {
      const updatedImportantTasks = importantTasks.filter(
        (task) => task !== removedTask
      );
      setImportantTasks(updatedImportantTasks);
    }
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home onAddTask={(newTask) => setTasks([newTask, ...tasks])} />}
            index={true}
          />
          <Route
            path="/todos"
            element={
              <Todos
                tasks={tasks}
                onMarkImportant={onMarkImportant}
                onMarkCompleted={onMarkCompleted}
                onRemoveTask={onRemoveTask}
              />
            }
          />
          <Route
            path="/important-notes"
            element={<ImportantNotes tasks={importantTasks} onMarkImportant={onMarkImportant} />}
          />
          <Route
            path="/tasks-completed"
            element={<TasksCompleted tasks={completedTasks} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
