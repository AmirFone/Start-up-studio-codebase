import React from 'react';
import './UserProfile.css';
import Avatar from './images/avatar.jpg';

function UserProfile() {
  return (
    <div className="user-profile">
      <img src={Avatar} alt="User Avatar" className="user-avatar" />
      <div className="user-info">
        <h3>Amir Hossain</h3>
        <p>30 years old</p>
      </div>
    </div>
  );
}

export default UserProfile;