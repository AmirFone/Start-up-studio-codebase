import { useNavigate } from 'react-router-dom';
import React from 'react';
import './AccountVerification.css';
// import InsuranceInfo from './InsuranceInfo';
function AccountVerification() {

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/insurance-info');
  };
  return (
    <div className="AccountVerification">
      <main className="account-verification-main">
        <h1>Address Verification</h1>
        <form onSubmit={handleSubmit}>
          <div className="address-fields">
            <input type="text" placeholder="Address line 1" />
            <input type="text" placeholder="Address line 2" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Zip" />
          </div>
          <button type="submit">Continue →</button>
        </form>
      </main>
    </div>
  );
}

export default AccountVerification;