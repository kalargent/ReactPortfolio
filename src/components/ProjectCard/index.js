import React from "react";
// import projects from "../../projects.json"; 
import "./style.css";

function ProjectCard(props) {
  return (

    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-content black-text">
            <span className="card-title">{props.title}</span>
          </div>

          <div className="card-action">  
           <a href={props.git} target="blank"> <i class="fab fa-github-square fa-lg"></i></a>
           <a href={props.prod} target="blank"> <i class="fas fa-link fa-lg"></i></a>
           <a href={props.video}> <i class="fas fa-video fa-lg"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
