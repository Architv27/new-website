import React from 'react';
import { useParams } from 'react-router-dom';
import './DescriptionPage.css';
import cloud from "../src/assets/pacman211.jpg";
import land from "../src/assets/rapidiahost1.jpg";
import rapidia from "../src/assets/solar.png";
import fluent from "../src/assets/fluent.png"


const projectInfo = {
  pacman: {
    title: "PACMAN GAME",
    subtitle: "",
    descriptionTitle: "A classic arcade game recreated in a modern web version.",
    descriptionContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    mainImage: cloud,
    detailText: ""
    // ... other details
  },
  rapidiahost: {
    title: "RAPIDIA HOST",
    subtitle: "Rapidia",
    descriptionTitle: "A web hosting solution for rapid deployment.",
    descriptionContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    mainImage: land,
    detailText: ""
    // ... other details
  },
  solarsystem: {
    title: "SOLAR SYSTEM",
    subtitle: "",
    descriptionTitle: "An educational tool to explore the solar system.",
    descriptionContent:"",
    mainImage: rapidia,
    detailText: ""
    // ... other details
  },
  fluenthands: {
    title: "FLUENT HANDS",
    subtitle: "Sign Language Interpreter",
    descriptionTitle: "An app to translate sign language in real-time.",
    descriptionContent:"",
    mainImage: fluent,
    detailText: ""
    // ... other details
  }
};

const DescriptionPage = () => {
    const { projectId } = useParams();
    const project = projectInfo[projectId];
  
    if (!project) {
      return <div>Project not found</div>;
    }
  
    return (
        <div className="description-page-container">
          <div className="project-cover">
            {/* Text container that overlays the image */}
            <div className="project-cover-text">
              <h1>{project.title}</h1>
              <h2>{project.subtitle}</h2>
            </div>
          </div>
          <div className="project-content">
            <h3>{project.descriptionTitle}</h3>
            <p>{project.descriptionContent}</p>
            {/* Other content here */}
          </div>
        </div>
      );
    };
  
  export default DescriptionPage;
