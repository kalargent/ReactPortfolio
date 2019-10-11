import React from "react";
import "./style.css";

function About() {
  return (
    <div>
      <div className="row">
        <h4>About Me</h4>
        {/* <div className="card-content">
        <h5>About </h5> 
      </div> */}
      </div>
      <div className="row">
        <div className="col sm3"> 
        Picture goes here 
        </div>
        <div className="col sm9">
          This is text about me. 
        </div>
      </div>
    </div>
  );
}

export default About;
