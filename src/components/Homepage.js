import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Skills from "./Skills";

function Homepage(props) {
  const { lightModeOn, setLightModeOn, handleClick, aboutRef } = props;
  return (
    <div>
      <header className="header">
        <Header lightModeOn={lightModeOn} setLightModeOn={setLightModeOn} />
        <Introduction handleClick={handleClick} />
      </header>
      <About aboutRef={aboutRef} lightModeOn={lightModeOn} />
      <Skills lightModeOn={lightModeOn} />
      <Projects lightModeOn={lightModeOn} />
      <Contact lightModeOn={lightModeOn} />
      <Footer lightModeOn={lightModeOn} />
    </div>
  );
}

export default Homepage;
