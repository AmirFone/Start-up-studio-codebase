// UpcomingAppointments.js
import React from 'react';
import './Style-sheets/UpcomingAppointments.css';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaNotesMedical } from 'react-icons/fa';
import { appointments } from './fakeData/appointments';
import { Link } from 'react-router-dom';
function UpcomingAppointments() {
  // const appointments = appointments

  return (
    <section className="upcoming-appointments">
      <h2>Upcoming Appointments</h2>
      <div className="appointments-container">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="appointment-card">
            <div className="appointment-header">
              <h3>{appointment.doctor}</h3>
              <p>{appointment.specialty}</p>
            </div>
            <div className="appointment-details">
              <div className="appointment-info">
                <FaCalendarAlt className="icon" />
                <p>{appointment.date}</p>
              </div>
              <div className="appointment-info">
                <FaClock className="icon" />
                <p>{appointment.time}</p>
              </div>
              <div className="appointment-info">
                <FaMapMarkerAlt className="icon" />
                <p>{appointment.location}</p>
              </div>
              <div className="appointment-info">
                <FaNotesMedical className="icon" />
                <p>{appointment.notes}</p>
              </div>
            </div>
            <div className="appointment-actions">
              <button className="reschedule-button">Reschedule</button>
              <button className="cancel-button">Cancel</button>
            </div>
          </div>
        ))}
      </div>
      <div className="add-appointment">
        <h3>Schedule a New Appointment</h3>
        <Link to="/book-appointment">
          <button>Book Appointment</button>
        </Link>
      </div>
    </section>
  );
}

export default UpcomingAppointments;