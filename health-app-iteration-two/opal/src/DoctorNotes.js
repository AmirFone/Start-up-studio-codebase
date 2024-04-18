// DoctorNotes.js
import React, { useState } from 'react';
import './DoctorNotes.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function DoctorNotes() {
  const [expandedNoteId, setExpandedNoteId] = useState(null);

  const doctorNotes = [
    {
      id: 1,
      date: '2023-05-10',
      doctor: 'Dr. John Doe',
      specialty: 'Cardiologist',
      hospital: 'ABC Medical Center',
      notes: 'Patient presented with mild chest discomfort. ECG and stress test results normal. Advised regular exercise and healthy diet.',
      recommendations: [
        'Maintain a balanced diet low in saturated fats',
        'Engage in moderate-intensity aerobic exercise for at least 30 minutes, 5 days a week',
        'Schedule a follow-up appointment in 6 months',
      ],
    },
    {
      id: 2,
      date: '2023-04-15',
      doctor: 'Dr. Jane Smith',
      specialty: 'Dermatologist',
      hospital: 'XYZ Dermatology Clinic',
      notes: 'Annual skin check-up. No suspicious lesions found. Reminded patient about sun protection measures.',
      recommendations: [
        'Apply broad-spectrum sunscreen with SPF 30 or higher daily',
        'Wear protective clothing and seek shade during peak sun hours',
        'Perform monthly self-examinations of the skin',
      ],
    },
    // ... more doctor notes
  ];

  const handleToggleNote = (noteId) => {
    if (expandedNoteId === noteId) {
      setExpandedNoteId(null);
    } else {
      setExpandedNoteId(noteId);
    }
  };

  return (
    <div className="doctor-notes">
      <h2>Doctor Notes</h2>
      {doctorNotes.map((note) => (
        <div key={note.id} className="note-card">
          <div className="note-header" onClick={() => handleToggleNote(note.id)}>
            <div className="doctor-info">
              <h3>{note.doctor}</h3>
              <p>{note.specialty}</p>
            </div>
            <div className="note-meta">
              <p>{note.date}</p>
              <p>{note.hospital}</p>
            </div>
            <div className="expand-icon">
              {expandedNoteId === note.id ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {expandedNoteId === note.id && (
            <div className="note-content">
              <p>{note.notes}</p>
              {note.recommendations.length > 0 && (
                <div className="recommendations">
                  <h4>Recommendations:</h4>
                  <ul>
                    {note.recommendations.map((recommendation, index) => (
                      <li key={index}>{recommendation}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default DoctorNotes;