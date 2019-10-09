import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img alt="placeholder" src={props.image} />
            <span className="card-title">{props.title}</span>
          </div>

          <div className="card-action">  
          <a href={props.git} target="blank"> <i class="fab fa-github-square fa-lg"></i></a>
            
            <i class="fas fa-link fa-lg"></i>
            <i class="fas fa-video fa-lg"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
