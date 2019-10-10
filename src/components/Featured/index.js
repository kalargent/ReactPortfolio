import React from "react";
import "./style.css";

function Featured(props) {
  return (
    <div className="card-panel" id="feature-card">
        <div className="card-image">
        <img alt="placeholder" src={props.image} />
      </div>
      <div class="card-stacked">
        <div class="card-content">
        <span className="card-title">{props.title}</span>
          <p>Put a blurb about the app here.</p>
        </div>
        <div class="card-action">
          <a href={props.git} target="blank"> <i class="fab fa-github-square fa-lg"></i></a>
          <a href={props.prod} target="blank"> <i class="fas fa-link fa-lg"></i></a>
          <a href={props.video}> <i class="fas fa-video fa-lg"></i></a>
        </div>
      </div>
    
    </div>
  );
}

export default Featured;
