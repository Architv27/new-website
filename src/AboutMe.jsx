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
            <h1>I am Archit Verma</h1>
            <p>A brief introduction about who I am and my interests...</p>
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
