import React from 'react';
import './Resume.css';

const Resume = () => {
  const handleViewResume = () => {
    // Open the resume PDF in a new tab
    window.open('/Andrew Chang Resume.pdf', '_blank');
  };

  const handleDownloadResume = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = '/Andrew Chang Resume.pdf';
    link.download = 'Andrew_Chang_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="resume">
      <div className="container">
        
        <div className="resume-content">
          <div className="resume-description">
            <h3>Professional Experience</h3>
            <p>
              Download or view my resume to learn more about my professional background, 
              technical skills, and career achievements. My resume showcases my experience 
              in web development, software engineering, and project management.
            </p>
            
            <div className="resume-actions">
              <button 
                className="btn-primary" 
                onClick={handleViewResume}
                aria-label="View resume in new tab"
              >
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
                View Resume
              </button>
              
              <button 
                className="btn-secondary" 
                onClick={handleDownloadResume}
                aria-label="Download resume"
              >
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
