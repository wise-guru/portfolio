import Profile from "./Profile";

function About(props) {
  const { aboutRef, lightModeOn } = props;
  return (
    <section className="about-section" ref={aboutRef} id="about">
      <div className="about">
        <Profile lightModeOn={lightModeOn} />
        <div className="text">
          <h2>About Me</h2>
          <p>
            Hi! I&apos;m Myla, an ambitious and motivated student with a strong passion for web
            development. I am currently completing my studies and actively seeking my first
            professional opportunity as a software developer to begin my career in the industry.
          </p>
          <p>
            I spend a copious amount of time daily fiddling with HTML, CSS, Javascript, and all the
            wonderful technologies that encapsulate and support them to bring my ideas to life. I
            love challenging myself and strive to learn every day.
          </p>
          <p>
            I&apos;m proficient in ReactJS, Node.js, Express.js, MongoDB, and more. I am dedicated
            to perfecting my craft by constantly pushing the bounds of my curiosity to expand my
            knowledge and problem-solving skills. My objective is simply to be the best developer
            that I can be and contribute positively to the tech industry.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
