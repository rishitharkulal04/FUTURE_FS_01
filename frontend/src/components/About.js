import React from 'react';

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a motivated web development intern with a strong foundation in 
              full-stack technologies. My journey in programming began with a curiosity 
              about how websites work, and has evolved into a passion for creating 
              user-friendly and efficient web applications.
            </p>
            <p>
              Currently, I'm focused on expanding my knowledge in React.js, Node.js, 
              and modern web development practices. I believe in writing clean, 
              maintainable code and creating meaningful user experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or learning about the latest 
              trends in web development.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Education</h3>
              <p>Bachelor's in Computer Science</p>
              <p className="highlight-detail">Expected Graduation: 2028</p>
            </div>
            <div className="highlight-card">
              <h3>Experience</h3>
              <p>Web Development Intern</p>
              <p className="highlight-detail">Future Interns Program</p>
            </div>
            <div className="highlight-card">
              <h3>Interests</h3>
              <p>Frontend Development, UI/UX Design, Problem Solving</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;