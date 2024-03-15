import React from 'react';
import './App.css';
import LandingPage from './images/Landing_page.png';
import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AccountVerification from './AccountVerification';
import InsuranceInfo from './InsuranceInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <span><Link to="/" style={{ textDecoration: 'none' }}>OPAL</Link></span>

            <ul>
              <li><Link to="/signup">Sign up</Link></li>
              <li><Link to="/AccountVerification">Log in</Link></li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route exact path="/" element={
            <main>
              <section className="hero">
                <h1>Empower yourself with your medical data</h1>
                <p>Welcome to your secure medical record view page designed for your convenience and peace of mind.</p>
                <button>LEARN MORE</button>
              </section>
              <section className="features">
                <h2>Personalized Medical Records Access</h2>
                <div className="feature-cards">
                  <div className="feature-card">
                    <h3>Secure Record Retrieval</h3>
                    <p>Access vital health information with ease and peace of mind. Discover the details that matter most to you, ensuring a seamless experience every time.</p>
                    <button>View Your Records</button>
                  </div>
                  <div className="feature-card">
                    <h3>Confidential Data Viewing</h3>
                    <p>Explore crucial medical details effortlessly while ensuring utmost privacy. Dive into the specifics that define your well-being, all in a secure environment.</p>
                    <button>Access Now</button>
                  </div>
                  <div className="feature-card">
                    <h3>Effortless Record Management</h3>
                    <p>Send essential health records with a single click, saving time and effort. Empower yourself by sharing vital data securely and efficiently.</p>
                    <button>View Your Records</button>
                  </div>
                </div>
              </section>
              <section className="cta">
                <div className="cta-content">
                  <h2>Access your personal health information</h2>
                  <p>Retrieve and securely view your medical records with ease. We prioritize the safety and confidentiality of your health data. Trust us to handle your information responsibly.</p>
                  <button>Contact Us</button>
                </div>
                <div className="cta-image">
                  <img src={LandingPage} alt="Access your personal health information" />
                </div>
              </section>
              <section className="form-section">
                <div className="form-content">
                  <h2>Access your medical records</h2>
                  <p>Discover the power of having your health information at your fingertips. Explore your medical history, lab results, and more with ease. Take control of your healthcare journey today.</p>
                </div>
                <div className="form-container">
                  <form>
                    <input type="text" placeholder="Name" />
                    <input type="tel" placeholder="Phone" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Comment or Message"></textarea>
                    <button type="submit">Submit</button>
                  </form>
                </div>
              </section>
            </main>         
           } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/accountverification" element={<AccountVerification />} />
          <Route path="/insurance-info" element={<InsuranceInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;