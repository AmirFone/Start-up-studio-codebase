// ShareRecords.js
import React, { useState } from 'react';
import './Style-sheets/ShareRecords.css';

function ShareRecords() {
  const [selectedRecord, setSelectedRecord] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [shareMethod, setShareMethod] = useState('email');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sharing logic based on selected record, recipient email, share method, and message
    console.log('Selected Record:', selectedRecord);
    console.log('Recipient Email:', recipientEmail);
    console.log('Share Method:', shareMethod);
    console.log('Message:', message);
    // Reset form fields
    setSelectedRecord('');
    setRecipientEmail('');
    setShareMethod('email');
    setMessage('');
  };

  // Sample medical records data
  const medicalRecords = [
    { id: 1, title: 'Blood Test Results - 2023-05-15' },
    { id: 2, title: 'MRI Scan Report - 2023-04-20' },
    { id: 3, title: 'Prescription History - 2023-01-01 to 2023-06-30' },
    { id: 4, title: 'Vaccination Records - 2022' },
  ];

  return (
    <div className="ShareRecords">
      <header className="share-records-header">
        <h1>Share Your Medical Records</h1>
      </header>
      <main className="share-records-main">
        <section className="share-records-form">
          <h2>Select Record and Recipient</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Select Record to Share:</label>
              <select
                value={selectedRecord}
                onChange={(e) => setSelectedRecord(e.target.value)}
                required
              >
                <option value="">-- Select a Record --</option>
                {medicalRecords.map((record) => (
                  <option key={record.id} value={record.id}>
                    {record.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Recipient Email:</label>
              <input
                type="email"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Sharing Method:</label>
              <select value={shareMethod} onChange={(e) => setShareMethod(e.target.value)}>
                <option value="email">Email</option>
                <option value="url">One-Time Signed URL</option>
                <option value="fax">Secure Fax</option>
              </select>
            </div>
            <div className="form-group">
              <label>Personal Message (Optional):</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter a personal message or instructions for the recipient"
              ></textarea>
            </div>
            <button type="submit">Share Record</button>
          </form>
        </section>
        <section className="share-records-guidelines">
          <h2>Sharing Guidelines</h2>
          <ul>
            <li>
              Ensure that you have the necessary consent and authorization to share your medical records.
            </li>
            <li>
              Only share your records with trusted healthcare providers or individuals involved in your care.
            </li>
            <li>
              When sharing via email, double-check the recipient's email address for accuracy.
            </li>
            <li>
              If using a one-time signed URL, inform the recipient about its expiration and secure nature.
            </li>
            <li>
              Provide clear instructions or a personal message to the recipient regarding the shared records.
            </li>
            <li>
              Avoid sharing sensitive information through unsecured channels or public platforms.
            </li>
            <li>
              Keep your Opal account credentials confidential and enable two-factor authentication for added security.
            </li>
          </ul>
        </section>
        <section className="share-records-faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>How secure is the sharing process?</h3>
            <p>
              Opal employs industry-standard encryption and security measures to protect your data during the sharing process. We ensure that your records are transmitted securely to the intended recipient.
            </p>
          </div>
          <div className="faq-item">
            <h3>Can I revoke access to shared records?</h3>
            <p>
              Yes, you have full control over the records you share. You can revoke access to shared records at any time from your Opal account settings.
            </p>
          </div>
          <div className="faq-item">
            <h3>How long are shared records accessible?</h3>
            <p>
              When sharing records via email or secure fax, the recipient has indefinite access to the shared records. However, when using a one-time signed URL, the access expires after a specified time period or after the first view, whichever comes first.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ShareRecords;