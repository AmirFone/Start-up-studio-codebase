import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Style-sheets/InsuranceInfo.css';
import Upload from './images/Upload.png';

function InsuranceInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(location.state || {});
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'application/pdf')) {
      setUploadedFile(file);
    }
    setIsDragOver(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'application/pdf')) {
      setUploadedFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Dashboard', { state: formData });
  };

  return (
    <div className="InsuranceInfo">
      <main className="insurance-info-main">
        <div className="insurance-card">
          <h1>Account Verification</h1>
          <form onSubmit={handleSubmit}>
            <div className="insurance-fields">
              <label htmlFor="file-upload">
                <div
                  className={`file-upload-container ${isDragOver ? 'drag-over' : ''}`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                >
                  {uploadedFile ? (
                    <div className="file-info">
                      <p>{uploadedFile.name}</p>
                      <i className="fas fa-check-circle"></i>
                    </div>
                  ) : (
                    <>
                      <img src={Upload} alt="Upload Icon" />
                      <span>Drop & drop files or Browse</span>
                    </>
                  )}
                </div>
              </label>
              <input
                id="file-upload"
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
              />
            </div>
            <div className="insurance-fields">
              <label htmlFor="insurance-provider">Insurance Provider:</label>
              <div className="select-wrapper">
                <select id="insurance-provider">
                  <option value="">Select provider</option>
                  <option value="Aetna">Aetna</option>
                  <option value="Anthem">Anthem</option>
                  <option value="Blue Cross Blue Shield">Blue Cross Blue Shield</option>
                  <option value="Cigna">Cigna</option>
                  <option value="Humana">Humana</option>
                  <option value="Kaiser Permanente">Kaiser Permanente</option>
                  <option value="Medicaid">Medicaid</option>
                  <option value="Medicare">Medicare</option>
                  <option value="MetLife">MetLife</option>
                  <option value="Oscar Health">Oscar Health</option>
                  <option value="Oxford Health Plans">Oxford Health Plans</option>
                  <option value="Tricare">Tricare</option>
                  <option value="UnitedHealthcare">UnitedHealthcare</option>
                  <option value="WellPoint">WellPoint</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="insurance-fields">
              <label htmlFor="policy-holder-name">Policy Holder's Name:</label>
              <input id="policy-holder-name" type="text" placeholder="Full name" />
            </div>
            <div className="insurance-fields">
              <label htmlFor="policy-number">Policy Number:</label>
              <input id="policy-number" type="text" placeholder="Policy number" />
            </div>
            <div className="insurance-fields">
              <label htmlFor="group-number">Group Number:</label>
              <input id="group-number" type="text" placeholder="Group number" />
            </div>
            <button type="submit">Submit &rarr;</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default InsuranceInfo;