import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Andrew Chang</span>
          </h1>
          <h2 className="hero-subtitle">
            <span className="typing-text">Software Engineer</span>
          </h2>
          <p className="hero-description">
          I build robust, scalable software solutions across full-stack development, databases, and cloud technologies. From backend infrastructure and API design to frontend interfaces, turning complex ideas into intuitive applications. Driven by continuous learning, I adapt quickly, embrace new technologies, and deliver solutions with real-world impact.
         </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar">
            <div className="avatar-placeholder">
              <span>👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


