import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import HealthWallet from './HealthWallet';
import MedicalRecords from './MedicalRecords';
import Prescriptions from './Prescriptions';
import UpcomingAppointments from './UpcomingAppointments';
import HealthTimeline from './HealthTimeline';
import VitalSigns from './VitalSigns';
import SearchHealthData from './SearchHealthData';

function Dashboard() {
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
          <UserProfile />
          <SearchHealthData />
          <HealthWallet />
          <UpcomingAppointments />
          <MedicalRecords />
          <Prescriptions />
          <HealthTimeline />
          <VitalSigns />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;