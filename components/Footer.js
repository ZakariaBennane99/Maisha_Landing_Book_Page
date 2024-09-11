import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
        <p>&copy; {currentYear} Women At The Well Society LLC. All rights reserved.</p>
    </footer>
  );
};

export default Footer;