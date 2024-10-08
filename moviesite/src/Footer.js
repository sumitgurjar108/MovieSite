import React from 'react';
import './Footer.css'; // Import the CSS for styling

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} MovieWorld. All rights reserved.</p>
            <p>
               <a href="/contact">Contact Us</a> | <a href="/about">About Us</a>
            </p>
            <p>Follow us on social media:</p>
            <ul className="social-links">
               <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
               <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
               <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
         </div>
      </footer>
   );
};

export default Footer;
