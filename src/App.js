import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AboutMe from './AboutMe';

const Projects = () => <div>Projects Content</div>;
const Contact = () => <div>Contact Content</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <div className="heroBackground">
        <div className="titleContainer">
            <div className="line"></div>
              <h1>Archit Verma</h1>
            <div className="line"></div>
          </div>
          <nav className="navbar">
            <Link to="/about-me" className="navItem">About Me</Link>
            <Link to="/projects" className="navItem">Projects</Link>
            <Link to="/contact" className="navItem">Contact</Link>
          </nav>
          <div className="circle" />
          <div className="circle small" />
          <div className="circle medium" />
          <div className="circle large" />
          {/* Additional content here */}
        </div>

        <Routes>
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
