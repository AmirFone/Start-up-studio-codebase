import { React, useState, useEffect } from 'react';
import './App.css';
import BackendDemo from './images/Backend_demo.mp4';
import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AccountVerification from './AccountVerification';
import InsuranceInfo from './InsuranceInfo';
import Contact from './Contact';
import AboutUs from './AboutUs';
import MailchimpModal from './MailchimpModal';
import Dashboard from './Dashboard';
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
    const mailtoURL = `mailto:ah2324@cornell.edu?subject= I have a question about Opal!&body=First Name: ${formData.firstName}%0D%0ALast Name: ${formData.lastName}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
  
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
            <span><Link to="/" style={{ textDecoration: 'none' }}>OPAL</Link></span>

            <ul>
            <li><Link to="/signup" className="nav-link">Sign up</Link></li>
            <li><Link to="/about-us" className="nav-link">About Us</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>

            </ul>
          </nav>
        </header>
        <Routes>
          <Route exact path="/" element={
            <main>
              <section className="hero">
                <h1>Empower yourself with your medical data</h1>
                <p>Welcome to your secure medical record view page designed for your convenience and peace of mind.</p>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <button>LEARN MORE</button>
                </Link>
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
    <button><Link to="/contact" className="nav-link">Contact Us</Link></button>
  </div>
  <div className="cta-video-card">
    <div className="video-card">
    <div style={{ textAlign: 'center' }}>
  <h3 style={{ color: 'black' }}>Our Future Backend Implementation Visualized</h3>
</div>

      <video src="https://backenddemo23423.s3.amazonaws.com/backend_demo_part%20two%20.mp4" alt="Access your personal health information" controls />
    </div>
  </div>
</section>
              <section className="form-section">
                <div className="form-content">
                  <h2>Access your medical records</h2>
                  <p>Discover the power of having your health information at your fingertips. Explore your medical history, lab results, and more with ease. Take control of your healthcare journey today.</p>
                </div>
                <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              placeholder="Comment or Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <button type="submit">Submit</button>
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
        </div>
      </footer>
      </div>

    </Router>
    
  );
}

export default App;