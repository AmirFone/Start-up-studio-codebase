//app.js
import { React, useState, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa'; 
import './Style-sheets/App.css';
// import BackendDemo from './images/Backend_demo.mp4';
import linkedInIcon from './images/linkedin.png';
import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AccountVerification from './AccountVerification';
import InsuranceInfo from './InsuranceInfo';
import Contact from './Contact';
import AboutUs from './AboutUs';
import MailchimpModal from './MailchimpModal';
import Dashboard from './Dashboard';
import TestReports from './TestReports';
import DoctorNotes from './DoctorNotes';
import ScansAndImages from './ScansAndImages';
import LandingPageSection from './LandingPageSection';
import landingPageImage from './images/landing_page_one.png';
import PrescriptionHistory from './PrescriptionHistory';
function App() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value // Update the formData state based on input name
    }));
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct the mailto URL with the form data
    const mailtoURL = `mailto:ah2324@cornell.edu?subject= I have a question about opal!&body=First Name: ${formData.firstName}%0D%0ALast Name: ${formData.lastName}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
  
    // Open the mailto URL in a new window or tab
    window.open(mailtoURL, '_blank');
  
    // Reset form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };
  return (
    <Router>
      <MailchimpModal isOpen={isModalOpen} onClose={closeModal} />
      <div className="App">
      <header>
        <nav>
          <div className="brand-container">
            <span><Link to="/" style={{ textDecoration: 'none' }}>opal</Link></span>
            <span className="tagline">is the digital wallet for your health</span>
          </div>
          <ul>
            <li><Link to="/signup" className="nav-link">Sign up</Link></li>
            <li><Link to="/signin" className="nav-link">Sign in</Link></li>
            <li><Link to="/healthcare-providers" className="nav-link">Healthcare Providers</Link></li>
            <li><Link to="/about-us" className="nav-link">About Us</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
            <li>
              <a href="https://www.linkedin.com/company/opalwallet/about/" target="_blank" rel="noopener noreferrer">
              <img src={linkedInIcon} alt="LinkedIn" style={{ verticalAlign: 'middle' }} width="50" height="50" />
              </a>
            </li>
          </ul>
        </nav>
      </header>


        <Routes>
          <Route exact path="/" element={
            <main>
              <section className="hero">
                <h1>Giving you full control of your health information</h1>
                <p>Giving the power back to patients, because they deserve it.</p>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <button>LEARN MORE</button>
                </Link>
              </section>
              <section className="features">
                  <h2>Personalized Medical Records Access</h2>
                  <div className="feature-cards">
                    <div className="feature-card">
                      <h3>Access your health history</h3>
                      <p>Access vital health information with ease and peace of mind. Discover the details that matter most to you, ensuring a seamless experience every time.</p>
                      <Link to="/test-reports" style={{ textDecoration: 'none' }}>
                        <button>View Your Records</button>
                      </Link>
                    </div>
                    <div className="feature-card">
                      <h3>Confidential Data Viewing</h3>
                      <p>Explore crucial medical details effortlessly while ensuring utmost privacy. Dive into the specifics that define your well-being, all in a secure environment.</p>
                      <Link to="/scans-and-images" style={{ textDecoration: 'none' }}>
                        <button>Access Now</button>
                      </Link>
                    </div>
                    <div className="feature-card">
                      <h3>Access your health history</h3>
                      <p>Send essential health records with a single click, saving time and effort. Empower yourself by sharing vital data securely and efficiently.</p>
                      <Link to="/prescription-history" style={{ textDecoration: 'none' }}>
                        <button>View Your Records</button>
                      </Link>
                    </div>
                  </div>
                </section>

              <section className="cta">
              <LandingPageSection image={landingPageImage} />
            </section>
            <section className="form-section">
              <div className="form-content">
                <h2>Healthcare Provider Access</h2>
                <p>Seamlessly manage your patients’ health records and enhance your medical services. Access comprehensive patient histories, lab results, and more to provide informed care.</p>
              </div>
              <div className="form-container">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Clinic Name"
                    name="clinicName"
                    value={formData.clinicName}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    placeholder="Provider Name"
                    name="providerName"
                    value={formData.providerName}
                    onChange={handleInputChange}
                  />
                  <input
                    type="email"
                    placeholder="Provider Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <textarea
                    placeholder="Comments or Inquiries"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  <button type="submit">Submit Request</button>
                </form>
              </div>              
            </section>
   
            </main>         
           } />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/accountverification" element={<AccountVerification />} />
          <Route path="/insurance-info" element={<InsuranceInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/test-reports" element={<TestReports />} />
          <Route path="/doctor-notes" element={<DoctorNotes />} />
          <Route path="/scans-and-images" element={<ScansAndImages />} />
          <Route path="/prescription-history" element={<PrescriptionHistory />} />
        </Routes>
      
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
              <p>email@cornell.edu<br/>(555) 555-5555</p>
            </div>
            <div>
              <h4>Follow Us</h4>
              <a href="https://www.linkedin.com/company/opalwallet/about/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} style={{ color: 'var(--tropical-indigo)' }} />
              </a>
            </div>
          </div>
        </footer>

      </div>

    </Router>
    
  );
}

export default App;