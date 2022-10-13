import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";

function DarkMode(props) {
  const { lightModeOn, setLightModeOn } = props;
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
      setLightModeOn(theme);
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
      setLightModeOn(theme);
    }
  };

  return (
    <li>
      {lightModeOn === "light" ? (
        <button
          className={`sun ${theme === "dark" ? clickedClass : ""}`}
          id="darkMode"
          onClick={(e) => {
            switchTheme(e);
            console.log(lightModeOn);
          }}>
          <Sun />
        </button>
      ) : (
        <button
          // className={theme === "dark" ? clickedClass : ""}
          id="darkMode"
          onClick={(e) => {
            switchTheme(e);
            console.log(lightModeOn);
          }}>
          <Moon />
        </button>
      )}
    </li>
  );
}

export default DarkMode;
