import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './ProjectPage.css';
import cloud from "../src/assets/pacman211.jpg";
import land from "../src/assets/rapidiahost1.jpg";
import rapidia from "../src/assets/solar.png";
import fluent from "../src/assets/fluent.png"
import { useDrag } from '@use-gesture/react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import ProjectDialog from './components/ProjectDialog';
import Android from "./assets/Android.jpg";
import git from "./assets/git.png";
import gradle from "./assets/gradle.png";
import Kotlin from "./assets/Kotlin.png";
import Mediapipe from "./assets/mediapipe.png";
import ThreeJS from "./assets/threeJS.png";
import tensor from "./assets/tensor.jpg";
import HTML from "./assets/html.png";
import Javascript from "./assets/JS.jpg";
import CSS from "./assets/CSS.png";
import Python from "./assets/python.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IconButton from '@mui/material/IconButton';

const ProjectsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [cloud, land, rapidia, fluent];
  const slideTitles = ["PACMAN GAME", "RAPIDIA HOST", "SOLAR SYSTEM", "FLUENT HANDS"];
  const navigate = useNavigate(); // Use the useNavigate hook
  // useEffect(() => {
  //   toast.info('Click the project title to view project description.', {
  //     position: "top-center",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
  //     });
  // }, []); // Empty dependency array to run only on mount
  const [dragProps, setDragProps] = useSpring(() => ({
    x: 0,
    config: { tension: 300, friction: 40 }
  }));

  const goBack = () => {
    navigate(-1); // This will go back to the previous page in history
  };

  const [clickAnimation, setClickAnimation] = useSpring(() => ({
    scale: 1,
    config: { tension: 300, friction: 5 }
  }));

      // Add new state for dialog visibility and descriptions
      const [dialogOpen, setDialogOpen] = useState(false);
      const slideDescriptions = ["Description for PACMAN GAME", "Rapidia Software, designed for metal 3D printing, serves the dual purpose of simplifying the complexities of 3D printing processes while enhancing efficiency and output quality. It is a holistic solution, catering to the nuanced requirements of both professional and hobbyist users in the 3D printing industry. The software's standout feature is its comprehensive control over the 3D printing process. This includes advanced management of G-Code processing, real-time monitoring of print jobs, and efficient handling of print job queues. An intuitive graphical user interface makes the system accessible and easy to operate, even for users with limited technical expertise. In terms of implementation, Rapidia Software exhibits a blend of modern programming tools and robust hardware integration. Developed using JavaScript and TypeScript, it employs React for the frontend, ensuring a dynamic and responsive user interface. Node.js is utilized for backend services, providing a stable and scalable server-side environment. The software's microservice architecture, orchestrated through Docker, allows for modular development and deployment, enhancing maintainability and scalability. Hardware integration is a critical aspect of Rapidia Software. It employs a Raspberry Pi 4 for managing high-level tasks and communications, making the most of its processing capabilities for efficient data handling. Additionally, an Arduino board is integrated for direct control of the printer's hardware, executing Marlin firmware for precise and reliable printer operations. This synergy between software and hardware ensures that Rapidia Software not only simplifies the 3D printing process but also significantly elevates the quality and precision of the printing results. In essence, Rapidia Software represents a sophisticated convergence of software engineering and practical hardware application, making it a vital tool in modern metal 3D printing technology.", 
      "The Solar System project is an interactive, web-based 3D simulation of the solar system, built primarily with JavaScript and HTML. Utilizing the Three.js library, a powerful tool for 3D graphics, the software renders a visually striking depiction of celestial bodies, such as the sun and asteroids. Central to its functionality, `main.js` establishes a 3D scene, employing Three.js constructs like `THREE.Scene`, `THREE.PerspectiveCamera`, and `THREE.WebGLRenderer`. These elements are crucial for crafting 3D objects, controlling viewpoints, and managing the rendering process. The simulation of the sun is particularly notable, represented as a textured sphere with detailed lighting and material properties, enhancing its realism. Texture management is a key feature, with `THREE.TextureLoader` used to apply realistic images to the 3D models. This attention to visual detail is indicative of the project's emphasis on an immersive user experience. Additionally, the code's structure, including functions like `createAsteroid`, points to a modular and extensible approach. This design choice allows for easy additions and modifications to the simulation, potentially encompassing a broader range of celestial bodies. The user interface, as set up in `index.html`, is straightforward and focused on the 3D content. The minimalistic HTML structure emphasizes the graphical content, and the disabling of the context menu suggests an intent to maintain an uncluttered and immersive experience. In summary, the `Solar System` project is a sophisticated and visually engaging educational tool. Its use of advanced 3D graphics, combined with a well-organized and scalable codebase, makes it an impressive example of modern web-based simulations.",
      "Fluent Hands is an innovative Android application designed to bridge the communication gap between the hearing and the deaf communities through advanced sign language interpretation. This app epitomizes the fusion of technology and accessibility, harnessing the capabilities of modern Android development to create a tool that is both empowering and educational. At its heart, Fluent Hands utilizes cutting-edge gesture recognition technology. By leveraging the device's camera, the app interprets sign language gestures in real-time, translating them into text or audible speech. This feature not only facilitates seamless communication for the deaf and hard of hearing but also serves as a vital tool for those eager to learn and understand sign language. The app is developed using Java or Kotlin, languages known for their robustness and efficiency in Android development. Kotlin, especially, brings in contemporary programming paradigms and enhanced syntax, contributing to the application's performance and scalability. Android Studio, the chosen IDE for this project, provides a comprehensive suite of tools for effective development, debugging, and testing, ensuring a high-quality end product. In addition to its core functionality, Fluent Hands incorporates user authentication features, allowing for a personalized experience. Users can create profiles and customize settings, enhancing usability. The inclusion of an educational module underscores the app's dual role as both an interpretive tool and a learning resource. This module is designed to teach sign language, promoting inclusivity and understanding. The user interface of Fluent Hands is crafted with a focus on intuitiveness and ease of use, ensuring that navigating through the app is straightforward and user-friendly. Overall, Fluent Hands is more than just an app; it is a testament to how technology can be used for social good, breaking down communication barriers and fostering inclusivity."];
      const RapidiaTech = []
      const SolarTech = [ThreeJS, HTML, CSS, Javascript]
      const PacmanTech = [Python]
      const FluentTech= [Android,git,gradle,Kotlin,Mediapipe, tensor]
      const technologies = [PacmanTech, RapidiaTech, SolarTech, FluentTech];
      // Function to close the dialog
      const handleCloseDialog = () => {
          setDialogOpen(false);
      };
  

    // Modify Auto-slide functionality to pause when dialog is open
    useEffect(() => {
      if (!dialogOpen) { // Only set the interval if the dialog is not open
          const interval = setInterval(() => {
              setCurrentSlide(s => (s === slides.length - 1 ? 0 : s + 1));
          }, 5000); // Change every 5 seconds

          return () => clearInterval(interval);
      }
  }, [slides.length, dialogOpen]); // Add dialogOpen to the dependency array
  useEffect(() => {
    toast.info('Click the project title to view project description.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }, []); // Correct usage for single execution on mount
  

  // Optional: Modify drag functionality
  const bind = useDrag(({ down, movement: [mx] }) => {
      if (!dialogOpen) { // Only allow dragging if the dialog is not open
          setDragProps({ x: down ? mx : 0 });
          if (!down && Math.abs(mx) > 50) {
              mx > 0 ? goToPreviousSlide() : goToNextSlide();
          }
      }
  });

  // Clickable slides animation
  useEffect(() => {
    setClickAnimation({ scale: 1.05 });
    const timeoutId = setTimeout(() => setClickAnimation({ scale: 1 }), 1500); // Reset to normal after 1.5 seconds
    return () => clearTimeout(timeoutId);
  }, [setClickAnimation]);

        // Modify handleSlideClick to open the dialog
        const handleSlideClick = (index) => {
          setCurrentSlide(index);
          setDialogOpen(true); // Open the dialog
      };
  const goToPreviousSlide = () => {
    setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1);
  };

  return (
    <div className={`slideshow-container ${dialogOpen ? 'blur-background' : ''}`}>
      <ToastContainer />
      <ArrowBackIcon className="back-icon" onClick={() => goBack()} />
      <div style={{width:"100%",display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"flex-end"}}>
      <IconButton style={{width:"40px", height:"40px", zIndex:150}} className="arrow left-arrow" onClick={goToPreviousSlide}>
        <span>&lt;</span>
      </IconButton>
      <IconButton className="arrow right-arrow" style={{width:"40px", height:"40px", zIndex:150}} onClick={goToNextSlide}>
        <span>&gt;</span>
      </IconButton>
      </div> 
      {slides.map((slide, index) => (
        <animated.div key={index} className={`slide ${index === currentSlide ? 'active' : 'inactive'}`}
        style={{
                        backgroundImage: `url(${slide})`,
                        transform: dragProps.x.interpolate(x => `translate3d(${x}px, 0, 0)`),
                        ...clickAnimation
                      }}
                      onClick={() => {setCurrentSlide(index); handleSlideClick(currentSlide)}}>
          <animated.div {...bind()} className="slide-title" onClick={() => {setCurrentSlide(index);handleSlideClick(currentSlide)}} style={{ x: dragProps.x, transform:"translate(-50%,-50%)" }}>
            {slideTitles[index]}
          </animated.div>
        </animated.div>
      ))}
            {/* Add the ProjectDialog component */}
      <ProjectDialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          slideIndex={currentSlide}
          icons={technologies[currentSlide]}
          slides={slides}
          slideTitles={slideTitles}
          slideDescriptions={slideDescriptions}
      />
      <div className="dots-container">
        {slides.map((_, index) => (
          <span key={index} className={`dot ${index === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
