import Cico from "../assets/projects/cico.gif";
import Memory from "../assets/projects/memory.gif";
import Shopping from "../assets/projects/shopping.gif";
import Waldo from "../assets/projects/waldo.gif";

function Projects() {
  return (
    <section className="projects-container">
      <h1>Projects</h1>

      <div className="project-column">
        <div className="project">
          <div className="gif-box">
            <img src={Cico} />
          </div>
          <div>Description</div>
          <div>Cico Mode</div>
        </div>

        <div className="project">
          <div className="gif-box">
            <img src={Memory} />
          </div>
          <div>Description</div>
          <div>Cico Mode</div>
        </div>
      </div>

      <div className="project-column">
        <div className="project">
          <div className="gif-box">
            <img src={Shopping} />
          </div>
          <div>Description</div>
          <div>Cico Mode</div>
        </div>

        <div className="project">
          <div className="gif-box">
            <img src={Waldo} />
          </div>
          <div>Description</div>
          <div>Cico Mode</div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
