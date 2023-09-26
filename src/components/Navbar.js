import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>Todolist</span>
        <span>Mynotes</span>
      </div>
      <div className="navbar-search">
        <input className="search-input" type="text" placeholder="Search..." />
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todos">Todo's</Link>
        </li>
        <li>
          <Link to="/important-notes">Important Notes</Link>
        </li>
        <li>
          <Link to="/tasks-completed">Tasks Completed</Link>
        </li>
      </ul>
    </nav>
  );
}

function handleSearch() {
  // Implement search functionality here
}

export default Navbar;
