import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Student Management System</h1>
      <div className="home-content">
        <p>Welcome to the Student Management System. This platform helps you manage student information efficiently.</p>
        <div className="features">
          <h2>Features</h2>
          <ul>
            <li>Student Registration</li>
            <li>Student Information Management</li>
            <li>Course Enrollment</li>
            <li>Performance Tracking</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
