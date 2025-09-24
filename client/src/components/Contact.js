import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopyToClipboard = async (text, itemType) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemType);
      setTimeout(() => setCopiedItem(null), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedItem(itemType);
      setTimeout(() => setCopiedItem(null), 2000);
    }
  };

  const handleOpenLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="contact-details">
              <div 
                className="contact-item clickable" 
                onClick={() => handleCopyToClipboard('Andrew.Chang0@outlook.com', 'email')}
                title="Click to copy email"
              >
                <span className="contact-icon">📧</span>
                <div className="contact-content">
                  <h4>Email</h4>
                  <p>Andrew.Chang0@outlook.com</p>
                  {copiedItem === 'email' && <span className="copy-feedback">✓ Copied!</span>}
                </div>
                <div className="action-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                </div>
              </div>
              
              <div 
                className="contact-item clickable" 
                onClick={() => handleCopyToClipboard('778-723-8016', 'phone')}
                title="Click to copy phone number"
              >
                <span className="contact-icon">📱</span>
                <div className="contact-content">
                  <h4>Phone</h4>
                  <p>778-723-8016</p>
                  {copiedItem === 'phone' && <span className="copy-feedback">✓ Copied!</span>}
                </div>
                <div className="action-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                </div>
              </div>
              
              <div 
                className="contact-item clickable" 
                onClick={() => handleOpenLink('https://www.linkedin.com/in/andrewchang-dev')}
                title="Click to open LinkedIn"
              >
                <span className="contact-icon">💼</span>
                <div className="contact-content">
                  <h4>LinkedIn</h4>
                  <p>www.linkedin.com/in/andrewchang-dev</p>
                </div>
                <div className="action-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15,3 21,3 21,9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </div>
              </div>

              <div 
                className="contact-item clickable" 
                onClick={() => handleOpenLink('https://github.com/Dreamle1')}
                title="Click to open GitHub"
              >
                <span className="contact-icon">🐙</span>
                <div className="contact-content">
                  <h4>GitHub</h4>
                  <p>github.com/Dreamle1</p>
                </div>
                <div className="action-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15,3 21,3 21,9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;


