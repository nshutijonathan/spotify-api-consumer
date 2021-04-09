import React, { useState, useEffect } from "react";
import "./App.css";
import DropDown from "./components/DropDown";
import { extractTokenFromUrl } from "../src/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./components/Login";
import LogOut from "./components/Logout";
//SpotifyWebApi instance
const spotify = new SpotifyWebApi();
const App = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash = extractTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
    }

    console.log("token", _token);
  }, []);
  // const data = [
  //   {
  //     value: 1,
  //     name: "A",
  //   },
  //   {
  //     value: 2,
  //     name: "B",
  //   },
  //   {
  //     value: 3,
  //     name: "C",
  //   },
  // ];

  return (
    <div>
      {token ? <h1>Logged in</h1> : <Login />}
      {/* <DropDown options={data} /> */}
      <LogOut token={token} spotify={spotify} />
    </div>
  );
};

export default App;
