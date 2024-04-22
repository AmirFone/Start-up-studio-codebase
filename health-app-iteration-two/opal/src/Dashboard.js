// Dashboard.js
import React from 'react';
import './Style-sheets/Dashboard.css';
import UserProfile from './UserProfile';
import HealthWallet from './HealthWallet';
import MedicalRecords from './MedicalRecords';
import Prescriptions from './Prescriptions';
import UpcomingAppointments from './UpcomingAppointments';
import HealthTimeline from './HealthTimeline';
import VitalSigns from './VitalSigns';
import SearchHealthData from './SearchHealthData';
import Sidebar from './Sidebar'; // Add this import

function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="dashboard-container">
        <Sidebar /> {/* Add the Sidebar component */}
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