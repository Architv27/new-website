// import React, { useRef, useEffect, useState } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import DNAHelix from './threejs/DNA';


// const AboutMe = () => {
//   const [showBackButton, setShowBackButton] = useState(false);

//   const handleScroll = (event) => {
//     const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
//     setShowBackButton(bottom);
//   };

//   return (
//     <div onScroll={handleScroll} style={{ height: '200vh', position: 'relative', overflowY: 'scroll' }}>
//       <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
//         <DNAHelix/>
//       </div>
//       <div style={{ height: '100vh', position: 'relative', zIndex: 1 }}>
//         {/* Overlay content */}
//         <div style={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           color: 'white',
//           textAlign: 'center'
//         }}>
//           <h1>About Me</h1>
//           <p>Archit Verma is an experienced software engineer...</p>
//         </div>
//       </div>
//       <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
//         {/* More content here */}
//         {showBackButton && (
//           <button onClick={() => window.history.back()}>Go Back</button>
//         )}
//       </div>
//     </div>
//   );
// };

// // export default AboutMe;
// import React, { useRef, useState } from 'react';
// import DNAHelix from './threejs/DNA';
// import Zoom from 'react-reveal/Zoom';  // Import Zoom from react-reveal

// const AboutMe = () => {
//   const [showBackButton, setShowBackButton] = useState(false);

//   const handleScroll = (event) => {
//     const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
//     setShowBackButton(bottom);
//   };

//   return (
//     <div onScroll={handleScroll} style={{ height: '100vh', overflowY: 'scroll' }}>
//       <div style={{ position: 'fixed', top: 0, width: '100%', height: '100%' }}>
//         <DNAHelix />
//       </div>
//       <Zoom> {/* Wrap the content with Zoom for the animation */}
//         <div style={{ height: '100vh', position: 'relative', zIndex: 1 }}>
//           {/* Overlay content */}
//           <div style={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             color: 'white',
//             textAlign: 'center'
//           }}>
//             <h1>I am Archit Verma</h1>
//             <p>Archit Verma is an experienced software engineer...</p>
//           </div>
//         </div>
//       </Zoom>
//       {showBackButton && (
//         <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
//           <button onClick={() => window.history.back()}>Go Back</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AboutMe;
// import React, { useRef, useState } from 'react';
// import DNAHelix from './threejs/DNA';
// import Zoom from 'react-reveal/Zoom';  // Import Zoom from react-reveal

// const AboutMe = () => {
//   const [showBackButton, setShowBackButton] = useState(false);

//   const handleScroll = (event) => {
//     const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
//     setShowBackButton(bottom);
//   };

//   return (
//     <div onScroll={handleScroll} style={{ height: '200vh', overflowY: 'scroll' }}>
//       <div style={{ position: 'fixed', top: 0, width: '100%', height: '100%' }}>
//         <DNAHelix />
//       </div>
//       <Zoom> {/* First section */}
//         <div style={{ height: '50%', position: 'relative', zIndex: 1 }}>
//           {/* Overlay content for the first section */}
//           <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
//             <h1>I am Archit Verma</h1>
//             <p>Brief introduction...</p>
//           </div>
//         </div>
//       </Zoom>
//       <Zoom> {/* Second section */}
//         <div style={{ height: '50%', position: 'relative', zIndex: 1 }}>
//           {/* Overlay content for the second section */}
//           <div style={{ position: 'absolute', top: '75%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
//             <h2>My Experience</h2>
//             <p>Detailed experience description...</p>
//           </div>
//         </div>
//       </Zoom>
//       {showBackButton && (
//         <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
//           <button onClick={() => window.history.back()}>Go Back</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AboutMe;
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
