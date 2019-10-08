import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="card-content">
      <span className="card-title">Title</span>
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
