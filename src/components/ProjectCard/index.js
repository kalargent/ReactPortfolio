import React from "react";
// import projects from "../../projects.json"; 
import "./style.css";

function ProjectCard(props) {
  return (

    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-content black-text">
            <span className="title">{props.title}</span>
            <p className="description">{props.description}</p>
          </div>

          <div className="card-action">  
           <a href={props.git} target="blank"> <i class="fab fa-github-square fa-md"></i></a>
           <a href={props.prod} target="blank"> <i class="fas fa-link fa-md"></i></a>
           <a href={props.video}> <i class="fas fa-video fa-md"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
