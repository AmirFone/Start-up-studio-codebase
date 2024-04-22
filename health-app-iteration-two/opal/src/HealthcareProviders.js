// HealthcareProviders.js
import React from 'react';
import './Style-sheets/HealthcareProviders.css';

function HealthcareProviders() {
  return (
    <div className="HealthcareProviders">
      <header className="provider-header">
        <div className="header-content">
          <h1>Partner with Opal</h1>
          <p>Empowering Healthcare Providers through Collaboration</p>
        </div>
      </header>
      <main className="provider-main">
        <section className="provider-benefits">
          <h2>Benefits of Partnering with Opal</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Streamlined Patient Data Management</h3>
              <p>
                Opal provides a centralized platform for managing patient health information, enabling seamless data sharing and reducing administrative burden.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Enhanced Patient Engagement</h3>
              <p>
                With Opal, patients have easy access to their medical records, facilitating better communication and engagement between providers and patients.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Increased Efficiency and Cost Savings</h3>
              <p>
                By leveraging Opal's interoperability features, healthcare providers can reduce duplicate tests, minimize errors, and optimize resource allocation.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Improved Care Coordination</h3>
              <p>
                Opal enables secure data sharing among healthcare providers, promoting better care coordination and leading to improved patient outcomes.
              </p>
            </div>
          </div>
        </section>
        <section className="provider-insights">
          <h2>Insights from Healthcare Professionals</h2>
          <div className="insight-card">
            <blockquote>
              "Interoperability is the biggest challenge. The cost to connect through EPIC is high, and EHR formats aren't adapted to hospital platforms."
            </blockquote>
            <cite>- Orthopedic Surgeon</cite>
          </div>
          <div className="insight-card">
            <blockquote>
              "Speak to high-level decision-makers. Entice providers and payers to use the platform. Market needs can be identified once you launch."
            </blockquote>
            <cite>- MD Student at Mt-Sinai</cite>
          </div>
          <div className="insight-card">
            <blockquote>
              "Not much success combining payer and provider data. Competition over data ownership affects cooperation. Providers and vendors are pushing back on interoperability due to lack of incentives."
            </blockquote>
            <cite>- Executive at Health Tech Company</cite>
          </div>
        </section>
        <section className="provider-cta">
          <h2>Join the Opal Network</h2>
          <p>
            Ready to transform your healthcare practice? Partner with Opal today and experience the benefits of seamless data management and improved patient care.
          </p>
          <a href="/contact" className="cta-button">Get Started</a>
        </section>
      </main>
    </div>
  );
}

export default HealthcareProviders;