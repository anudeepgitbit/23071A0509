import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const location = useLocation();
  
  // Function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Student Management System</Link>
      </div>
      <ul className="navbar-nav">
        <li className={`nav-item ${isActive('/')}`}>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className={`nav-item ${isActive('/about')}`}>
          <Link to="/about" className="nav-link">About</Link>
        </li>
      </ul>
      <div className="navbar-auth">
        <Link to="/login" className={`auth-link ${isActive('/login')}`}>Login</Link>
        <Link to="/register" className={`auth-link ${isActive('/register')}`}>Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
