import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
          Welcome to our Hospital Management System! We are dedicated to
          providing efficient and high-quality healthcare services to our
          patients. Our system is designed to streamline hospital operations,
          enhance patient care, and improve overall efficiency.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to ensure the well-being of our patients by providing
          comprehensive healthcare services in a compassionate and
          patient-centered environment. We strive to continuously improve our
          processes and technology to meet the evolving needs of our patients
          and staff.
        </p>
        <h2>Our Vision</h2>
        <p>
          Our vision is to become a leading healthcare provider known for
          excellence in patient care, innovation, and professionalism. We aim
          to set the standard for healthcare delivery by embracing the latest
          advancements in medical technology and providing personalized care to
          every patient.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li>Compassion: We treat every patient with empathy and kindness.</li>
          <li>Excellence: We strive for excellence in everything we do.</li>
          <li>Integrity: We uphold the highest ethical standards.</li>
          <li>Collaboration: We work together to achieve common goals.</li>
          <li>Innovation: We embrace innovation to improve patient care.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
