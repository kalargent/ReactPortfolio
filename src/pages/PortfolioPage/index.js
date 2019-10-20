import React from "react";
import projects from "../../projects.json";
import ProjectCard from "../../components/ProjectCard";
// import project from "../../components/Projects/projects"

import "./style.css";

const PortfolioPage = props => {
  return (
    // <div>
    //   {project.map((item, i) => (
    //     <Project render={item.render} key={i} />
    //   ))}
    // </div>

    <div className="portfolio-page">
      <div className="portfolio-title">
        <h2>Portfolio</h2>
        <h5>Check out some of my favorite projects! </h5>
      </div>

      
      <div className="project-cards">
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
            logo={projects.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
