import { ReactComponent as HTML } from "../assets/skills/html.svg";
import { ReactComponent as CSS } from "../assets/skills/css.svg";
import { ReactComponent as React } from "../assets/skills/react.svg";
import { ReactComponent as Nodejs } from "../assets/skills/nodejs.svg";
import { ReactComponent as GitLight } from "../assets/skills/git.svg";
import { ReactComponent as GitDark } from "../assets/dark-mode/git-dark.svg";
import { ReactComponent as GithubLight } from "../assets/skills/github-light.svg";
import { ReactComponent as GithubDark } from "../assets/dark-mode/github-dark.svg";
// import { ReactComponent as Eslint } from "../assets/skills/eslint.svg";
import { ReactComponent as NpmLight } from "../assets/skills/npm.svg";
import { ReactComponent as NpmDark } from "../assets/dark-mode/npm-dark.svg";
// import { ReactComponent as Prettier } from "../assets/skills/prettier.svg";
import { ReactComponent as Webpack } from "../assets/skills/webpack.svg";
import { ReactComponent as JS } from "../assets/skills/javascript.svg";
import { ReactComponent as Jest } from "../assets/skills/jest.svg";
import { ReactComponent as Firebase } from "../assets/skills/firebase.svg";
import { ReactComponent as MongoDB } from "../assets/skills/mongoDB.svg";
// import { ReactComponent as VSCode } from "../assets/skills/vscode.svg";
import { ReactComponent as NodejsDark } from "../assets/dark-mode/nodejs-dark.svg";
// import { ReactComponent as  } from "../assets/skills/.svg";

function Skills(props) {
  const { lightModeOn, skillsRef } = props;
  return (
    <section className="skills" ref={skillsRef} id="skills">
      <h1 style={{ color: "#fff" }}>Skills</h1>
      <div className="skills-container">
        <div className="column col-one">
          <div className="skill-box">
            <HTML title="html" />
            <div className="title">HTML3</div>
          </div>
          <div className="skill-box">
            {lightModeOn === "light" ? <Nodejs title="Node.js" /> : <NodejsDark title="Node.js" />}
            <div className="caption">Node.js</div>
          </div>
          <div className="skill-box">
            <Jest title="Jest" />
            <div className="caption">Jest</div>
          </div>
        </div>

        <div className="column col-two">
          <div className="skill-box">
            <CSS title="CSS3" />
            <div className="caption">CSS3</div>
          </div>
          <div className="skill-box">
            <MongoDB title="MongoDB" />
            <div className="caption">MongoDB</div>
          </div>
          <div className="skill-box">
            {lightModeOn === "light" ? <NpmLight title="npm" /> : <NpmDark title="npm" />}
            <div className="caption">npm</div>
          </div>
        </div>

        <div className="column col-three">
          <div className="skill-box">
            <JS title="Javascript" />
            <div className="caption">javascript</div>
          </div>
          <div className="skill-box">
            {lightModeOn === "light" ? <GithubLight /> : <GithubDark />}
            <div className="caption">Github</div>
          </div>
          <div className="skill-box">
            <Webpack title="Webpack" />
            <div className="caption">Webpack</div>
          </div>
        </div>

        <div className="column col-four">
          <div className="skill-box">
            <React title="React" />
            <div className="caption">ReactJS</div>
          </div>
          <div className="skill-box">
            <Firebase title="Firebase" />
            <div className="caption">Firebase</div>
          </div>
          <div className="skill-box">
            {lightModeOn === "light" ? <GitLight title="Git" /> : <GitDark title="Git" />}
            <div className="caption">Git</div>
          </div>
        </div>

        {/* <div className="column col-five"> */}
        {/* </div> */}
      </div>
    </section>
  );
}

export default Skills;
