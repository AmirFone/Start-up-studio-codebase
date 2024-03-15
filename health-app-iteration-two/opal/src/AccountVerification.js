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
      <footer>
        <div className="footer-info">
          <div>
            <h4>Location</h4>
            <p>1 East Loop rd<br/>New York, NY 12345</p>
          </div>
          <div>
            <h4>Hours</h4>
            <p>Monday — Friday<br/>6:30am — 11pm</p>  
          </div>
          <div>
            <h4>Contact</h4>
            <p>email@example.com<br/>(555) 555-5555</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AccountVerification;