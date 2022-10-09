import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";
import { useState } from "react";

function Header(props) {
  const { lightModeOn, setLightModeOn } = props;

  const toggleMode = () => {
    setLightModeOn((current) => !current);
  };

  return (
    <header className="header">
      <div className="name">Wise Guru</div>
      <ul className="links">
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      {lightModeOn ? (
        <button
          className="toggle-mode moon"
          onClick={() => {
            toggleMode();
          }}>
          <Moon />
        </button>
      ) : (
        <button
          className="toggle-mode sun"
          onClick={() => {
            toggleMode();
          }}>
          <Sun />
        </button>
      )}
    </header>
  );
}

export default Header;
