import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Style-sheets/SignUp.css';

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/AccountVerification');
  };

  return (
    <div className="SignUp">
      <main className="sign-up-main">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div className="name-fields">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
          <input type="text" placeholder="mm/dd/yyyy" />
          <button type="submit">Continue →</button>
        </form>
      </main>
    </div>
  );
}

export default SignUp;