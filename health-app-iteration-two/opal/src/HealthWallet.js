import React, { useState } from 'react';
import './Style-sheets/HealthWallet.css';
import WalletCard from './images/wallet_card.png';
import { IoShareSocial } from 'react-icons/io5';
import { FaRegClipboard } from 'react-icons/fa'; // For the clipboard icon

function HealthWallet() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countDown, setCountDown] = useState(15);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [signedUrl, setSignedUrl] = useState('');

  const handleCardClick = () => {
    setIsModalOpen(true);
    startCountDown();
  };

  const startCountDown = () => {
    const timer = setInterval(() => {
      setCountDown((prevCountDown) => prevCountDown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      setIsModalOpen(false);
      setCountDown(15);
    }, 15000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCountDown(15);
    setShowShareOptions(false);
  };

  const handleShareClick = () => {
    const uniqueUrl = `https://opal-Wallet.com/signed-url/${Date.now()}`;
    setSignedUrl(uniqueUrl);
    setShowShareOptions(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(signedUrl).then(() => {
      alert('URL copied to clipboard!'); // Or update a state to show a more integrated message within the UI
    }, () => {
      alert('Failed to copy URL.');
    });
  };

  return (
    <section className="health-wallet">
      <h2>Health Wallet</h2>
      <div className="wallet-card-container">
        <img src={WalletCard} alt="Wallet Card" className="wallet-card-image" />
        <button className="wallet-card-button" onClick={handleCardClick}>
          Tap for Patient Info
        </button>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h3>Sensitive Patient Information</h3>
            <div className="patient-info">
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Date of Birth:</strong> 01/01/1990</p>
                <p><strong>Medical Record Number:</strong> 123456</p>
                <p><strong>Blood Type:</strong> A+</p>
                <p><strong>Allergies:</strong> Penicillin, Peanuts</p>
                <p><strong>Emergency Contact:</strong> Jane Doe (555-123-4567)</p>
                <p><strong>Contact Number:</strong> 555-987-6543</p>
                <p><strong>Address:</strong> 123 Main St, Hometown, State, ZIP</p>
                <p><strong>Insurance Provider:</strong> Health Ins Co</p>
                <p><strong>Policy Number:</strong> INS123456789</p>
                <p><strong>Primary Care Physician:</strong> Dr. Sarah Smith (555-321-9876)</p>
                <p><strong>Current Medications:</strong> Metformin 500mg daily, Lipitor 20mg daily</p>
                <p><strong>Medical Conditions:</strong> Type 2 Diabetes, High Cholesterol</p>
            </div>
            <button className="share-button" onClick={handleShareClick}><IoShareSocial /> Share</button>
            {showShareOptions && (
              <div className="share-modal">
                <p>Signed URL (One-Time Use): {signedUrl}</p>
                <button className="copy-button" onClick={copyToClipboard}><FaRegClipboard /> Copy URL</button>
              </div>
            )}
            <p className="modal-message">This sensitive info will close in {countDown} seconds.</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default HealthWallet;
