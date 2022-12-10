import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import DarkMode from "./DarkMode";
// import Introduction from "./Introduction";

function Header(props) {
  const { lightModeOn, setLightModeOn } = props;

  return (
    // <header className="header">
    <div className="row">
      <div className="name">
        <Link to="/" className="link">
          Myla A.
        </Link>
      </div>
      <ul className="links">
        <li>
          {/* <a className="link" onClick={() => handleClick("about")}>
            About */}
          <Link to="/#about" className="link">
            About
          </Link>
          {/* </a> */}
        </li>
        <li>
          <HashLink to="/#skills" className="link">
            Skills
          </HashLink>
          {/* <a className="link" onClick={() => handleClick("skills")}>
            Skills
          </a> */}
        </li>
        <li>
          <HashLink to="/#projects" className="link">
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink to="/#contact" className="link">
            Contact
          </HashLink>
        </li>
        <li>
          <DarkMode lightModeOn={lightModeOn} setLightModeOn={setLightModeOn} />
        </li>
      </ul>
    </div>
    // <Introduction handleClick={handleClick} />
    // </header>
  );
}

export default Header;
