import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import Avatar from './images/avatar.jpg';
import DoctorOne from './images/doctor_one.jpg';
import DoctorTwo from './images/doctor_two.jpg';
import { Line } from 'react-chartjs-2';
import WalletCard from './images/wallet_card.png';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Dashboard() {
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
    <div className="Dashboard">
      <div className="dashboard-container">
        <aside className="sidebar">
          <ul>
            <li><Link to="/dashboard" className="active">Dashboard</Link></li>
            <li><Link to="/health-wallet">Health Wallet</Link></li>
            <li><Link to="/medical-records">Medical Records</Link></li>
            <li><Link to="/prescriptions">Prescriptions</Link></li>
            <li><Link to="/recommendations">Recommendations</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/logout">Log out</Link></li>
          </ul>
        </aside>
        <main className="dashboard-content">
        <section className="search-health-wallet">
            <h2>Search Health Data</h2>
            <input type="text" placeholder="Search..." />
          </section>
        <section className="health-wallet">
            <h2>Health Wallet</h2>
            <div className="wallet-cards">
              {/* ... (keep the existing wallet cards code) */}
            </div>
            <div className="wallet-card-container">
              <img src={WalletCard} alt="Wallet Card" className="wallet-card-image" />
              <button className="wallet-card-button">Tap for Patient Info</button>
            </div>
          </section>
          <div className="user-profile">
            <img src={Avatar} alt="User Avatar" className="user-avatar" />
            <div className="user-info">
              <h3>Amir Hossain</h3>
              <p>30 years old</p>
            </div>
          </div>
          <section className="health-wallet">
            <h2>Health Wallet</h2>
            <div className="wallet-cards">
              <div className="wallet-card">
                <h3>88/120</h3>
                <p>Health Score</p>
              </div>
              <div className="wallet-card">
                <h3>34+</h3>
                <p>Insurance Claims</p>
              </div>
              <div className="wallet-card">
                <h3>15+</h3>
                <p>Medical Visits</p>
              </div>
            </div>
          </section>
          <section className="medical-records">
            <h2>Medical Records</h2>
            <ul>
              <li><Link to="/test-reports">View Full Test Reports</Link></li>
              <li><Link to="/doctor-notes">Doctor Notes</Link></li>
              <li><Link to="/scans-and-images">Scans And Images</Link></li>
            </ul>
          </section>
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
          <section className="upcoming-appointments">
            <h2>Upcoming Appointments</h2>
            <ul>
              <li>
                <div className="appointment-info">
                  <h4>Dr. John Doe - Cardiologist</h4>
                  <p>Date: 12/06/2023</p>
                  <p>Location: XYZ Hospital</p>
                </div>
              </li>
              <li>
                <div className="appointment-info">
                  <h4>Dr. Jane Smith - Dermatologist</h4>
                  <p>Date: 15/07/2023</p>
                  <p>Location: ABC Clinic</p>
                </div>
              </li>
            </ul>
          </section>
          <section className="health-timeline">
            <h2>Health Timeline</h2>
            <div className="chart-container">
              <Line data={healthTimelineData} options={healthTimelineOptions} />
            </div>
          </section>
          <section className="vital-signs">
            <h2>Vital Signs</h2>
            <div className="chart-container">
              <Line data={vitalSignsData} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;