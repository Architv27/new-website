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
import FunFactGenerator from './Random';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';

// Component for contact, assuming it exists
const Contact = () => <div>Random Content</div>;

function App() {
  // Inside your App function
  const [showIntro, setShowIntro] = useState(false);
  const [showAdditional, setShowAdditional] = useState(false);

  useEffect(() => {
    setShowIntro(true);
    setShowAdditional(true);
  }, []);
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
            <Link to="/random" className="navItem">Random</Link>
          </nav>
        </header>
            <CSSTransition in={showIntro} timeout={1000} classNames="slide-left" unmountOnExit>
              <div className="introContainer">
                <img src={linkedin} alt="Archit" className="profileImage" /> {/* Add your image here */}
                <div className="introText">
                  <h2>Hi, I'm <span className="highlight">Archit</span></h2>
                  <p className="subtitle">Software Developer</p>
                </div>
              </div>
            </CSSTransition>
            <CSSTransition in={showAdditional} timeout={1000} classNames="slide-right" unmountOnExit>
              <div className="additionalText">
                <p className="expertise">Crafting Code with Precision</p>
                <h3 className="location">Based in Canada</h3>
                <p className="description">As a dedicated Full-stack Software Engineer, I specialize in turning complex problems into elegant solutions. Are you seeking a developer to elevate your brand and propel your business forward? Let's collaborate and create something amazing.</p>
                <a href={`${process.env.PUBLIC_URL}/ArchitVermaResume.pdf`} download="ArchitVermaResume.pdf">
                  <button className="downloadCv">Download Resume</button>
                </a>
              </div>
            </CSSTransition>
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
          <Route path="/random" element={<FunFactGenerator />} />
          <Route path="/projects/:projectId" element={<DescriptionPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;