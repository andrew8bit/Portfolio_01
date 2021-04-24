import React from "react";
import ParticleBackground from "../../ParticleBackground";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";

export default function Profile() {
  return (
    <div className="profile-page">
      <ParticleBackground />
      
      <div className="profile-header">
        <a
          className="hover-violet"
          href="https://www.github.com/andrew8bit"
          target="blank"
        >
          <FaGithub size="5em" />
        </a>
        <a
          className="hover-red"
          href="https://www.linkedin.com/in/andrewbith/"
          target="blank"
        >
          <FaLinkedin size="5em" />
        </a>
        <a
          className="hover-teal"
          href="https://www.facebook.com/andrewbith"
          target="blank"
        >
          <FaFacebook size="5em" />
        </a>
      </div>
          <div className="mobile-section profile-section mobile-img">
            <img className="mobile-img"
              src="https://res.cloudinary.com/andrew8bit/image/upload/v1619216334/IMG_1169_dpghae.jpg"
              alt="profile"
            />
          </div>

    <div className="profile-section">
        <div className="profile-top">
          <div className="profile-picture-container">
            <img
              src="https://res.cloudinary.com/andrew8bit/image/upload/v1619216334/IMG_1169_dpghae.jpg"
              alt="profile"
            />
          </div>

          <div className="brand-statment">
            <h1> Andrew Bith </h1>
            <h3> Full Stack Developer - Lifelong Learner </h3>
            <div className="profile-info">
              <h4> Long Beach, CA - Andrewbith@gmail.com</h4>
              <span className="profile-download">
                <h4>Resume </h4>
                <a href="mailto:andrewbith@gmail.com" target="blank">
                  <AiOutlineDownload size="2em" />
                </a>
              </span>
            </div>

            <hr />

            <p>
              A full stack developer who creates efficient solutions to common
              and complex problems. Proficient in Javascript, Python, and React,
              I seek a work environment that challenges me, and requires
              critical or sometimes out of box thinking. The values I bring to
              any team include an emphasis on efficiency, security, and
              creativity, these values are highlighted by my portfolio and code
              design. I look to make an impact on every project no matter the
              size. I love working with a likeminded team, willing to sacrifice
              towards a goal that is greater than the individual parts, to
              create applications that are cutting edge, beautiful, and
              important.
            </p>
          </div>
        </div>
    </div>
    <h1> MY TOOL BOX </h1>

    <div className="profile-section fullstack-section">
            <div className="profile-stack-container">
                    <h2> HTML5 </h2>
                    <h2> CSS </h2>
                    <h2> Sass </h2>
                    <h2> Javascript </h2>
                    <h2> Python </h2>
                    <h2> React </h2>
                    <h2> Node.js </h2>
                    <h2> Express </h2>
                    <h2> Bootstrap </h2>
                    <h2> Material-UI </h2>
                    <h2> EJS </h2>
                    <h2> PostgreSQL </h2>
                    <h2> Sequelize(ORM) </h2>
                    <h2> MongoDb(nosql) </h2>
                    <h2> Mongoose(ODM) </h2>
                    <h2> JupyterLabs </h2>
                    <h2> Selenium </h2>
                    <h2> Postman </h2>
                    <h2> RESTAPI </h2>
                    <h2> MVC Design </h2>
                    <h2> SQL </h2>
                    <h2> Data Structures & Algorithms </h2>
            </div>
        <div>
        </div>
    </div>
</div>
  );
}
