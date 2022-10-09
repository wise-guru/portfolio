import { ReactComponent as GithubLight } from "../assets/skills/github-light.svg";
import { ReactComponent as GithubDark } from "../assets/dark-mode/github-dark.svg";
import { ReactComponent as LinkedInLight } from "../assets/light-mode/linkedin-light.svg";
import { ReactComponent as LinkedInDark } from "../assets/dark-mode/linkedin-dark.svg";

function Footer(props) {
  const { lightModeOn } = props;
  return (
    <footer>
      <a href="https://github.com/wise-guru">{lightModeOn ? <GithubLight /> : <GithubDark />}</a>
      <a href="">{lightModeOn ? <LinkedInLight /> : <LinkedInDark />}</a>
    </footer>
  );
}

export default Footer;
