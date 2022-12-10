import About from "./About";
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
      <About aboutRef={aboutRef} />
      <Skills lightModeOn={lightModeOn} />
      <Projects lightModeOn={lightModeOn} />
      <Footer lightModeOn={lightModeOn} />
    </div>
  );
}

export default Homepage;
