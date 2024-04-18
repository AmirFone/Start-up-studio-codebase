// DoctorNotes.js
import React from 'react';
import './DoctorNotes.css';

function DoctorNotes() {
  const doctorNotes = [
    {
      id: 1,
      date: '2023-05-10',
      doctor: 'Dr. John Doe',
      specialty: 'Cardiologist',
      notes: 'Patient presented with mild chest discomfort. ECG and stress test results normal. Advised regular exercise and healthy diet.',
    },
    {
      id: 2,
      date: '2023-04-15',
      doctor: 'Dr. Jane Smith',
      specialty: 'Dermatologist',
      notes: 'Annual skin check-up. No suspicious lesions found. Reminded patient about sun protection measures.',
    },
    // ... more doctor notes
  ];

  return (
    <div className="doctor-notes">
      <h2>Doctor Notes</h2>
      {doctorNotes.map((note) => (
        <div key={note.id} className="note-card">
          <div className="note-header">
            <h3>{note.doctor}</h3>
            <p>{note.specialty}</p>
            <p>{note.date}</p>
          </div>
          <div className="note-content">
            <p>{note.notes}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DoctorNotes;