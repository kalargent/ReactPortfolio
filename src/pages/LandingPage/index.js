import React from "react"; 
import './style.css'; 


const LandingPage = (props) =>{
    return (
        <div className="landing-page">
            {/* <div className="disclaimer">
            The user experience for this site is currently under construction. Scroll down to check out my portfolio. <br></br>
            <a href="https://kalargent.github.io/bootstrap-portfolio/index.html" target="blank">Click Here</a> to view my old site.
            </div>  */}
            <div className="intro">
                <h2>Hi, I'm Karen</h2> 
            </div>
            <div className="tagline">
                <h5>Product Manager | Full Stack Web Developer </h5>
            </div>

            <div className="social">
            <a href = "https://www.linkedin.com/in/karen-largent-ab01494/" rel = "noopener noreferrer" target="_blank"><i className="fab fa-linkedin fa-3x"></i></a> 
            <a href = "https://github.com/kalargent" rel = "noopener noreferrer" target="_blank"><i class="fab fa-github-alt fa-3x"></i></a> 
            <a href="../../assets/KAL Resume Full Stack Dev.pdf" target="_blank"><i className="fas fa-file fa-3x"></i></a>
            </div>
        </div>
    )
}

export default LandingPage; 