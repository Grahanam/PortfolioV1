import { useState } from "react";
import Rive from "@rive-app/react-canvas";

import "./App.css";

import hobby1 from "./assets/animations/hobby.riv?url";
import car from "./assets/animations/car_animation.riv?url";
import { ReactTyped } from "react-typed";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import css from "./assets/icon/css.png?url";
import html from "./assets/icon/html-5.png?url";
import github from "./assets/icon/github.png?url";
import node from "./assets/icon/node.png?url";
import reactjs from "./assets/icon/reactjs.png?url";
import javascript from "./assets/icon/javascript.png?url";
import linux from "./assets/icon/Linux.png?url";
import mongodb from "./assets/icon/MongoDB.png?url";
import git from "./assets/icon/Git.png?url";
import sql from "./assets/icon/MySQL.png?url";
import python from "./assets/icon/Python.png?url";
import threejs from "./assets/icon/Three.js.png?url";
import java from "./assets/icon/Java.png?url";
import render from "./assets/images/Render.png?url";
import aura from "./assets/images/aura.png?url";
import highway from "./assets/images/highway.png?url";

function App() {
  const [dark, setDark] = useState(true);
  return (
    <>
      <div className="mainPage">
        <div className="Section">
          <div className="topContainer">
            <div className="Logo">
              <h1>LS</h1>
            </div>
            <div className="onlineLinks">
              <a
                href="https://www.linkedin.com/in/lunaramsuthar/"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </i>
              </a>

              <a
                href="https://github.com/grahanam"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                </i>
              </a>
            </div>
            <div className="mode" onClick={() => setDark(!dark)}>
              {dark ? (
                <>
                  <i>
                    <FontAwesomeIcon icon={faSun} className="icon" />
                  </i>
                </>
              ) : (
                <>
                  <i>
                    <FontAwesomeIcon icon={faMoon} className="icon" />
                  </i>
                </>
              )}
            </div>
          </div>

          <div className="introduction">
            <div className="titleContainer">
              <h1>
                <b>Lunaram Suthar</b>
              </h1>
              <h3>Full-Stack Developer</h3>
              <p>
                A Developer based from Pune, India with passion in crafting
                seamless experience for the web.
              </p>
              <div className="animationContainer">
                <Rive
                  className="caranimation"
                  src={car}
                  stateMachines="State Machine 1"
                  autoPlay={true}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="containerCol">
          <div className="subColContainer">
            <div className="subTitle">A bit About Me</div>
          </div>
          <div className="majorColContainer">
            <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
              <ReactTyped
                strings={[
                  "Artist",
                  "Problem Solver",
                  "Developer",
                  "Language Learner",
                ]}
                typeSpeed={100}
                backSpeed={100}
                loop
              />
            </div>
            <div className="animationContainer">
              <Rive
                className="animation"
                src={hobby1}
                // artboard="Artboard"
                animations="Working"
                stateMachines="State Machine 2"
                autoPlay={true}
              />
            </div>
          </div>
        </div>
        <div className="containerCol">
          <div className="subColContainer">
            <div className="subTitle">Skills</div>
          </div>
          <div className="majorColContainer">
            <div className="logoContainer">
              <img className="logo" src={html} />
              <img className="logo" src={css} />
              <img className="logo" src={javascript} />
              <img className="logo" src={node} />
              <img className="logo" src={reactjs} />
              <img className="logo" src={mongodb} />
              <img className="logo" src={linux} />
              <img className="logo" src={sql} />
              <img className="logo" src={python} />
              <img className="logo" src={java} />
              <img className="logo" src={threejs} />
              <img className="logo" src={github} />
              <img className="logo" src={git} />
            </div>
          </div>
        </div>
        <div className="containerCol">
          <div className="subColContainer">
            <div className="subTitle">Projects</div>
          </div>
          <div className="majorColContainer">
            <div className="projectContainer">
              <a
                href="https://grahanam.github.io/Render/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="projectImg" src={render} />
                <div>Render</div>
              </a>
              <a
                href="https://aura-backend-gsql.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="projectImg" src={aura} />
                <div>Aura</div>
              </a>
              <a
                href="https://grahanam.github.io/Highway/src/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <img className="projectImg" src={highway} />
                <div>Highway</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
