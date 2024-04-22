// DoctorNotes.js
import React, { useState } from 'react';
import './Style-sheets/DoctorNotes.css';
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
    {
      id: 3,
      date: '2023-03-20',
      doctor: 'Dr. Michael Johnson',
      specialty: 'Endocrinologist',
      hospital: 'Evergreen Medical Center',
      notes: 'Patient diagnosed with type 2 diabetes. Prescribed metformin and discussed lifestyle modifications.',
      recommendations: [
        'Follow a low-carb, high-fiber diet',
        'Engage in regular physical activity, at least 150 minutes per week',
        'Monitor blood glucose levels regularly',
        'Schedule a follow-up appointment in 3 months',
      ],
    },
    {
      id: 4,
      date: '2023-02-25',
      doctor: 'Dr. Sarah Wilson',
      specialty: 'Orthopedist',
      hospital: 'Pinnacle Orthopedic Clinic',
      notes: 'Patient presented with knee pain and swelling. MRI revealed a torn meniscus. Recommended arthroscopic surgery.',
      recommendations: [
        'Schedule arthroscopic knee surgery',
        'Use crutches and avoid weight-bearing activities until cleared',
        'Attend physical therapy sessions post-surgery for rehabilitation',
      ],
    },
    {
      id: 5,
      date: '2023-01-10',
      doctor: 'Dr. David Lee',
      specialty: 'Gastroenterologist',
      hospital: 'Coastal Digestive Health Center',
      notes: 'Patient reported symptoms of acid reflux and heartburn. Prescribed proton pump inhibitor and recommended dietary changes.',
      recommendations: [
        'Avoid trigger foods (e.g., spicy, fried, citrus foods)',
        'Lose weight if overweight or obese',
        'Avoid eating within 3 hours of bedtime',
        'Schedule a follow-up appointment in 6 weeks',
      ],
    },
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