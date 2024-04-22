// BookAppointment.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Style-sheets/BookAppointment.css';
import { doctors } from './fakeData/doctors';

function BookAppointment() {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleDoctorChange = (e) => {
    setSelectedDoctor(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform booking logic based on selected doctor and date
    console.log('Selected Doctor:', selectedDoctor);
    console.log('Selected Date:', selectedDate);
    // Reset form fields
    setSelectedDoctor('');
    setSelectedDate('');
  };

  return (
    <div className="BookAppointment">
      <header className="book-appointment-header">
        <h1>Book an Appointment</h1>
      </header>
      <main className="book-appointment-main">
        <section className="book-appointment-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Select Doctor:</label>
              <select value={selectedDoctor} onChange={handleDoctorChange} required>
                <option value="">-- Select a Doctor --</option>
                {doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name} - {doctor.specialty}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Select Date:</label>
              <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                required
              />
            </div>
            <button type="submit">Book Appointment</button>
          </form>
        </section>
        <section className="book-appointment-info">
          <h2>Appointment Booking Information</h2>
          <p>
            Please select a doctor from the dropdown menu and choose a preferred date for your appointment. The calendar shows the available time slots for the selected doctor on the chosen date.
          </p>
          <p>
            If you need to confirm your appointment or have any special requirements, please contact the doctor's office directly at the provided phone number.
          </p>
          <p>
            Remember to bring your Opal digital health wallet to your appointment for seamless information sharing with your healthcare provider.
          </p>
        </section>
        <section className="book-appointment-cta">
          <h2>Manage Your Appointments</h2>
          <p>
            You can view and manage your upcoming appointments in the <Link to="/dashboard">Dashboard</Link>.
          </p>
        </section>
      </main>
    </div>
  );
}

export default BookAppointment;