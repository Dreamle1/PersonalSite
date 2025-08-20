import React from 'react';
import './Projects.css';

const Projects = ({ projects }) => {
  // Default projects based on resume if no data is provided
  const defaultProjects = [
    {
      id: 1,
      title: "SparkJDBC Driver & OAuth 2.0 Implementation",
      description: "Designed and implemented SparkJDBC driver enabling SQL translation for Apache Spark database connections. Led development of U2M and M2M OAuth 2.0 with token caching, enhancing Databricks Spark's authentication functionality.",
      technologies: ["Java", "JDBC", "OAuth 2.0", "Apache Spark", "Databricks", "REST API", "Jenkins", "BitBucket"],
      company: "insightsoftware",
      period: "April 2022 - Present",
      highlights: [
        "Reduced release time by 50% through CI/CD pipeline optimization",
        "Enhanced security with Snyk and Sonar scans",
        "Built REST API requests and database metadata functionalities"
      ]
    },
    {
      id: 2,
      title: "MERN Stack Learning Platform",
      description: "Redesigned and deployed MERN stack application for Sandbox Academy, enabling students to learn Python game programming with integrated development environment.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Python", "Pygame", "Material-UI", "AWS S3"],
      company: "Sandbox Academy",
      period: "Aug 2020 - April 2021",
      highlights: [
        "Built frontend Python compiler interface with code editor",
        "Developed data pipelines to MongoDB and AWS S3",
        "Implemented user authentication with login tokens"
      ]
    },
    {
      id: 3,
      title: "XML Documentation System",
      description: "Designed translation system for XML to HTML5 and PDF formats using XSLT for internal documentation at SAP. Enhanced user experience with auto-generated content.",
      technologies: ["XSLT", "HTML5", "JavaScript", "CSS", "jQuery", "DITA", "Scrum"],
      company: "SAP",
      period: "Sept 2019 - Sept 2020",
      highlights: [
        "Generated documentation in multiple formats with DITA plugin",
        "Implemented auto-generated table of contents",
        "Enhanced user experience with collapsible content"
      ]
    },
    {
      id: 4,
      title: "Automated Testing Framework",
      description: "Created comprehensive automated testing environment for web interfaces using Selenium and REST APIs, improving testing efficiency and scalability.",
      technologies: ["Python", "Selenium", "REST API", "SSH", "BigQuery", "Jenkins", "TeamCity", "Jira"],
      company: "AppNeta",
      period: "Jan 2019 - April 2019",
      highlights: [
        "Designed REST API testing environment with SSH and BigQuery",
        "Implemented bug fixes and tests for new features",
        "Organized tasks and planning with Jira"
      ]
    }
  ];

  const displayProjects = projects && projects.length > 0 ? projects : defaultProjects;

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Projects & Experience</h2>
          <p>Key projects and professional experience</p>
        </div>
        
        <div className="projects-grid">
          {displayProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  {project.title.charAt(0)}
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-company">
                  <strong>{project.company}</strong> • {project.period}
                </p>
                <p>{project.description}</p>
                
                {project.highlights && (
                  <div className="project-highlights">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {project.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <p>
            I'm passionate about learning new technologies and tackling complex challenges. 
            Each project has taught me valuable lessons about scalable architecture, 
            security best practices, and effective collaboration.
          </p>
          <p>
            <strong>Ready to bring this experience to your next project!</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;


