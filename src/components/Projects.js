import Cico from "../assets/projects/cico.gif";
import Memory from "../assets/projects/memory.gif";
import Shopping from "../assets/projects/shopping.gif";
import Waldo from "../assets/projects/waldo.gif";
import { ReactComponent as GithubLight } from "../assets/light-mode/GH-light.svg";
import { ReactComponent as GithubDark } from "../assets/dark-mode/GH-dark.svg";
import { ReactComponent as ScreenLight } from "../assets/light-mode/tv-light.svg";
import { ReactComponent as ScreenDark } from "../assets/dark-mode/tv-dark.svg";

function Projects(props) {
  const { lightModeOn, projectsRef } = props;
  return (
    <section className="projects" ref={projectsRef}>
      <h1>Projects</h1>
      <div className="projects-container">
        {/* <div className="project-column"> */}
        <div className="projects-grid">
          <div className="project">
            <h2>Cico Mode</h2>
            <div className="gif-box">
              <img src={Cico} />
            </div>
            <div>
              Cico Mode is a web application that predicts weight over a period of time. Using
              inputs from a form, an HTML table is generated. It leverages React Hooks. I utilize
              Firebase for the backend, and an API for the BMI calculator.
            </div>
            <div className="icons">
              <a
                href="https://wise-guru.github.io/cico-mode/"
                target="_blank"
                rel="noopener noreferrer">
                {lightModeOn === "light" ? <ScreenLight /> : <ScreenDark />}
              </a>
              <a
                href="https://github.com/wise-guru/cico-mode"
                target="_blank"
                rel="noopener noreferrer">
                {lightModeOn === "light" ? <GithubLight /> : <GithubDark />}
              </a>
            </div>
          </div>

          <div className="project">
            <h2>Memory Time</h2>
            <div className="gif-box">
              <img src={Memory} />
            </div>
            <div>
              A memory card game built with React Functional Components. Players must click through
              each character once to win. With each click, the state is updated and the cards are
              shuffled accordingly.
            </div>

            <div className="icons">
              <a
                href="https://wise-guru.github.io/memory-card/"
                target="_blank"
                rel="noopener noreferrer"
                title="Live Link">
                {lightModeOn === "light" ? <ScreenLight /> : <ScreenDark />}
              </a>
              <a
                href="https://github.com/wise-guru/memory-card"
                target="_blank"
                rel="noopener noreferrer"
                title="Source Code">
                {lightModeOn === "light" ? <GithubLight /> : <GithubDark />}
              </a>
            </div>
          </div>
          {/* </div> */}

          {/* <div className="project-column"> */}
          <div className="project">
            <h2>Useless Inventions</h2>
            <div className="gif-box">
              <img src={Shopping} />
            </div>
            <div>
              A shopping cart web application that takes you through a simulated online shopping
              experience. This app makes strong use of storing state and React client-side routing.
              It heavily leverages props being passed down through the component tree and further
              deconstructs them to display specific product information.
            </div>
            <div className="icons">
              <a
                href="https://wise-guru.github.io/shopping-cart/"
                target="_blank"
                rel="noopener noreferrer">
                {lightModeOn === "light" ? <ScreenLight /> : <ScreenDark />}
              </a>
              <a
                href="https://github.com/wise-guru/shopping-cart"
                target="_blank"
                rel="noopener noreferrer">
                {lightModeOn === "light" ? <GithubLight /> : <GithubDark />}
              </a>
            </div>
          </div>

          <div className="project">
            <h2>Where&apos;s Waldo</h2>
            <div className="gif-box">
              <img src={Waldo} />
            </div>
            <div>
              A photo tagging app created with React. A key element of this project was calculating
              character coordinates based on dynamic window sizes, and checking user input against
              stored coordinated in Firebase.
            </div>
            <div className="icons">
              <a
                href="https://wise-guru.github.io/wheres-waldo/"
                target="_blank"
                rel="noopener noreferrer">
                {lightModeOn === "light" ? <ScreenLight /> : <ScreenDark />}
              </a>
              <a
                href="https://github.com/wise-guru/wheres-waldo"
                target="_blank"
                rel="noopener noreferrer">
                {lightModeOn === "light" ? <GithubLight /> : <GithubDark />}
              </a>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
