import React, { useState, useEffect } from 'react';
import './ProjectPage.css';

import cloud from "../src/assets/pacman21.jpg";
import land from "../src/assets/rapidiahost.jpg";
import rapidia from "../src/assets/land.png";
import Zoom from 'react-reveal/Zoom';

const ProjectsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [cloud, land, rapidia];
  const slideTitles = ["TITLE 1", "TITLE 2", "TITLE 3"];
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [slides.length]); // Add slides.length to the dependency array

  const goToPreviousSlide = () => {
    console.log('Previous slide button clicked'); // For debugging
    setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1);
  };
  
  const goToNextSlide = () => {
    console.log('Next slide button clicked'); // For debugging
    setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1);
  };
  

  return (
    <Zoom>
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <Zoom key={index} when={index === currentSlide}>
          <div
            className={`slide ${index === currentSlide ? 'active' : 'inactive'}`}
            style={{ backgroundImage: `url(${slide})` }}
            >
            <div className="slide-title">{slideTitles[index]}</div>
          </div>
        </Zoom>
        ))}
        <div className="dots-container">
          {slides.map((_, index) => (
            <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            ></span>
            ))}
        </div>
        <button className="arrow left-arrow" onClick={goToPreviousSlide}>&lt;</button>
        <button className="arrow right-arrow" onClick={goToNextSlide}>&gt;</button>
      </div>
    </Zoom>
  );
};

export default ProjectsPage;
