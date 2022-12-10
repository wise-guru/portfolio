import { useRef, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";

import MoreProjectsPage from "./components/MoreProjectsPage";

function App() {
  const themeMode =
    localStorage.getItem("theme") === "light"
      ? "light"
      : localStorage.getItem("theme") === "dark"
      ? "dark"
      : !localStorage
      ? "light"
      : "light";

  const [lightModeOn, setLightModeOn] = useState(themeMode);

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

  // const handleClick = (e) => {
  //   if (e === "about") {
  //     aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  //   } else if (e === "projects") {
  //     projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  //   } else if (e === "contact") {
  //     contactRef.current?.scrollIntoView({ behavior: "smooth" });
  //   } else if (e === "skills") {
  //     skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <HashRouter basename="/">
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                aboutRef={aboutRef}
                lightModeOn={lightModeOn}
                setLightModeOn={setLightModeOn}
                // handleClick={handleClick}
                skillsRef={skillsRef}
                projectsRef={projectsRef}
                contactRef={contactRef}
              />
            }></Route>
          <Route
            path="/more-projects"
            element={
              <MoreProjectsPage lightModeOn={lightModeOn} setLightModeOn={setLightModeOn} />
            }></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
