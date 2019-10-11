import React from "react";
import "./App.css";
// import Featured from './components/Featured';
// import ProjectCard from "./components/ProjectCard";
import projects from "./projects.json";
import featured from "./featured.json";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
// import About from './components/About';

class App extends React.Component {
  state = {
    projects,
    featured
  };

  render() {
    return (
      <div>
        <LandingPage />
        <AboutPage />
        <PortfolioPage 
          projects={this.state.projects}
        />
      </div>
    );
  }
}

// render() {
//   return (
//     <div className="container">
//     <div className="row">
//       <About /> </div>
//     <div className="row">
//       <div >
//       {this.state.featured.map(projects => (
//               <Featured
//                 id={projects.id}
//                 key={projects.id}
//                 title={projects.name}
//                 image={projects.image}
//                 git={projects.git}
//                 prod={projects.prod}
//                 video={projects.video}
//               />
//             ))}
//       </div>
//     </div>

//     <div className="row">
//       {/* <div className="col s9"> */}
//       {this.state.projects.map(projects => (
//               <ProjectCard
//                 id={projects.id}
//                 key={projects.id}
//                 title={projects.name}
//                 image={projects.image}
//                 git={projects.git}
//                 prod={projects.prod}
//                 video={projects.video}
//               />
//             ))}
//       {/* </div> */}

//       {/* <div className="col s3"><About /></div> */}
//     </div>
//   </div>
//   )
// }

export default App;
