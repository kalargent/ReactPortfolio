import React from "react";
import "./style.css";

const AboutPage = props => {
  return (
    <div className="about-page">
      <div className="about-title">
        <h2>About Me</h2>
      </div>

      <div className="about-text">
         <h5>17+ years in the software industry with previous roles in product management, business analysis, and technical writing. </h5>
       
         <h5>        I've spent the past six months expanding my skills through a Coding Bootcamp with a focus on Full Stack Web Development. 
</h5>
      <h5>I have a passion for simply designed web apps that catch the imagination and keep a user's attention.</h5>
      </div>
     
      <div className="tech-icons">
      <i className="fab fa-html5 fa-5x"></i>
      <i className="fab fa-css3-alt fa-5x"></i>
      <i className="fab fa-js fa-5x"></i>
      <i className="fab fa-node-js fa-5x"></i>
      <i className="fab fa-react fa-5x"></i>
      <i className="fas fa-database fa-5x"></i>
      </div>
    </div>
  );
};

export default AboutPage;
