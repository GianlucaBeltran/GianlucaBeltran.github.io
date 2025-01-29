import ProfilePicture from "./assets/profilepic.png";
import CornerPicture from "./assets/Corner10.png";
import GoalWallVideo from "./assets/goalwall.mov";
import Folder from "./components/Folder";
import GithubIcon from "./components/icons/GithubIcon";
import LinkedinIcon from "./components/icons/LinkedinIcon";

import "./App.css";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Folder>
        <div className="home-about-container">
          <div className="profile-picture-container">
            <div className="icon-list">
              <a
                href="https://linkedin.com/in/gianluca-beltran"
                className="icon"
                target="_blank"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://github.com/GianlucaBeltran"
                className="icon"
                target="_blank"
              >
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
              Interactive Media Technology
            </span>{" "}
            at <span style={{ fontWeight: "bold" }}>KTH</span>
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
      <div className="home-info-container">
        <div className="home-info-title">
          <h1>Previous work</h1>
        </div>
        <div className="card-container">
          <button className="card" onClick={() => navigate("/works#goal-wall")}>
            <div
              style={{
                height: "220px",
                width: "100%",
                objectFit: "cover",
              }}
            >
              <video
                width="100%"
                autoPlay
                loop
                muted
                style={{
                  borderRadius: "20px",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              >
                <source src={GoalWallVideo} type="video/mp4" />
              </video>
            </div>
            <div
              style={{
                padding: "1rem",
                paddingTop: 0,
                // height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                gap: "1rem",
              }}
            >
              <h2>Goal Wall</h2>
              <p>
                This project lets people share their{" "}
                <span style={{ fontWeight: "bold" }}>gym goals</span>, see other
                members goals and it lets them communicate with other gym
                members to create a sense of{" "}
                <span style={{ fontWeight: "bold" }}>interconectivity</span>{" "}
                between the gym.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "1rem",
                  marginTop: "1rem",
                  // height: "100%",
                }}
              >
                <p>24/10/2024</p>
                <a
                  href="https://github.com/GianlucaBeltran/GoalWall"
                  target="_blank"
                  style={{
                    alignSelf: "center",
                    height: "24px",
                  }}
                >
                  <GithubIcon />
                </a>
              </div>
            </div>
          </button>
          <button
            className="card"
            onClick={() => navigate("/works#research-project")}
          >
            <div
              style={{
                height: "220px",
                width: "100%",
                objectFit: "cover",
                overflow: "hidden",
                borderRadius: "20px",
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              }}
            >
              <img src={CornerPicture} alt="corner" style={{ width: "100%" }} />
            </div>
            <div
              style={{
                padding: "1rem",
                paddingTop: 0,
                // height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                gap: "1rem",
              }}
            >
              <h2>Research project</h2>
              <p>
                This project aimed to answer the question:{" "}
                <span style={{ fontWeight: "bold" }}>
                  How do street-level attributes, experienced through virtual
                  reality, affect women's perceived safety in urban
                  environments?
                </span>{" "}
                With the help of a{" "}
                <span style={{ fontWeight: "bold" }}>VR headset</span> and the{" "}
                <span style={{ fontWeight: "bold" }}>Unity engine</span>
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "1rem",
                  marginTop: "1rem",
                  // height: "100%",
                }}
              >
                <p>13/01/2025</p>
              </div>
            </div>
          </button>
        </div>
        {/* <div className="card">
            <h2>Software Engineer Intern</h2>
            <p>
              Worked on the development of a web application for the{" "}
              <span style={{ fontWeight: "bold" }}>KTH Innovation</span> office.
            </p>
          </div> */}
      </div>
    </div>
  );
}

export default App;
