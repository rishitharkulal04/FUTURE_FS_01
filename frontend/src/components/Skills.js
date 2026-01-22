import React from 'react';

function Skills() {
  const skillsData = {
    "Frontend": ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design"],
    "Backend": ["Node.js", "Express.js", "RESTful APIs", "MongoDB"],
    "Tools": ["Git", "GitHub", "VS Code", "npm", "Chrome DevTools"],
    "Soft Skills": ["Problem Solving", "Team Collaboration", "Communication", "Time Management"]
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3 className="skill-category-title">{category}</h3>
              <ul className="skill-list">
                {skills.map((skill, index) => (
                  <li key={index} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;