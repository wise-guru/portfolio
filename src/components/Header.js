import DarkMode from "./DarkMode";
import Introduction from "./Introduction";

function Header(props) {
  const { lightModeOn, setLightModeOn, handleClick } = props;

  return (
    <header className="header">
      <div className="row">
        <div className="name">Myla A.</div>
        <ul className="links">
          <li>
            <a className="link" onClick={() => handleClick("about")}>
              About
            </a>
          </li>
          <li>
            <a className="link" onClick={() => handleClick("skills")}>
              Skills
            </a>
          </li>
          <li>
            <a className="link" onClick={() => handleClick("projects")}>
              Projects
            </a>
          </li>
          <li>
            <a className="link" onClick={() => handleClick("contact")}>
              Contact
            </a>
          </li>
          <DarkMode lightModeOn={lightModeOn} setLightModeOn={setLightModeOn} />
        </ul>
      </div>
      <Introduction handleClick={handleClick} />
    </header>
  );
}

export default Header;
