// MedicalRecords.js
import React from 'react';
import './Style-sheets/MedicalRecords.css';
import { Link } from 'react-router-dom';
import { FaFilePdf, FaNotesMedical, FaImage } from 'react-icons/fa';
function MedicalRecords() {
  return (
    <section className="medical-records">
      <h2>Medical Records</h2>
      <div className="medical-records-card">
        <ul>
          <li>
            <Link to="/test-reports">
              <FaFilePdf className="record-icon" />
              <span>Test Reports</span>
            </Link>
          </li>
          <li>
            <Link to="/doctor-notes">
              <FaNotesMedical className="record-icon" />
              <span>Doctor Notes</span>
            </Link>
          </li>
          <li>
            <Link to="/scans-and-images">
              <FaImage className="record-icon" />
              <span>Scans and Images</span>
            </Link>
          </li>
        </ul>
        <div className="upload-records">
          <h3>Upload New Records</h3>
          <input type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" />
          <button>Upload</button>
        </div>
        <div className="share-records">
          <h3>Share Records</h3>
          <Link to="/share-records">
            <button>Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MedicalRecords;