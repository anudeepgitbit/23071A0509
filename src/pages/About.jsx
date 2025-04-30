import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        <p>
          The Student Management System is a comprehensive platform designed to streamline the management of student information, 
          course enrollments, and academic performance tracking.
        </p>
        
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide educational institutions with a user-friendly, efficient, and secure system to manage student data, 
          enabling administrators, teachers, and students to focus on what matters most: education.
        </p>
        
        <h2>Our Team</h2>
        <p>
          Our team consists of experienced educators, developers, and designers who understand the challenges faced by educational 
          institutions in managing student information. We are committed to continuously improving our system based on user feedback.
        </p>
        
        <h2>Our Values</h2>
        <ul>
          <li><strong>Simplicity:</strong> We believe in keeping things simple and intuitive.</li>
          <li><strong>Security:</strong> We prioritize the security and privacy of student data.</li>
          <li><strong>Efficiency:</strong> We aim to save time and resources for educational institutions.</li>
          <li><strong>Innovation:</strong> We continuously innovate to meet the evolving needs of our users.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
