import React from 'react';
import './InsuranceInfo.css';

function InsuranceInfo() {
  return (
    <div className="InsuranceInfo">
      <main className="insurance-info-main">
        <h1>Account Verification</h1>
        <form>
          <div className="insurance-fields">
            <label htmlFor="file-upload">
              <div className="file-upload-container">
                <img src="upload-icon.svg" alt="Upload Icon" />
                <span>Drop & drop files or Browse</span>
              </div>
            </label>
            <input id="file-upload" type="file" accept=".jpg,.jpeg,.png,.pdf" />
          </div>
          <div className="insurance-fields">
            <label htmlFor="insurance-provider">Insurance Provider:</label>
            <div className="select-wrapper">
              <select id="insurance-provider">
                <option value="">Select provider</option>
                {/* Add more insurance provider options */}
              </select>
            </div>
          </div>
          <div className="insurance-fields">
            <label htmlFor="policy-holder-name">Policy Holder's Name:</label>
            <input id="policy-holder-name" type="text" placeholder="Full name" />
          </div>
          <div className="insurance-fields">
            <label htmlFor="policy-number">Policy Number:</label>
            <input id="policy-number" type="text" placeholder="Policy number" />
          </div>
          <div className="insurance-fields">
            <label htmlFor="group-number">Group Number:</label>
            <input id="group-number" type="text" placeholder="Group number" />
          </div>
          <button type="submit">Submit →</button>
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

export default InsuranceInfo;