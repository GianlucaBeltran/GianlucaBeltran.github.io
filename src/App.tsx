// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import { NavLink } from "react-router";
import ProfilePicture from "./assets/profilepic.png";
import Folder from "./components/Folder";
import GithubIcon from "./components/icons/GithubIcon";
import LinkedinIcon from "./components/icons/LinkedinIcon";

function App() {
  return (
    <div className="home-container">
      <Folder>
        <div className="home-about-container">
          <div className="profile-picture-container">
            <div className="icon-list">
              <a
                href="https://linkedin.com/in/gianluca-beltran"
                className="icon"
              >
                <LinkedinIcon />
              </a>
              <a href="https://github.com/GianlucaBeltran" className="icon">
                <GithubIcon />
              </a>
            </div>
            <div className="profile-picture-outer">
              <img
                src={ProfilePicture}
                alt="profile picture"
                className="profile-picture"
              />
            </div>
          </div>
          <div className="name-container">
            <h1>Hey, I'm</h1>
            <h1>Gianluca Beltran</h1>
          </div>
          <p>
            <span style={{ fontWeight: "bold" }}>Software Engineer</span> from
            Mexico City, currently pursuing a Masters degree in{" "}
            <span style={{ fontWeight: "bold" }}>
              Interactive Media Technology at KTH
            </span>
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <p
              style={{
                textAlign: "right",
                borderBottom: "1px dashed white",
                width: "fit-content",
              }}
            >
              gianlucabeltran@gmail.com
            </p>
          </div>
        </div>
      </Folder>
      <div>
        <h1>About Me</h1>
        <p>Welcome to the about me page</p>
      </div>
    </div>
  );
}

export default App;
