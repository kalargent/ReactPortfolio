import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img alt="placeholder" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
        <i class="fab fa-github-square fa-lg"></i>
        <i class="fas fa-link fa-lg"></i>
        <i class="fas fa-video fa-lg"></i>
        </div>
      </div>
    </div>
  </div>
 
  );
}

export default ProjectCard;
