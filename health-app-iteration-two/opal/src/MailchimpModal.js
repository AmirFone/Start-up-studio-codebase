// MailchimpModal.js
import React from 'react';
import './MailchimpModal.css';

const MailchimpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div id="mc_embed_signup">
          <form
            action="https://cornell.us18.list-manage.com/subscribe/post?u=c9828f181649980f2345542d7&amp;id=768936c172&amp;f_id=00f1c2e1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll">
              <h2>Join Our Mailing List! Stay updated on our product and upcoming pilot!</h2>
              <div className="indicates-required">
                <span className="asterisk">*</span> indicates required
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">
                  Email Address <span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  required
                />
                <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
              </div>
              <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
              </div>
              <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                <input type="text" name="b_c9828f181649980f2345542d7_768936c172" tabIndex="-1" />
              </div>
              <div className="optionalParent">
                <div className="clear foot">
                  <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                  <p className="brandingLogo">
                    <a href="http://eepurl.com/iMjZq-" title="Mailchimp - email marketing made easy and fun">
                      <img src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default MailchimpModal;