import React from "react";
import { loginUrl } from "../spotify";
const Home = () => {
  return (
    <div className="login">
      <img
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
      />
      <a href={loginUrl}>LogIn</a>
    </div>
  );
};

export default Home;
