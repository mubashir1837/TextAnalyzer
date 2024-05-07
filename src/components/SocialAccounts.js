// SocialAccounts.js

import React from 'react';
import './SocialAccounts.css'; // Import the CSS file for styling

export default function SocialAccounts() {
  return (
    <div className="social-accounts">
      <h7>.</h7>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/mubashirali8/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/mubashir1837" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
        </li>
        <li>
          <a href="https://instagram.com/mubashir_aliyaar_37" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </li>
        <li>
          <a href="https://facebook.com/your_facebook_username" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </a>
        </li>
        {/* Add more social media accounts as needed */}
      </ul>
    </div>
  );
}