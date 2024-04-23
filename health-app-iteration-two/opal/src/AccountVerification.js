import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Style-sheets/AccountVerification.css';

function AccountVerification() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(location.state || {});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/insurance-info', { state: formData });
  };

  return (
    <div className="AccountVerification">
      <main className="account-verification-main">
        <div className="verification-card">
          <h1>Address Verification</h1>
          <form onSubmit={handleSubmit}>
            <div className="address-fields">
              <input
                type="text"
                name="addressLine1"
                placeholder="Address line 1"
                value={formData.addressLine1 || ''}
                onChange={handleChange}
              />
              <input
                type="text"
                name="addressLine2"
                placeholder="Address line 2"
                value={formData.addressLine2 || ''}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city || ''}
                onChange={handleChange}
              />
              <input
                type="text"
                name="zip"
                placeholder="Zip"
                value={formData.zip || ''}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Continue &rarr;</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default AccountVerification;