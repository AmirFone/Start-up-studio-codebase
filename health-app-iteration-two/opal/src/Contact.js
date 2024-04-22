// Contact.js

import React, { useState, useEffect } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [displayedSteps, setDisplayedSteps] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayedSteps((prevSteps) => {
        if (prevSteps.length < 9) {
          return [...prevSteps, prevSteps.length];
        }
        return prevSteps;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoURL = `mailto:ah2324@cornell.edu?subject=I have a question about Opal!&body=First Name: ${formData.firstName}%0D%0ALast Name: ${formData.lastName}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;

    window.open(mailtoURL, '_blank');

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="Contact">
      <div className="card implementation-plan">
        <h2>opal Backend Implementation Plan</h2>
        <div className="steps">
          {displayedSteps.includes(0) && (
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Customer Signs Up</h3>
                <p>The user goes through an onboarding process, providing necessary information for account creation.</p>
              </div>
            </div>
          )}

          {displayedSteps.includes(1) && (
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Verify Identity and Obtain Consent</h3>
                <p>We use the user's personal and insurance information to verify their identity and obtain explicit, informed consent, ensuring compliance with privacy laws such as HIPAA.</p>
              </div>
            </div>
          )}

          {displayedSteps.includes(2) && (
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Authenticate with Insurance API</h3>
                <p>Using API credentials, we securely authenticate with the user's insurance provider to obtain an access token, handling token expiration and renewal seamlessly.</p>
              </div>
            </div>
          )}

          {displayedSteps.includes(3) && (
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Submit Request for Claims Data</h3>
                <p>With the access token, we retrieve the user's claims data from their insurance provider, handling API responses, pagination, rate limits, and error retries efficiently.</p>
              </div>
            </div>
          )}

          {displayedSteps.includes(4) && (
            <div className="step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Parse Claims Data</h3>
                <p>We extract relevant information from the raw claims data, such as provider details, service dates, and codes, mapping and transforming the data for our system while ensuring data quality and integrity.</p>
              </div>
            </div>
          )}

          {displayedSteps.includes(5) && (
            <div className="step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>Identify Providers and Construct Requests</h3>
                <p>Based on the parsed claims data, we identify healthcare providers to request detailed medical records from. We construct tailored requests for each provider, prioritizing based on data completeness.</p>
              </div>
            </div>
          )}

          {displayedSteps.includes(6) && (
            <div className="step">
              <div className="step-number">7</div>
              <div className="step-content">
                <h3>Automate Requests to Providers</h3>
                <p>For providers with APIs, we automate the process of authenticating and submitting requests for medical records. For providers without APIs, we employ a semi-automated approach with manual follow-up and management.</p>
              </div>
            </div>
          )}

          {displayedSteps.includes(7) && (
            <div className="step">
              <div className="step-number">8</div>
              <div className="step-content">
                <h3>Aggregate and Store Records</h3>
                <p>We aggregate the received medical records into our system, ensuring data consistency and integrity. The records are stored securely with encryption and access control measures, following data retention policies.</p>
              </div>
            </div>
          )}

          {displayedSteps.includes(8) && (
            <div className="step">
              <div className="step-number">9</div>
              <div className="step-content">
                <h3>Provide Access to Users</h3>
                <p>Finally, we provide users with secure and user-friendly access to their aggregated medical records through a web or mobile application. Users can manage their consents and permissions, empowering them with control over their data.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="Contact">
      <main className="contact-main">
        <div className="contact-content">
          <h2>Manage Your Medical Records</h2>
          <p>
            Discover how you can access, review, and securely transmit your medical
            information whenever you need it. Make informed decisions with ease.
          </p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </main>
    </div>
    </div>
  );
}

export default Contact;