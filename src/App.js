import React from "react";
import "./App.css";
import Featured from './components/Featured';
import ProjectCard from "./components/ProjectCard";
import projects from "./projects.json"; 
import featured from "./featured.json"; 
import About from './components/About'; 

class App extends React.Component {
  state = {
    projects,
    featured 
  };

  render() { 
    return (
      <div className="container">
      <div className="row"> 
      <About />
      </div>  
      <div className="row">
        <div >
        {this.state.featured.map(projects => (
                <Featured
                  id={projects.id}
                  key={projects.id}
                  title={projects.name}
                  image={projects.image}
                  git={projects.git}
                  prod={projects.prod}
                  video={projects.video}
                />
              ))}
        </div>
      </div>
      
      <div className="row">
        {/* <div className="col s9"> */}
        {this.state.projects.map(projects => (
                <ProjectCard
                  id={projects.id}
                  key={projects.id}
                  title={projects.name}
                  image={projects.image}
                  git={projects.git}
                  prod={projects.prod}
                  video={projects.video}
                />
              ))}
        {/* </div> */}

        {/* <div className="col s3"><About /></div> */}
      </div>
    </div>
    )
  }

}

// render() {
//   return (
//     <div className="container">
//       <div className="row">THIS IS ROW 1 - HEADER</div>
//       <div className="row">
//         <div className="col s9">
//           <Featured />
//         </div>
//         <div className="col s3">R2 COL 2 - ABOUT ME </div>
//       </div>
//       <div className="row">
//         <div className="col s9">R3 COL1 - OTHER PROJECTS </div>
//         <div className="col s3">R3 COL 2 - EMPTY </div>
//       </div>
//     </div>
//   );
// }
// }

export default App;
