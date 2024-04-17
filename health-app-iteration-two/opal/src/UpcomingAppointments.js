import React from 'react';
import './UpcomingAppointments.css';

function UpcomingAppointments() {
  return (
    <section className="upcoming-appointments">
      <h2>Upcoming Appointments</h2>
      <ul>
        <li>
          <div className="appointment-info">
            <h4>Dr. John Doe - Cardiologist</h4>
            <p>Date: 12/06/2023</p>
            <p>Location: XYZ Hospital</p>
          </div>
        </li>
        <li>
          <div className="appointment-info">
            <h4>Dr. Jane Smith - Dermatologist</h4>
            <p>Date: 15/07/2023</p>
            <p>Location: ABC Clinic</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default UpcomingAppointments;