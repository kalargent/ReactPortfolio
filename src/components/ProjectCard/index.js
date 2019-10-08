import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="card-content">
        <span class="card-title" text={props.name}></span>
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
