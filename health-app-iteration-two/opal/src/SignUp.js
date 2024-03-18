import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

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

export default SignUp;