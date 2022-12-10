import { ReactComponent as GithubLight } from "../assets/light-mode/GH-light.svg";
import { ReactComponent as GithubDark } from "../assets/dark-mode/GH-dark.svg";
import { ReactComponent as ScreenLight } from "../assets/light-mode/tv-light.svg";
import { ReactComponent as ScreenDark } from "../assets/dark-mode/tv-dark.svg";
import ExtraProjectsArray from "./ExtraProjectsArray";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

function MoreProjectsPage(props) {
  const { lightModeOn } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <header className="header">
        <Header lightModeOn={lightModeOn} />
      </header>

      <div className="projects container">
        <h1>More Projects</h1>
        <div className="projects-container">
          <div className="projects-grid">
            {ExtraProjectsArray.map((project, index) => {
              return (
                <div className="project" key={index}>
                  <h2>{project.title}</h2>
                  <div className="gif-box">
                    <a href={project.liveLink} target="_blank" rel="noreferrer">
                      <img
                        src={project.image}
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
      </div>
      <Footer />
    </div>
  );
}

export default MoreProjectsPage;
