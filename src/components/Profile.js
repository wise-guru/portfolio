import ProfilePic from "../assets/hackerman.jpg";
import GuitarLight from "../assets/light-mode/guitar-light.png";
import GuitarDark from "../assets/dark-mode/guitar-dark.png";
import SkateboardLight from "../assets/light-mode/skateboard-light.png";
import SkateboardDark from "../assets/dark-mode/skateboard-dark.png";
import { ReactComponent as FlagLight } from "../assets/light-mode/flag-light.svg";
import { ReactComponent as FlagDark } from "../assets/dark-mode/flag-dark.svg";
import AnimeLight from "../assets/light-mode/anime-light.png";
import AnimeDark from "../assets/dark-mode/anime-dark.png";
import ControllerLight from "../assets/light-mode/controller-light.png";
import ControllerDark from "../assets/dark-mode/controller-dark.png";

function Profile(props) {
  const { lightModeOn } = props;
  return (
    <div className="profile">
      <div className="image-box">
        <img src={ProfilePic} style={{ width: "320px", borderRadius: "5px" }}></img>
      </div>

      <div>
        <h2 className="title">Fun facts!</h2>

        <ul className="facts-container">
          <li className="fact">
            <div>Musician</div>
            {lightModeOn === "light" ? (
              <img className="Light" src={GuitarLight} />
            ) : (
              <img className="dark" src={GuitarDark} />
            )}
          </li>
          <li className="fact">
            <div>Skateboarder</div>
            {lightModeOn === "light" ? <img src={SkateboardLight} /> : <img src={SkateboardDark} />}
          </li>
          <li className="fact">
            <div>Can name the capitals of all 50 states </div>
            {lightModeOn === "light" ? <FlagLight /> : <FlagDark />}
          </li>
          <li className="fact">
            <div>Anime Watcher</div>
            {lightModeOn === "light" ? <img src={AnimeLight} /> : <img src={AnimeDark} />}
          </li>
          <li className="fact">
            <div>Gamer</div>
            {lightModeOn === "light" ? <img src={ControllerLight} /> : <img src={ControllerDark} />}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
