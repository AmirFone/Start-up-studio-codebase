import React from 'react';
import './Style-sheets/VitalSigns.css';
import { Line } from 'react-chartjs-2';

function VitalSigns() {
  const vitalSignsData = {
    labels: ['Blood Pressure', 'Heart Rate', 'Oxygen Saturation', 'Temperature'],
    datasets: [
      {
        label: 'Vital Signs',
        data: [120, 80, 98, 37],
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="vital-signs">
      <h2>Vital Signs</h2>
      <div className="chart-container">
        <Line data={vitalSignsData} />
      </div>
    </section>
  );
}

export default VitalSigns;