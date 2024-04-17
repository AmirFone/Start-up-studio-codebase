// HealthWallet.js
import React, { useState } from 'react';
import './HealthWallet.css';
import WalletCard from './images/wallet_card.png';

function HealthWallet() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countDown, setCountDown] = useState(15);

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
            </div>
            <p className="modal-message">This modal will close in {countDown} seconds.</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default HealthWallet;