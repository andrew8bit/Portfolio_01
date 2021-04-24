import React from "react";

export default function HomeSection() {
  return (
    <>
      <div className="home-container">
        <div className="home-img-container">
          <img
            className="home-img-01"
            // src="https://res.cloudinary.com/andrew8bit/image/upload/v1618611063/landingpage-portfolio_wyoakz.jpg"
            src="https://res.cloudinary.com/andrew8bit/image/upload/v1619230567/image0_ltpsim.png"
            alt="homepage"
          />
        </div>

        <div className="about-text">
          <div className="gradient-border gradient-box">
            <h1> Software engineer with a passion for learning </h1>
          </div>
          <p>
            {" "}
            With the power to create and destroy, I make things I love with
            every keystroke. Learning after every backspace and smiling after
            every sprint. As a recent General Assembly Graduate, I look forward
            to taking making the most of every oppurtunity.
          </p>
        </div>
        <div className="x-break py-4">
          <hr className="hr-text" data-content="X"></hr>
        </div>
      </div>
    </>
  );
}
