import React, { useRef, useState } from 'react';
import DNAHelix from './threejs/DNA';
import Zoom from 'react-reveal/Zoom';
import me from './assets/me.jpg';

const AboutMe = () => {
  const [showBackButton, setShowBackButton] = useState(false);

  const handleScroll = (event) => {
    const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
    setShowBackButton(bottom);
  };

  return (
    <div onScroll={handleScroll} style={{ height: '300vh', overflowY: 'scroll' ,backgroundColor: '#121212' }}>
      <div style={{ position: 'fixed', top: 0, width: '100%', height: '100%' }}>
        <DNAHelix />
      </div>
      <Zoom> {/* First section */}
        <div style={{ height: '100vh', position: 'relative', zIndex: 1 }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center', width:"80%" }}>
            <h1>About me</h1>
            <p>I am Archit Verma, a proficient software engineer with a deep interest in full-stack development. My technical skills span a range of programming languages and web technologies, including C/C++, Java, Python, and ReactJS. I have a strong foundation in software architecture and API development. Alongside my professional pursuits in technology, I am passionate about traveling and gaming. These personal interests provide me with a balanced and diverse perspective, enriching my professional expertise and creativity in the dynamic field of software engineering.</p>
          </div>
        </div>
      </Zoom>
      <Zoom> {/* Second section */}
        <div style={{ height: '100vh', position: 'relative', zIndex: 1 }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center', width:"80%"}}>
            <h2>My Experience</h2>
            <h3>Full Stack Software Engineer (Rapidia Tech Inc, Jan 2022 - Apr 2023)</h3>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', maxWidth:"100%" }}>
              <div style={{ maxWidth: '80%' }}> {/* Adjusted width from 60% to 80% */}
                <p>As a Full-Stack Developer on the Rapidia Software project, I played a key role in creating an advanced solution for metal 3D printing, focusing on efficiency and quality for both professional and amateur users. My work involved implementing complex features like G-Code management, real-time monitoring, and print job queue handling, leveraging JavaScript, TypeScript, and React for the frontend, and Node.js for backend stability. I innovated by integrating Raspberry Pi 4 and Arduino for seamless hardware control, utilizing Docker in a microservice architecture for scalability. This project exemplified the fusion of software prowess and hardware integration, significantly enhancing the 3D printing process.</p>
              </div>
              <img src={me} style={{ maxWidth: '50%', height: 'auto', paddingLeft: 60 }} alt="Archit Verma"></img>
            </div>
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
