import React from "react";
import { Link as Anchor } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import ParticleBackground from "../../../ParticleBackground";
import { HomeSection, Contact, CodeDesign, TechStack, Projects } from "./";
import Navbar from "../../partials/Navbar"
import { Footer } from "../../partials";
import { Element } from "react-scroll";
import { TiMessages } from "react-icons/ti";

export default function Home() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Navbar />
      <ParticleBackground />
      <Element name="home" />
      <div className="home">
        <HomeSection />

        <div className="x-break py-4">
          <hr className="hr-text" data-content="X"></hr>
        </div>

        <div className="code-design">
          <h1> My Code Design </h1>
          <Element name="code-design" />
          <div className="code-design-description sibling-fade">
            <CodeDesign />
          </div>
        </div>

        <div className="x-break py-4">
          <hr className="hr-text" data-content="X"></hr>
        </div>

        <div className="tech-stack">
          <Element name="tech-stack" />
          <div className="techstack-title">
            <h1> Tech Stack </h1>
          </div>
          <div className="stack-section sibling-fade">
            <TechStack />
          </div>

          <h1>
            {" "}
            and many{" "}
            <Anchor
              to="/profile"
              className="more-profile"
              onClick={scrollToTop}
            >
              {" "}
              more!
            </Anchor>
          </h1>

          <p>
            If I don't know something, then chances are that I would love to
            learn!
          </p>
          <p>Let me know what technology would be useful for you!</p>

          <Link to="contact" spy={true} smooth={true} offset={-60}>
            {" "}
            <span className="small-contact">
              <TiMessages />
            </span>{" "}
          </Link>
        </div>

        <div className="x-break py-4">
          <hr className="hr-text" data-content="X"></hr>
        </div>

        <div className="project-section">
          <Element name="projects" />
          <h1> Projects </h1>

          <div className="project-container">
            <div className="project-description">
              <Projects />
            </div>
          </div>
        </div>

        <div className="x-break py-4">
          <hr className="hr-text" data-content="X"></hr>
        </div>
        <Element name="contact" id="contact" />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
