import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">MyPortfolio</h1>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="footer">
        <p>&copy; 2025 MyPortfolio. Built with React.js</p>
      </footer>
    </div>
  );
}

export default App;