import React from 'react';
import './Style-sheets/AboutUs.css';
import person from './images/Humaaans.png';
import amir from './images/amir.png';
import divya from './images/divya.png';
import samy from './images/samy.png'; 
import stanislaw from './images/stanislaw.png';
function AboutUs() {
  return (
    <div className="AboutUs">
      <main className="about-us-main">
        <section className="about-us-content">
          <h2>Ensuring Complete Confidentiality</h2>
          <p>
	  As a patient, your medical records are securely stored and easily accessible at your fingertips. Feel empowered knowing that you can retrieve, view, and share your health information with ease.

Rest assured that every record is handled with the utmost care and professionalism to maintain your privacy and trust in our services. Your well-being is our priority.

Experience the convenience of managing your medical history online while having the peace of mind that your data is safe and protected.          </p>
        </section>
        <section className="about-us-image">
          <img src={person} alt="About Us" />
        </section>
      </main>
      <section className="meet-the-team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <div className="member-image">
              <img src={samy} alt="Samy Froidefond" />
            </div>
            <h3>Samy Froidefond</h3>
            <p>MBA with strategic experience in tech and pharmaceuticals</p>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src={divya} alt="Divya Madala" />
            </div>
            <h3>Divya Madala</h3>
            <p>Technical MBA  with experience in healthcare systems</p>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src={amir} alt="Amir Hossain" />
            </div>
            <h3>Amir Hossain</h3>
            <p>Software engineer with big Tech experience building full stack projects and training machine learning models</p>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src={stanislaw} alt="Stanisław Chajewski" />
            </div>
            <h3>Stanisław Chajewski</h3>
            <p>Lawyer with experience deploying and developing tech in regulated sectors, focused on tech regulation, transactions and privacy</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
