import React from 'react';
import './LandingPageSection.css';
import { Link } from 'react-router-dom';

function LandingPageSection({ image, width = '100%', height = 'auto' }) {
  return (
    <section className="landing-page-section">
      <div className="section-content">
        <h2>Your health, Simplified</h2>
        <p>
        One platform, all your medical information. We make your medical journey as a patient seamless, from onboarding to accessing your health records. In a nutshell, opal is a digital wallet for your health

        </p>
        {/* <div className="feature-grid">
          <div className="feature-card">
            <h3>Secure Record Storage</h3>
            <p>Your medical records are stored securely in our encrypted database, accessible only by you and authorized healthcare providers.</p>
          </div>
          <div className="feature-card">
            <h3>Easy Record Retrieval</h3>
            <p>Retrieve your medical records, test results, and imaging studies with just a few clicks, saving you time and effort.</p>
          </div>
          <div className="feature-card">
            <h3>Seamless Data Sharing</h3>
            <p>Share your health information seamlessly with doctors, specialists, and loved ones, ensuring continuity of care.</p>
          </div>
        </div> */}
        <Link to="/signup" className="cta-button">Get your digital health wallet for free</Link>
      </div>
      <div className="section-image">
      	<img src={image} alt="Landing Page" style={{ width: width, height: height }} />
      </div>
    </section>
  );
}

export default LandingPageSection;