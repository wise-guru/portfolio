import { ReactComponent as GithubLight } from "../assets/skills/github-light.svg";
import { ReactComponent as GithubDark } from "../assets/dark-mode/github-dark.svg";
import { ReactComponent as LinkedInLight } from "../assets/light-mode/linkedin-light.svg";
import { ReactComponent as LinkedInDark } from "../assets/dark-mode/linkedin-dark.svg";

function Footer(props) {
  const { lightModeOn, contactRef } = props;
  return (
    <footer className="footer" ref={contactRef}>
      <div className="icons">
        <a href="https://github.com/wise-guru">
          {lightModeOn === "light" ? <GithubLight /> : <GithubDark />}
        </a>
        <a href="https://www.linkedin.com/in/myla-a-19b4ab174/">
          {lightModeOn === "light" ? <LinkedInLight /> : <LinkedInDark />}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
