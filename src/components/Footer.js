import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Andrew Chang</h3>
            <p>Software Engineer passionate about building robust software solutions with expertise in full-stack development, database systems, and cloud technologies.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://github.com/andrewchang" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/andrewchang" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="mailto:Andrew.Chang0@outlook.com">
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Andrew Chang. All rights reserved.</p>
          <p>Built with ❤️ using MERN Stack</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


