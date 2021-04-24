import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import ParticleBackground from "../../../ParticleBackground";
import { HomeSection, Contact, CodeDesign, TechStack } from "./";
import { Footer } from "../../partials";
import { Element } from "react-scroll";

export default function Home() {

//   const location = useLocation()

//   useEffect(()=> {
//     if (location.hash) {
//         let elem = document.getElementById(location.hash.slice(1))
//         if (elem) {
//             elem.scrollIntoView({behavior: "smooth"})
//         }
//     } else {
//     window.scrollTo({top:0,left:0, behavior: "smooth"})
//     }
// }, [location,])

  return (
    <>
      <ParticleBackground />
      <Element name="home" />
      <div className="home">
        <HomeSection />

        <div className="code-design">
          <h1> My Code Design </h1>
          <div className="code-design-description sibling-fade">
            <CodeDesign />
          </div>
        </div>

        <div className="x-break-white py-4">
          <hr className="hr-text-white" data-content="X"></hr>
        </div>

        <div className="tech-stack">
          <div className="techstack-title">
            <h1> Tech Stack </h1>
          </div>
          <div className="stack-section sibling-fade">
            <TechStack />
          </div>

          <h1>
            {" "}
            and many <a href="/profile">more!</a>
          </h1>

          <p>
            If I don't know something, then chances are that I would love to
            learn!
          </p>

          <p>Let me know what technology would be useful for you!</p>
        </div>

        <div className="x-break py-4">
          <hr className="hr-text" data-content="X"></hr>
        </div>

        <div className="project-section">
        <Element name="projects" />
          <h1> Projects </h1>

          <div className="project-container">
            <div className="project-description">
              <div className="project1 design-bg project">
                <div className="project-overlay">
                  <div className="project-summary">
                    <h3>Gamogatchi</h3>
                    <p>
                      Gamogatchi was the first project I ever did as part of
                      General Assembly's Software Engineering Immersive Program.
                    </p>
                    <div>
                      <a href="https://www.gamogatchi.com" target="blank">
                        View Site
                      </a>
                      <a href="https://www.github.com" target="blank">
                        {" "}
                        Github
                      </a>
                      <div className="view-more">
                        <a>Find out more!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project2 design-bg-rev project">
                <div className="project-overlay">
                  <div className="project-summary">
                    <h3>Golden Path</h3>
                    <p>An online market place to promote learning</p>
                    <div>
                      <a href="https://www.gamogatchi.com" target="blank">
                        View Site
                      </a>
                      <a href="https://www.github.com" target="blank">
                        {" "}
                        Github
                      </a>
                      <div className="view-more">
                        <a>Find out more!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project3 design-bg project">
                <div className="project-overlay">
                  <div className="project-summary">
                    <h3>Munch</h3>
                    <p>
                      Online React application to mimic a food delivery service
                    </p>
                    <div>
                      <a href="https://www.gamogatchi.com" target="blank">
                        View Site
                      </a>
                      <a href="https://www.github.com" target="blank">
                        {" "}
                        Github
                      </a>
                      <div className="view-more">
                        <a>Find out more!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project4 design-bg-rev project">
                <div className="project-overlay">
                  <div className="project-summary">
                    <h3>Hidden.</h3>
                    <p>
                      Online web application built to bring awarness to human
                      traficking
                    </p>
                    <div>
                      <a href="https://www.gamogatchi.com" target="blank">
                        View Site
                      </a>
                      <a href="https://www.github.com" target="blank">
                        {" "}
                        Github
                      </a>
                      <div className="view-more">
                        <a>Find out more!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="x-break py-4">
          <hr className="hr-text" data-content="X"></hr>
        </div>
        <Element name="contact" id="contact" />
        <Contact/>
      </div>
      <Footer />
    </>
  );
}
