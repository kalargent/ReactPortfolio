import React from "react";
import "./style.css";

function Featured(props) {
  return (
    <div className="card horizontal" id="feature-card">
        <div className="card-image">
        <img alt="placeholder" src="https://lorempixel.com/100/190/nature/6" />
      </div>
      <div class="card-stacked">
        <div class="card-content">
        <h4>Title</h4>
          <p>I am a very simple card. I am good at containing small bits of information.</p>
        </div>
        <div class="card-action">
        <i class="fab fa-github-square fa-lg"></i>
        <i class="fas fa-link fa-lg"></i>
        <i class="fas fa-video fa-lg"></i>
        </div>
      </div>
    
    </div>
  );
}

export default Featured;
