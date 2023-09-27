// ContactUs.js

import React from 'react';
import '../Assets/css/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>
          For inquiries or assistance, please contact us using the information below:
        </p>
        <ul>
          <li>Email: contact@yourblooddonationwebsite.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: 123 Blood Donation St, Cityville, State</li>
        </ul>
      </div>
      <div className="contact-form">
        {/* Add your contact form component here */}
      </div>
    </div>
  );
};

export default ContactUs;