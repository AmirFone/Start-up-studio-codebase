import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style-sheets/SignUp.css';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/AccountVerification', { state: formData });
  };

  return (
    <div className="SignUp">
      <main className="sign-up-main">
        <div className="sign-up-card">
          <h1>Sign up</h1>
          <form onSubmit={handleSubmit}>
            <div className="name-fields">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="dateOfBirth"
              placeholder="mm/dd/yyyy"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
            <button type="submit">Continue &rarr;</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default SignUp;