import Profile from "./Profile";

function About(props) {
  const { aboutRef, lightModeOn } = props;
  return (
    <section className="about-section" ref={aboutRef} id="about">
      <div className="about">
        <Profile lightModeOn={lightModeOn} />
        <div className="text">
          <h2>About Me</h2>
          <p>Hi! I&apos;m Myla, a web developer.</p>

          {/* <p>
            As someone who has played music for years, I&apos;ve noticed many similarities between
            learning an instrument and learning to program. Both teach you lessons in starting small
            and progressing incrementally. There&apos;s no limit to what you can accomplish; people
            are constantly pushing the boundaries of what we thought was possible both creatively
            and technically.
          </p> */}
          <p>
            I spend a copious amount of time daily fiddling with HTML, CSS, Javascript, and all the
            wonderful technologies that encapsulate and support them to bring my ideas to life. I
            love challenging myself and strive to learn every day.
          </p>

          {/* <p>
            Learning web development has been challenging but extremely rewardng. With music,
            it&apos;s exciting to be able to think of a melody in my head and then play it
            instantly. In web development, I&apos;ve been able to do the same. I can think of ideas
            for projects, and bring them to life.
          </p> */}
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
