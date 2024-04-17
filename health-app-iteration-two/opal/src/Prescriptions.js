// Prescriptions.js
import React, { useState } from 'react';
import './Prescriptions.css';
import { FaPlusCircle, FaMinusCircle, FaHistory } from 'react-icons/fa';

function Prescriptions() {
  const [prescriptions, setPrescriptions] = useState([
    { id: 1, name: 'Medication A', dosage: '10mg', frequency: 'Daily' },
    { id: 2, name: 'Medication B', dosage: '5mg', frequency: 'Twice Daily' },
    { id: 3, name: 'Medication C', dosage: 'As needed', frequency: 'As needed' },
  ]);

  const handleAddPrescription = () => {
    const newPrescription = {
      id: prescriptions.length + 1,
      name: 'New Medication',
      dosage: '',
      frequency: '',
    };
    setPrescriptions([...prescriptions, newPrescription]);
  };

  const handleRemovePrescription = (id) => {
    const updatedPrescriptions = prescriptions.filter((prescription) => prescription.id !== id);
    setPrescriptions(updatedPrescriptions);
  };

  return (
    <section className="prescriptions">
      <h2>Prescriptions</h2>
      <div className="prescription-card">
        <ul className="prescription-list">
          {prescriptions.map((prescription) => (
            <li key={prescription.id}>
              <div className="prescription-info">
                <h3>{prescription.name}</h3>
                <p>Dosage: {prescription.dosage}</p>
                <p>Frequency: {prescription.frequency}</p>
              </div>
              <button
                className="remove-prescription"
                onClick={() => handleRemovePrescription(prescription.id)}
              >
                <FaMinusCircle />
              </button>
            </li>
          ))}
        </ul>
        <button className="add-prescription" onClick={handleAddPrescription}>
          <FaPlusCircle /> Add Prescription
        </button>
        <div className="prescription-history">
          <h3>
            <FaHistory /> Prescription History
          </h3>
          <p>View your past prescriptions and medication history.</p>
          <button>View History</button>
        </div>
        <div className="prescription-refill">
          <h3>Refill Prescriptions</h3>
          <p>Request refills for your current prescriptions.</p>
          <button>Request Refill</button>
        </div>
      </div>
    </section>
  );
}

export default Prescriptions;