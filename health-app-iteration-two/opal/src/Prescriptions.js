import React from 'react';
import './Prescriptions.css';

function Prescriptions() {
  return (
    <section className="prescriptions">
      <h2>Prescriptions</h2>
      <div className="prescription-card">
        <ul>
          <li>Medication A - 10mg daily</li>
          <li>Medication B - 5mg twice daily</li>
          <li>Medication C - As needed</li>
        </ul>
      </div>
    </section>
  );
}

export default Prescriptions;