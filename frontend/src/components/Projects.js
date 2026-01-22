import React from 'react';

function Projects() {
  const projectsData = [
    {
      title: "Conversational AI for Intelligent Travel Planning",
      description: "An intelligent chatbot system that assists users in planning and booking their travel itineraries. Features natural language processing, personalized recommendations, and seamless booking integration.",
      technologies: ["AI/ML", "NLP", "Python", "Flask", "React"],
      link: "#"
    },
    {
      title: "AI Text Detector Chatbot",
      description: "A Flask-based machine learning application that detects and analyzes AI-generated text. Implements advanced ML algorithms to distinguish between human and AI-written content with high accuracy.",
      technologies: ["Flask", "Machine Learning", "Python", "NLP", "scikit-learn"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;