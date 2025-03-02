// src/components/NavBar.jsx

import React from 'react';
import './css/NavBar.css'; 

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="#home" className="navbar-link">Home</a></li>
        <li><a href="#about" className="navbar-link">About</a></li>
        <li><a href="#services" className="navbar-link">Services</a></li>
        <li><a href="#contact" className="navbar-link">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
