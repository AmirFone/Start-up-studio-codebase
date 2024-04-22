import React from 'react';
import './Style-sheets/HealthTimeline.css';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function HealthTimeline() {
  const healthTimelineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Health Score',
        data: [80, 85, 90, 87, 92, 95, 98, 100, 105, 110],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  const healthTimelineOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <section className="health-timeline">
      <h2>Health Timeline</h2>
      <div className="chart-container">
        <Line data={healthTimelineData} options={healthTimelineOptions} />
      </div>
    </section>
  );
}

export default HealthTimeline;