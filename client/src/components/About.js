import React from 'react';
import './About.css';

const About = ({ data }) => {
  if (!data) return null;

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>{data.name}</h3>
            <h4>{data.title}</h4>
            <p>{data.description}</p>
            <p>
              With {data.experience} of experience in web development, 
              I specialize in building scalable and maintainable applications 
              using modern technologies and best practices.
            </p>
            
            <div className="skills-section">
              <h4>Skills & Technologies</h4>
              <div className="skills-grid">
                {data.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <h3>{data.experience}</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


