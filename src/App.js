import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AboutMe from './AboutMe';
import ProjectsPage from './Project';
import DescriptionPage from './DescriptionPage';
import linkedin from "./assets/linkedIn.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';

// Component for contact, assuming it exists
const Contact = () => <div>Contact Content</div>;

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <div className="heroBackground">
                      <header className="headerContainer">
          <div className="nameAndEmail">
            <h1>Archit Verma</h1>
            <p className="email">archit.sfu@gmail.com</p>
          </div>
          <nav className="navbar">
            <Link to="/about-me" className="navItem">About Me</Link>
            <Link to="/projects" className="navItem">Projects</Link>
            <Link to="/contact" className="navItem">Contact</Link>
          </nav>
        </header>
              <div className="introContainer">
                <img src={linkedin} alt="Archit" className="profileImage" /> {/* Add your image here */}
                <div className="introText">
                  <h2>Hi, I'm <span className="highlight">Archit</span></h2>
                  <p className="subtitle">Software Developer</p>
                </div>
              </div>
              <div className="additionalText">
                <p className="expertise">Expert on</p>
                <h3 className="location">Based in Canada</h3>
                <p className="description">I'm a Full-stack Software Engineer. Hey are looking for a designer to build your brand and grow your business? Let's shake hands with me.</p>
                <button className="downloadCv">Download CV</button>
              </div>
              <div className="socialLinks">
                <IconButton href="https://www.linkedin.com/in/archit-verma-b924a8209/" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon style={{ fontSize: '3rem', color:"white" }} />
                </IconButton>
                <IconButton href="https://github.com/Architv27" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon style={{ fontSize: '3rem', color:"white" }} />
                </IconButton>
                <IconButton href="https://www.instagram.com/this.is.archi/" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon style={{ fontSize: '3rem', color:"white" }} />
                </IconButton>
              </div>
            </div>
            
          } />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:projectId" element={<DescriptionPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;