import { ReactComponent as HTML } from "../assets/skills/html.svg";
import { ReactComponent as CSS } from "../assets/skills/css.svg";
import { ReactComponent as React } from "../assets/skills/react.svg";
// import { ReactComponent as Nodejs } from "../assets/skills/nodejs.svg";
import { ReactComponent as GitLight } from "../assets/skills/git.svg";
import { ReactComponent as GitDark } from "../assets/dark-mode/git-dark.svg";
import { ReactComponent as GithubLight } from "../assets/skills/github-light.svg";
import { ReactComponent as GithubDark } from "../assets/dark-mode/github-dark.svg";
import { ReactComponent as Eslint } from "../assets/skills/eslint.svg";
import { ReactComponent as NpmLight } from "../assets/skills/npm.svg";
import { ReactComponent as NpmDark } from "../assets/dark-mode/npm-dark.svg";
import { ReactComponent as Prettier } from "../assets/skills/prettier.svg";
import { ReactComponent as Webpack } from "../assets/skills/webpack.svg";
import { ReactComponent as JS } from "../assets/skills/javascript.svg";
import { ReactComponent as Jest } from "../assets/skills/jest.svg";
import { ReactComponent as Firebase } from "../assets/skills/firebase.svg";
// import { ReactComponent as  } from "../assets/skills/.svg";

function Skills(props) {
  const { lightModeOn, skillsRef } = props;
  return (
    <section className="skills" ref={skillsRef}>
      <div className="skills-container">
        <div className="column col-one">
          <div className="skill-box">
            <HTML title="html" />
            <div className="title">HTML3</div>
          </div>
          <div className="skill-box">
            <CSS title="CSS3" />
            <div className="caption">CSS3</div>
          </div>
          <div className="skill-box">
            <React title="React" />
            <div className="caption">ReactJS</div>
          </div>
        </div>

        <div className="column col-two">
          <div className="skill-box">
            <Firebase title="Firebase" />
            <div className="caption">Firebase</div>
          </div>
          <div className="skill-box">
            {lightModeOn === "light" ? <GithubLight /> : <GithubDark />}
            <div className="caption">Github</div>
          </div>
          <div className="skill-box">
            <Eslint title="Eslint" />
            <div className="caption">Eslint</div>
          </div>
        </div>

        <div className="column col-three">
          <div className="skill-box">
            {lightModeOn === "light" ? <NpmLight /> : <NpmDark />}
            <div className="caption">npm</div>
          </div>
          <div className="skill-box">
            <Prettier title="Prettier" />
            <div className="caption">Prettier</div>
          </div>
          <div className="skill-box">
            <Webpack title="Webpack" />
            <div className="caption">Webpack</div>
          </div>
        </div>

        <div className="column col-four">
          <div className="skill-box">
            <JS title="Javascript" />
            <div className="caption">javascript</div>
          </div>
          <div className="skill-box">
            <Jest title="Jest" />
            <div className="caption">Jest</div>
          </div>
          <div className="skill-box">
            {lightModeOn === "light" ? <GitLight /> : <GitDark />}
            <div className="caption">Git</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
