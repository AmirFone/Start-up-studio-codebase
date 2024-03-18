import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import Avatar from './images/avatar.jpg';
import DoctorOne from './images/doctor_one.jpg';
import DoctorTwo from './images/doctor_two.jpg';
import { Line } from 'react-chartjs-2';
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
            <li><Link to="/reports">Reports</Link></li>
            <li><Link to="/medical-history">Medical History</Link></li>
            <li><Link to="/test-results">Test Results</Link></li>
            <li><Link to="/medical-visits-logs">Medical Visits Logs</Link></li>
            <li><Link to="/insurance">Insurance</Link></li>
            <li><Link to="/prescriptions">Prescriptions</Link></li>
            <li><Link to="/recommendations">Recommendations</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/logout">Log out</Link></li>
          </ul>
        </aside>
        <main className="dashboard-content">
          <div className="user-profile">
            <img src={Avatar} alt="User Avatar" className="user-avatar" />
            <div className="user-info">
              <h3>Amir Hossain</h3>
              <p>30 years old</p>
            </div>
          </div>
          <section className="health-summary">
            <div className="summary-header">
              <h2>Hello Amir Hossain,</h2>
              <p>Here is how you are doing and what you need to take care of your health!</p>
            </div>
            <div className="summary-cards">
              <div className="summary-card">
                <h3>88/120</h3>
                <p>Health Score</p>
              </div>
              <div className="summary-card">
                <h3>34+</h3>
                <p>Insurance Claims</p>
              </div>
              <div className="summary-card">
                <h3>15+</h3>
                <p>Medical Visits</p>
              </div>
            </div>
          </section>
          <div className="charts-container">
            <section className="health-timeline">
              <h3>Health Timeline</h3>
              <div className="chart-container">
                <Line data={healthTimelineData} options={healthTimelineOptions} />
              </div>
            </section>
            <section className="vital-signs">
              <h3>Vital Signs</h3>
              <div className="chart-container">
                <Line data={vitalSignsData} />
              </div>
            </section>
          </div>
          <div className="appointments-container">
            <section className="upcoming-appointments">
              <h3>Upcoming Appointments</h3>
              <ul>
                <li>
                  <div className="appointment-info">
                    <h4>Dentist Visit - 12/06/2023</h4>
                    <p>Procedure - 15/07/2023</p>
                  </div>
                </li>
              </ul>
            </section>
            <section className="program-today">
              <h3>Your Program Today</h3>
              <div className="program-item">
                <img src={DoctorOne} alt="Doctor" className="program-icon" />
                <div className="program-info">
                  <h4>Health appointment</h4>
                  <p>Dr. Oak Hamm</p>
                </div>
                <div className="program-progress">
                  <div className="progress-bar"></div>
                  <p>12% completed</p>
                </div>
              </div>
              <div className="program-item">
                <img src={DoctorTwo} alt="Doctor" className="program-icon" />
                <div className="program-info">
                  <h4>Meeting with Tak Dolberg</h4>
                  <p>22 Mar, 09:15</p>
                </div>
              </div>
            </section>
          </div>
          <section className="medical-records">
            <h3>Medical Records</h3>
            <ul>
              <li><Link to="/test-reports">View Full Test Reports</Link></li>
              <li><Link to="/doctor-notes">Doctor Notes</Link></li>
              <li><Link to="/scans-and-images">Scans And Images</Link></li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;