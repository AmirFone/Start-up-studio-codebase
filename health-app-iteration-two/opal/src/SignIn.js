// SignIn.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style-sheets/SignIn.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-in logic here
    // For demonstration purposes, navigate to the dashboard after sign-in
    navigate('/dashboard');
  };

  return (
    <div className="SignIn">
      <main className="sign-in-main">
        <div className="sign-in-container">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign In</button>
          </form>
          <div className="sign-in-links">
            <a href="/forgot-password">Forgot Password?</a>
            <a href="/signup">Don't have an account? Sign Up</a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignIn;