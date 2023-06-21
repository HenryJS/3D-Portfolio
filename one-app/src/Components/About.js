import React from 'react';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "..//Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons";



const About = () => {
  return <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading"> About </p>
                <h1 className="primary-heading">
                    Food Is an Important Part of a Balanced Diet
                </h1>
                <p className="primary-text">
                    A balanced diet to get your day started, healthy and happy by your day!
                </p>
                <p className="primary-text">
                Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes.
                </p>
            <div className="about-buttons-container">
                <button className="secondary-button"> Learn more</button>
                <button className="watch-video-button"> Watch Video</button>

            </div>

            </div>
         </div>
  
};

export default About; 