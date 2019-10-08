import React from "react";
import "./style.css";

function Featured(props) {
  return (
    <div className="card" id="feature-card">
      <div className="card-content">
        <span class="card-title" text={props.name}></span>
      </div>
    </div>
  );
}

export default Featured;
