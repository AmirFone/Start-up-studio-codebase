import React from 'react';
import './LandingPageSection.css';
import { Link } from 'react-router-dom';

function LandingPageSection({ image, width = '100%', height = 'auto' }) {
  return (
    <section className="landing-page-section">
      <div className="section-content">
        <h2>Empowering You with Your Health Data</h2>
        <p>
          Opal is your trusted companion in managing your health information. With our secure and intuitive platform, you can easily access,
          organize, and share your medical records, ensuring that you have control over your health journey.
        </p>
        <div className="feature-grid">
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
        </div>
        <Link to="/signup" className="cta-button">Get Started</Link>
      </div>
      <div className="section-image">
      	<img src={image} alt="Landing Page" style={{ width: width, height: height }} />
      </div>
    </section>
  );
}

export default LandingPageSection;