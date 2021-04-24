import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { ImProfile } from "react-icons/im";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
}

  return (
    <>
      <div className="footer">
            <Link className="hover-yellow" to="/profile" onClick={scrollToTop}>
            <ImProfile size="5em" />
            </Link>
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
