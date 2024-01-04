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

const ProjectsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [cloud, land, rapidia, fluent];
  const slideTitles = ["PACMAN GAME", "RAPIDIA HOST", "SOLAR SYSTEM", "FLUENT HANDS"];
  const navigate = useNavigate(); // Use the useNavigate hook

  const [dragProps, setDragProps] = useSpring(() => ({
    x: 0,
    config: { tension: 300, friction: 40 }
  }));

  const [clickAnimation, setClickAnimation] = useSpring(() => ({
    scale: 1,
    config: { tension: 300, friction: 5 }
  }));

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(s => (s === slides.length - 1 ? 0 : s + 1));
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  // Clickable slides animation
  useEffect(() => {
    setClickAnimation({ scale: 1.05 });
    const timeoutId = setTimeout(() => setClickAnimation({ scale: 1 }), 1500); // Reset to normal after 1.5 seconds
    return () => clearTimeout(timeoutId);
  }, [setClickAnimation]);

  const bind = useDrag(({ down, movement: [mx] }) => {
    setDragProps({ x: down ? mx : 0 });
    if (!down && Math.abs(mx) > 50) {
      mx > 0 ? goToPreviousSlide() : goToNextSlide();
    }
  });
  // Add a function to handle slide click
  const handleSlideClick = (index) => {
    // This assumes you have routes set up for each project
    const projectRoutes = ['/pacman', '/rapidiahost', '/solarsystem', '/fluenthands'];
    navigate(projectRoutes[index]);
  };
  const goToPreviousSlide = () => {
    setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1);
  };

  return (
    <div className="slideshow-container">
      <ArrowBackIcon className="back-icon" onClick={() => navigate(-1)} /> 
      {slides.map((slide, index) => (
        <animated.div key={index} className={`slide ${index === currentSlide ? 'active' : 'inactive'}`}
                      style={{
                        backgroundImage: `url(${slide})`,
                        transform: dragProps.x.interpolate(x => `translate3d(${x}px, 0, 0)`),
                        ...clickAnimation
                      }}
                      onClick={() => {setCurrentSlide(index); handleSlideClick(currentSlide)}}>
          <animated.div {...bind()} className="slide-title" style={{ x: dragProps.x, transform:"translate(-50%,-50%)" }}>
            {slideTitles[index]}
          </animated.div>
        </animated.div>
      ))}
      <div className="dots-container">
        {slides.map((_, index) => (
          <span key={index} className={`dot ${index === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(index)}></span>
        ))}
      </div>
      <button className="arrow left-arrow" onClick={goToPreviousSlide}>&lt;</button>
      <button className="arrow right-arrow" onClick={goToNextSlide}>&gt;</button>
    </div>
  );
};

export default ProjectsPage;
