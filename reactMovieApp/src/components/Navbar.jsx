import React from 'react';
import './Navbar.css'; // Ensure you create this CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Movie Showcase</h1>
      <ul className="nav-links">
        <li><a href="#movies">Movies</a></li>
        <li><a href="#series">Series</a></li>
        <li><a href="#documentary">Documentary</a></li>
        <li><a href="#classics">Classics</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;