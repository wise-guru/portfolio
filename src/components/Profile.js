import ProfilePic from "../assets/hackerman.jpg";

function Profile() {
  return (
    <div>
      <div className="profile">
        <img src={ProfilePic}></img>
      </div>

      <div>
        <h2 className="title">Fun facts!</h2>

        <div className="facts-container">
          <div>Musician</div>
          <div>Skateboarder</div>
          <div>Can the name capital of all 50 states</div>
          <div>Anime watcher</div>
          <div>Gamer</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
