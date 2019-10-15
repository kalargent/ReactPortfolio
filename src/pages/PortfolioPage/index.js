import React from "react"; 
import projects from "../../projects.json"; 
import ProjectCard from "../../components/ProjectCard"

import './style.css'; 

const PortfolioPage = (props) =>{

    return (
        <div className="portfolio-page"> 
            <div className="portfolio-title">
               <h2>Portfolio</h2> 
            </div>
            <div>
            {props.projects.map(projects => (
              <ProjectCard
                id={projects.id}
                key={projects.id}
                title={projects.name}
                image={projects.image}
                git={projects.git}
                prod={projects.prod}
                video={projects.video}
                description={projects.description}
              />
            ))}
            </div>
        </div>
    )
}

export default PortfolioPage; 