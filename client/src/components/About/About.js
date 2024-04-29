import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./About.css";
import hospitalImage1 from './1.jpg'; // Import the first image file
import hospitalImage2 from './2.jpg';
import hospitalImage3 from './3.jpg'; // Import the second image file

// components
import Button from "../Button/Button";

export default function About() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contac-us");
  };

  const handleClick = () => {
    navigate("/patient/dashboard/book-appointment");
  };

  return (
    <div class="about">
      <h1>Welcome to the</h1>
      <h1>Hospital Management System</h1>

      {/* First image */}
      {/* Second image */}

      <h3>Opening Hours</h3>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <td>Monday</td>
            <td>Tuesday</td>
            <td>Wednesday</td>
            <td>Thursday</td>
            <td>Friday</td>
            <td>Saturday</td>
            <td>Sunday</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Timings</th>
            <td>8:00 AM - 2:30 PM</td>
            <td>8:00 AM - 2:30 PM</td>
            <td>8:00 AM - 2:30 PM</td>
            <td>8:00 AM - 2:30 PM</td>
            <td>8:00 AM - 2:30 PM</td>
            <td>8:00 AM - 2:30 PM</td>
            <td>
              <strong>Closed</strong>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Our Doctors</h3>
      <div class="doctors-list d-flex flex-row justify-content-start text-center">
        <div class="doctor">
          <img src={hospitalImage1} alt="Hospital 1" class="hospital-image mb-2" />
          <h4>Dr. John Doe</h4>
          <p>Specialization: Cardiologist</p>
        </div>
        <div class="doctor">
          <img src={hospitalImage3} alt="Hospital 1" class="hospital-image mb-2" />
          <h4>Dr. Ram </h4>
          <p>Specialization: Cardiologist</p>
        </div>
        <div class="doctor">
          <img src={hospitalImage2} alt="Hospital 2" class="hospital-image mb-2" />
          <h4>Dr. Jane Smith</h4>
          <p>Specialization: Pediatrician</p>
        </div>
        <div class="doctor">
          <img src={hospitalImage3} alt="Hospital 2" class="hospital-image mb-2" />
          <h4>Dr. Praneeth</h4>
          <p>Specialization: Endocrinologist</p>
        </div>
      </div>
      {/* Add more doctors here as needed */}

      <Button text={"Book Appointment"} handleClick={handleClick} />
      <Button text={"About Us"} handleClick={handleContactClick} />
    </div>
  );
}
