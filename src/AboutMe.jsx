import React, { useRef, useState } from 'react';
import DNAHelix from './threejs/DNA';
import Zoom from 'react-reveal/Zoom';

const AboutMe = () => {
  const [showBackButton, setShowBackButton] = useState(false);

  const handleScroll = (event) => {
    const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
    setShowBackButton(bottom);
  };

  return (
    <div onScroll={handleScroll} style={{ height: '300vh', overflowY: 'scroll' }}>
      <div style={{ position: 'fixed', top: 0, width: '100%', height: '100%' }}>
        <DNAHelix />
      </div>
      <Zoom> {/* First section */}
        <div style={{ height: '100vh', position: 'relative', zIndex: 1 }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
            <h1>About me</h1>
            <p>I am Archit Verma, a proficient software engineer with a deep interest in full-stack development. My technical skills span a range of programming languages and web technologies, including C/C++, Java, Python, and ReactJS. I have a strong foundation in software architecture and API development. Alongside my professional pursuits in technology, I am passionate about traveling and gaming. These personal interests provide me with a balanced and diverse perspective, enriching my professional expertise and creativity in the dynamic field of software engineering.</p>
          </div>
        </div>
      </Zoom>
      <Zoom> {/* Second section */}
        <div style={{ height: '100vh', position: 'relative', zIndex: 1 }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
            <h2>My Experience</h2>
            <p>Details about my professional journey, key projects, and roles...</p>
          </div>
        </div>
      </Zoom>
      <Zoom> {/* Third section */}
        <div style={{ height: '100vh', position: 'relative', zIndex: 1 }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
            <h3>Tools & Skills</h3>
            <p>Information about the technical tools and skills I possess, including programming languages and software expertise...</p>
          </div>
        </div>
      </Zoom>
      {/* Back Button Section */}
    </div>
  );
};


export default AboutMe;
