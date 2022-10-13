import { useRef, useState } from "react";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  //   const [lightModeOn, setLightModeOn] = useState(true);

  const [lightModeOn, setLightModeOn] = useState(
    localStorage ? localStorage.getItem("theme") : "light"
  );

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

  const handleClick = (e) => {
    if (e === "about") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (e === "projects") {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (e === "contact") {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (e === "skills") {
      skillsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Header lightModeOn={lightModeOn} setLightModeOn={setLightModeOn} handleClick={handleClick} />
      <About aboutRef={aboutRef} lightModeOn={lightModeOn} />
      <Skills lightModeOn={lightModeOn} skillsRef={skillsRef} />
      <Projects lightModeOn={lightModeOn} projectsRef={projectsRef} />
      <Footer lightModeOn={lightModeOn} contactRef={contactRef} />
    </div>
  );
}

export default App;
