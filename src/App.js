import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AboutMe from './AboutMe';
import ProjectsPage from './Project';
import WeatherComponent from './Weather';
import DescriptionPage from './DescriptionPage';


const Contact = () => <div>Contact Content</div>;

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);
  return (
    <div className="App">
       {/* <div className="App" style={{ cursor: 'none' }}> */}

       {/* <div className="cursor-dot" style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }} /> */}
        <Router>
        <Routes>
        <Route path="/" element={
        <div className="heroBackground">
          <div className="titleContainer">
            <div className="weatherContainer">
                  <WeatherComponent/>
            </div>
            <div className="line"></div>
            <h1>Archit Verma</h1>
            <div className="line"></div>
          </div>
          <nav className="navbar">
            <a href="/about-me" className="navItem">About Me</a>
            <a href="/projects" className="navItem">Projects</a>
            <a href="/contact" className="navItem">Contact</a>
          </nav>

          <div className="circle" />
          <div className="circle small" />
          <div className="circle medium" />
          <div className="circle large" />
          {/* Additional content here */}
        </div>
                } />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:projectId" element={<DescriptionPage />} />
        </Routes>
      </Router>
      </div>
      // </div>
  );
}

export default App;
