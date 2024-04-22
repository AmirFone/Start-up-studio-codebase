// UserProfile.js
import React, { useState } from 'react';
import './Style-sheets/UserProfile.css';
import Avatar from './images/avatar.jpg';
import { FaEdit, FaCheck, FaTimes } from 'react-icons/fa';

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState('John Doe');
  const [editedAge, setEditedAge] = useState('30');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Perform save logic here
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditedName('Amir Hossain');
    setEditedAge('30');
    setIsEditing(false);
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={Avatar} alt="User Avatar" className="user-avatar" />
        <div className="profile-actions">
          {isEditing ? (
            <>
              <button className="save-button" onClick={handleSaveClick}>
                <FaCheck /> Save
              </button>
              <button className="cancel-button" onClick={handleCancelClick}>
                <FaTimes /> Cancel
              </button>
            </>
          ) : (
            <button className="edit-button" onClick={handleEditClick}>
              <FaEdit /> Edit
            </button>
          )}
        </div>
      </div>
      <div className="user-info">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="edit-input"
            />
            <input
              type="text"
              value={editedAge}
              onChange={(e) => setEditedAge(e.target.value)}
              className="edit-input"
            />
          </>
        ) : (
          <>
            <h3>{editedName}</h3>
            <p>{editedAge} years old</p>
          </>
        )}
      </div>
      <div className="user-stats">
        <div className="stat-item">
          <h4>Blood Type</h4>
          <p>A+</p>
        </div>
        <div className="stat-item">
          <h4>Height</h4>
          <p>175 cm</p>
        </div>
        <div className="stat-item">
          <h4>Weight</h4>
          <p>70 kg</p>
        </div>
      </div>
  
    </div>
  );
}

export default UserProfile;