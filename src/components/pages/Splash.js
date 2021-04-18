import React from "react";
import { Link } from "react-router-dom"

export default function Splash() {
  return (
    <div className="splash-page">
      <div className="light-div">
        <button className="name-flicker">
          <span className="I">A</span>
          <span className="L">N</span>
          <span className="I">D</span>
          <span className="I">R</span>
          <span className="H">E</span>
          <span className="I">W</span>
          <span>
            <span className="I">8</span>
          </span>
          <span className="H">B</span>
          <span className="H">I</span>
          <span className="I">T</span>
        </button>
      </div>
      <br/>
      <div className="typewriter">
          <ul className="dynamic-txt">
              <li><span className="teal flicker-txt">{"{Developer}"}</span></li>
              <li><span className="orange flicker-txt">{"{Programmer}"}</span></li>
              <li><span className="yellow flicker-txt">{"{Engineer}"}</span></li>
              <li><span className="violet flicker-txt">{"{Student}"}</span></li>
          </ul>
      </div>
      <br />
      <Link to="/home" className="light-fix">
          Fix the lights
      </Link>
    </div>
  );
}
