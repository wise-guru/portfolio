import { ReactComponent as Arrow } from "../assets/arrow.svg";

function Introduction(props) {
  const { handleClick } = props;
  return (
    <section>
      <div className="introduction">
        <div>Greetings, I&apos;m Wise!</div>
        <div className="transition" onClick={() => handleClick("about")}>
          <div>Get to know me</div>
          <Arrow />
        </div>
      </div>
    </section>
  );
}

export default Introduction;
