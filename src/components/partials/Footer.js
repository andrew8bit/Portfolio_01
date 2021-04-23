import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa"

export default function Footer() {
  return (
    <>
      <div className="footer">
            <a className="hover-violet" href="https://www.github.com/andrew8bit" target="blank">
            <FaGithub size="5em" />
            </a>
            <a className="hover-red" href="https://www.linkedin.com/in/andrewbith/" target="blank">
            <FaLinkedin size="5em" />
            </a>
            <a className="hover-teal" href="https://www.facebook.com/andrewbith" target="blank">
            <FaFacebook size="5em" />
            </a>
      </div>
    </>
  );
}
