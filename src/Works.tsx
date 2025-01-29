import { useEffect } from "react";
import { useLocation } from "react-router";
import "./Works.css";
import MyGoals from "./assets/MyGoals.png";
import NewGoal from "./assets/NewGoal.png";
import OthersGoals from "./assets/OthersGoals.png";
import GoalWallVideo from "./assets/goalwall.mov";
import ExpoGoIcon from "./components/icons/ExpoGoIcon";
import GithubIcon from "./components/icons/GithubIcon";
import ReactIcon from "./components/icons/ReactIcon";
import TypeScriptIcon from "./components/icons/TypeScriptIcon";
import Corner7 from "./assets/Corner7.png";
import Corner8 from "./assets/Corner8.png";
import Corner9 from "./assets/Corner9.png";
import Corner10 from "./assets/Corner10.png";
import UnityIcon from "./components/icons/UnityIcon";

export default function Works() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const scrollToElement = (hash: string, retries = 10) => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else if (retries > 0) {
          setTimeout(() => scrollToElement(hash, retries - 1), 100);
        }
      };

      scrollToElement(location.hash);
    }
  }, [location.hash]);

  return (
    <div className="works-container">
      <section className="work" id="goal-wall">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <div style={{ maxWidth: "50%" }}>
            <div
              style={{
                display: "flex",
                // justifyContent: "space-between",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <h1>Goal Wall</h1>
              <a
                href="https://github.com/GianlucaBeltran/GoalWall"
                target="_blank"
              >
                <GithubIcon width={"40"} height={"40"} />
              </a>
            </div>
            <p style={{ fontSize: "1.2rem" }}>
              The purpose of this project was to bring a sense of{" "}
              <span style={{ fontWeight: "bold" }}>community</span> or{" "}
              <span style={{ fontWeight: "bold" }}>interconnectivity</span>{" "}
              between gym members. We developed an{" "}
              <span style={{ fontWeight: "bold" }}>app</span> that would
              integrate into existing gym systems and allow members to{" "}
              <span style={{ fontWeight: "bold" }}>share</span> their goals, see
              other members' goals, and{" "}
              <span style={{ fontWeight: "bold" }}>communicate</span> with each
              other.
            </p>
            <p style={{ fontSize: "1.2rem" }}>
              We also developed the goal wall, a{" "}
              <span style={{ fontWeight: "bold" }}>web app</span> that would
              display all the goals of the gym members. It was designed to be
              put on a{" "}
              <span style={{ fontWeight: "bold" }}>big screen at the gym</span>{" "}
              so the members could look at the goals while working out.
            </p>

            <video
              width="500px"
              autoPlay
              loop
              muted
              style={{
                borderRadius: "20px",
              }}
            >
              <source src={GoalWallVideo} type="video/mp4" />
            </video>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              width: "50%",
            }}
          >
            <div className="images-container">
              <img
                src={MyGoals}
                style={{
                  height: "400px",
                  borderRadius: "20px",
                  border: "2px solid #000",
                }}
              />
              <img
                src={NewGoal}
                style={{
                  height: "400px",
                  borderRadius: "20px",
                  border: "2px solid #000",
                }}
              />
              <img
                src={OthersGoals}
                style={{
                  height: "400px",
                  borderRadius: "20px",
                  border: "2px solid #000",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                gap: "1rem",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <a href="https://www.typescriptlang.org/" target="_blank">
                  <TypeScriptIcon width="70" height="70" />
                </a>
                <a href="https://react.dev/" target="_blank">
                  <ReactIcon width="70" height="70" />
                </a>
                <a href="https://expo.dev/" target="_blank">
                  <ExpoGoIcon width="70" height="70" />
                </a>
              </div>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <p className="name-container">Oona Karppinen</p>
                <p className="name-container">Zheng Yue </p>
                <p className="name-container">Fatemeh Abdollahnazhad </p>
                <p className="name-container">Filip Maras</p>
                <p className="name-container">Gianluca Beltran</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="work" id="research-project">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <div style={{ maxWidth: "50%" }}>
            <div
              style={{
                display: "flex",
                // justifyContent: "space-between",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <h1>Research project</h1>
            </div>
            <p style={{ fontSize: "1.2rem" }}>
              This project aimed to answer the question:{" "}
              <span style={{ fontWeight: "bold" }}>
                How do street-level attributes, experienced through virtual
                reality, affect women's perceived safety in urban environments?
              </span>{" "}
              Using a{" "}
              <span style={{ fontWeight: "bold" }}>virtual reality</span>{" "}
              headset, participants were immersed in a virtual urban environment
              and were presented with{" "}
              <span style={{ fontWeight: "bold" }}>two corners</span> of a
              street. The corners were identical in terms of the buildings and
              the street, but they differed in what{" "}
              <span style={{ fontWeight: "bold" }}>
                street level attributes
              </span>{" "}
              were present. The participants were asked to choose which corner
              they would prefer to walk down. The results showed that the
              presence of street level attributes such as{" "}
              <span style={{ fontWeight: "bold" }}>
                trees and benches increased the perceived safety of the corner.
              </span>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              width: "50%",
            }}
          >
            <div className="images-container">
              <img
                src={Corner10}
                style={{
                  height: "200px",
                  borderRadius: "20px",
                  border: "2px solid #000",
                }}
              />
              <img
                src={Corner8}
                style={{
                  height: "200px",
                  borderRadius: "20px",
                  border: "2px solid #000",
                }}
              />
              <img
                src={Corner7}
                style={{
                  height: "200px",
                  borderRadius: "20px",
                  border: "2px solid #000",
                }}
              />
              <img
                src={Corner9}
                style={{
                  height: "200px",
                  borderRadius: "20px",
                  border: "2px solid #000",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                gap: "1rem",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a href="https://unity.com/" target="_blank">
                  <UnityIcon width="70" height={"200"} />
                </a>
              </div>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <p className="name-container">Alexander Gemal</p>
                <p className="name-container">Amanda Arbinge</p>
                <p className="name-container">Emil Cromnier</p>
                <p className="name-container">Gianluca Beltran</p>
                <p className="name-container">Jiashu Sun</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
