import { ReactComponent as GithubLight } from "../assets/light-mode/GH-light.svg";
import { ReactComponent as GithubDark } from "../assets/dark-mode/GH-dark.svg";
import { ReactComponent as ScreenLight } from "../assets/light-mode/tv-light.svg";
import { ReactComponent as ScreenDark } from "../assets/dark-mode/tv-dark.svg";
import projectsArray from "./ProjectsArray";
// import { Link } from "react-router-dom";

function Projects(props) {
  const { lightModeOn, projectsRef } = props;

  return (
    <section className="projects" ref={projectsRef} id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        <div className="projects-grid">
          {/* <div className="project-column"> */}
          {projectsArray.map((project, index) => {
            return (
              <div className="project" key={index}>
                <h2>{project.title}</h2>
                <div className="gif-box">
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
                    <img
                      src={project.gif}
                      style={{ borderRadius: "3px" }}
                      title={`${project.title} Live Link`}
                    />
                  </a>
                </div>
                <div>{project.description}</div>
                <div className="icons">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    {lightModeOn === "light" ? <ScreenLight /> : <ScreenDark />}
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    {lightModeOn === "light" ? <GithubLight /> : <GithubDark />}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="button-container">
        <Link to={"/more-projects"}>
          <button>More projects</button>
        </Link>
      </div> */}
    </section>
  );
}

export default Projects;
