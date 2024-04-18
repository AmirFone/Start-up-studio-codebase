import React from 'react';
import './PrescriptionHistory.css';
import { prescriptionHistory } from './fakeData/prescriptionHistory';

function PrescriptionHistory() {
  return (
    <div className="prescription-history">
      <h2>Prescription History</h2>
      <table>
        <thead>
          <tr>
            <th>Medication</th>
            <th>Dosage</th>
            <th>Frequency</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {prescriptionHistory.map((prescription) => (
            <tr key={prescription.id}>
              <td>{prescription.medication}</td>
              <td>{prescription.dosage}</td>
              <td>{prescription.frequency}</td>
              <td>{prescription.startDate}</td>
              <td>{prescription.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PrescriptionHistory;