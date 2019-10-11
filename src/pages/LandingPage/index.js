import React from "react"; 
import './style.css'; 


const LandingPage = (props) =>{
    return (
        <div className="landing-page"> 
            <div className="intro">
                <h2>Hi, I'm Karen</h2> 
            </div>
            <div className="tagline">
                <h5>Product Manager | Full Stack Dev | Something else </h5>
            </div>

            <div className="social">
            <a href = "https://www.linkedin.com/in/karen-largent-ab01494/" rel = "noopener noreferrer" target="_blank"><i className="fab fa-linkedin fa-3x"></i></a> 
            <a href = "https://github.com/kalargent" rel = "noopener noreferrer" target="_blank"><i className="fab fa-github-square fa-3x"></i></a> 
            <i class="fas fa-file fa-3x"></i>
            </div>
        </div>
    )
}

export default LandingPage; 