import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './AboutMe.css';
import profileImage from './assets/jaipur2.jpg';
import { Zoom } from 'react-reveal';

const AboutMe = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/'); // Navigate to the home route
  };

  return (
    <div className="container">
      <div className="fixed-button">
        <IconButton onClick={handleBackClick} className="back-button" style={{ color: 'white' }}>
          <ArrowBackIcon />
          <span className='backtext' style={{ paddingLeft: "20px" }}>Back to Home</span>
        </IconButton>
      </div>
      <Zoom>
      <h1 className="about-title">
          About <span style={{ color: '#E57373' }}>Me.</span>
      </h1>
      <div className="profile-section">
        <img src={profileImage} alt="Profile" className="profile-photo" />
        <div className="bio-section">
          <p className="bio">
            Hello! I'm <span style={{ color: '#E57373' }}>Archit Verma</span>, a 23-year-old international student from India, currently in my <span style={{color:'#E57373'}}>fourth year at Simon Fraser University </span>. My journey in tech has been quite exciting. I've completed three fulfilling work terms as a <span style={{color: '#E57373'}}>Full-stack Engineer at Rapidia Tech Inc</span>, a pioneering metal 3D printer manufacturer based in <span style={{color: '#E57373'}}>Vancouver, BC</span>. This role not only honed my software engineering skills but also deepened my passion for cutting-edge technology.
            <br /><br />
            My academic endeavors have been equally rich, delving into diverse areas like Android development, computer vision, deep learning, computer graphics, computer architecture, and operating systems. These experiences have shaped me into a well-rounded tech enthusiast, eager to explore and innovate.
            <br /><br />
            My technical expertise includes:
            <ul>
            <li><strong style={{ color: '#E57373' }}>Frontend Development:</strong> Proficient in ReactJS, JavaScript, TypeScript, CSS, and HTML.</li>
            <li><strong style={{ color: '#E57373' }}>Backend Development:</strong> Skilled in Python and Django, with additional expertise in Node.js.</li>
            <li><strong style={{ color: '#E57373' }}>Systems Programming:</strong> Well-versed in C/C++ and Java.</li>
            <li><strong style={{ color: '#E57373' }}>Mobile App Development:</strong> Experienced in Kotlin for Android platform.</li>
            <li><strong style={{ color: '#E57373' }}>Web Technologies:</strong> Knowledgeable in XML.</li>
            <li><strong style={{ color: '#E57373' }}>DevOps Tools:</strong> Familiar with Docker and Nginx.</li>
            <li><strong style={{ color: '#E57373' }}>Hardware and Firmware:</strong> Hands-on experience with Arduino, Raspberry Pi, and Marlin firmware.</li>
            <li><strong style={{ color: '#E57373' }}>Machine Learning and Computer Vision:</strong> Experienced in using TensorFlow, MediaPipe, and OpenCV for advanced computational tasks and AI-driven applications.</li>
          </ul>
            <br />
            But there's more to me than just my academic and professional life. I'm a xenophile at heart, always curious about different cultures and perspectives. In my downtime, you'll often find me immersed in the world of strategic and competitive gaming. I believe these games sharpen my decision-making and strategic planning skills, crucial traits for both my personal and professional growth.
            <br /><br />
            Join me on this journey of continuous learning, technological exploration, and fun-filled gaming adventures!
          </p>
        </div>
      </div>
      </Zoom>
    </div>
  );
};

export default AboutMe;
