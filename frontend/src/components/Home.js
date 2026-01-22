import React from 'react';

function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <p className="greeting">Hello, I'm</p>
        <h1 className="hero-title">Rishitha R</h1>
        <h2 className="hero-subtitle">Full Stack Web Developer</h2>
        <p className="hero-description">
          Passionate about creating elegant solutions to complex problems.
          Currently pursuing opportunities in web development.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Home;