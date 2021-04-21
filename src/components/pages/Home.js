import React from "react";
import {
  css3,
  django,
  html5,
  javascript,
  jupyter,
  mongodb,
  nodejs,
  postgresql,
  postman,
  python,
  react,
  sass,
} from "../../techstack-logos";

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-img-container">
          <img
            className="home-img-01"
            src="https://res.cloudinary.com/andrew8bit/image/upload/v1618611063/landingpage-portfolio_wyoakz.jpg"
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
        <div className="x-break">
          <hr className="hr-text" data-content="X"></hr>
        </div>
      </div>

      <div className="code-design py-3">
        <h1> My Code Design </h1>
        <div className="code-design-description sibling-fade">
          <div className="bg-teal design-bg">
            <p>Clean {"&"} Efficient</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="128"
              height="128"
              viewBox="0 0 64 64"
            >
              <path d="M 32 6.8007812 C 18.1 6.8007812 6.8007813 18.1 6.8007812 32 C 6.8007812 45.9 18.1 57.300781 32 57.300781 C 45.9 57.300781 57.300781 45.9 57.300781 32 C 57.300781 18.1 45.9 6.8007813 32 6.8007812 z M 32 9.8007812 C 44.2 9.8007812 54.300781 19.799609 54.300781 32.099609 C 54.300781 44.399609 44.3 54.300781 32 54.300781 C 19.7 54.300781 9.6992188 44.3 9.6992188 32 C 9.6992188 19.7 19.8 9.8007812 32 9.8007812 z M 31.976562 15.478516 A 1.50015 1.50015 0 0 0 30.5 17 L 30.5 29.40625 A 3 3 0 0 0 32 35 A 3 3 0 0 0 34.59375 33.5 L 42 33.5 A 1.50015 1.50015 0 1 0 42 30.5 L 34.597656 30.5 A 3 3 0 0 0 33.5 29.404297 L 33.5 17 A 1.50015 1.50015 0 0 0 31.976562 15.478516 z"></path>
            </svg>
          </div>
          <div className="bg-yellow design-bg-rev">
            <p> Responsive </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M 9.9375 0.53125 L 9.21875 1.21875 L 1.21875 9.21875 L 0.53125 9.9375 L 1.21875 10.65625 L 16.84375 26.28125 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 44.660156 1.535156 41.589844 1.539063 39.6875 3.4375 L 26.28125 16.84375 L 10.65625 1.21875 Z M 9.9375 3.375 L 11.5625 5 L 10.28125 6.28125 L 11.71875 7.71875 L 13 6.4375 L 14.5625 8 L 12.28125 10.28125 L 13.71875 11.71875 L 16 9.4375 L 17.5625 11 L 16.28125 12.28125 L 17.71875 13.71875 L 19 12.4375 L 20.5625 14 L 18.28125 16.28125 L 19.71875 17.71875 L 22 15.4375 L 23.5625 17 L 22.28125 18.28125 L 23.5625 19.5625 L 18.28125 24.84375 L 3.375 9.9375 Z M 40.28125 5.65625 L 44.34375 9.71875 L 9.96875 44.09375 L 5.90625 40.03125 Z M 34 24.59375 L 33.28125 25.28125 L 31.28125 27.28125 L 32.71875 28.71875 L 34 27.4375 L 35.5625 29 L 33.28125 31.28125 L 34.71875 32.71875 L 37 30.4375 L 38.5625 32 L 37.28125 33.28125 L 38.71875 34.71875 L 40 33.4375 L 41.5625 35 L 39.28125 37.28125 L 40.71875 38.71875 L 43 36.4375 L 44.5625 38 L 43.28125 39.28125 L 44.71875 40.71875 L 46 39.4375 L 46.625 40.0625 L 40.0625 46.625 L 26 32.59375 L 24.59375 34 L 39.34375 48.78125 L 40.0625 49.46875 L 40.78125 48.78125 L 48.78125 40.78125 L 49.46875 40.0625 L 48.78125 39.34375 Z"></path>
            </svg>
          </div>
          <div className="bg-violet design-bg-rev">
            <p> Secure </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M 25 0.09765625 C 22.547958 0.09765625 20.476261 1.4626493 17.404297 3.0429688 C 14.332333 4.6232881 10.218879 6.5308264 3.7851562 7.9433594 L 3 8.1152344 L 3 8.9199219 C 3 24.240387 8.3569062 34.470001 13.736328 40.818359 C 19.11575 47.166718 24.580078 49.699219 24.580078 49.699219 L 25.021484 49.902344 L 25.453125 49.681641 C 25.453125 49.681641 47 38.576752 47 8.9199219 L 47 8.1152344 L 46.214844 7.9433594 C 39.781121 6.5308264 35.667667 4.6232881 32.595703 3.0429688 C 29.523739 1.4626492 27.452042 0.09765625 25 0.09765625 z M 25 2.0976562 C 26.645958 2.0976562 28.543854 3.208085 31.681641 4.8222656 C 34.659993 6.3544283 38.861465 8.2123285 44.935547 9.6445312 C 44.581274 36.77605 26.277963 46.936655 24.984375 47.619141 C 24.359733 47.315673 20.031171 45.151607 15.263672 39.525391 C 10.23404 33.589826 5.2403214 24.057953 5.0625 9.6445312 C 11.137725 8.2122689 15.33967 6.3546016 18.318359 4.8222656 C 21.456146 3.208085 23.354042 2.0976562 25 2.0976562 z M 25 11 C 21.7 11 19 13.799219 19 17.199219 L 19 19 L 17.900391 19 C 16.800391 19 16 19.900391 16 20.900391 L 16 31 C 16 32.1 16.800391 33 17.900391 33 L 32.099609 33 C 33.099609 33 34 32.099609 34 31.099609 L 34 20.900391 C 34 19.900391 33.199609 19 32.099609 19 L 31 19 L 31 17.199219 C 31 13.799219 28.3 11 25 11 z M 25 13 C 27.2 13 29 14.899219 29 17.199219 L 29 19 L 21 19 L 21 17.199219 C 21 14.899219 22.8 13 25 13 z M 18 21 L 32 21 L 32 31 L 18 31 L 18 21 z M 25 24 C 24.2 24 23.599609 24.600391 23.599609 25.400391 C 23.599609 25.800391 23.799609 26.100391 24.099609 26.400391 L 24.099609 27.699219 C 24.099609 28.199219 24.5 28.599609 25 28.599609 C 25.5 28.599609 25.900391 28.199219 25.900391 27.699219 L 25.900391 26.400391 C 26.200391 26.100391 26.400391 25.800391 26.400391 25.400391 C 26.400391 24.600391 25.8 24 25 24 z"></path>
            </svg>
          </div>
          <div className="bg-red design-bg">
            <p> Made with Love </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M 5 4 C 3.3550302 4 2 5.3550302 2 7 L 2 16 L 2 26 L 2 43 C 2 44.64497 3.3550302 46 5 46 L 45 46 C 46.64497 46 48 44.64497 48 43 L 48 26 L 48 16 L 48 11 C 48 9.3550302 46.64497 8 45 8 L 18 8 C 18.08657 8 17.96899 8.000364 17.724609 7.71875 C 17.480227 7.437136 17.179419 6.9699412 16.865234 6.46875 C 16.55105 5.9675588 16.221777 5.4327899 15.806641 4.9628906 C 15.391504 4.4929914 14.818754 4 14 4 L 5 4 z M 5 6 L 14 6 C 13.93925 6 14.06114 6.00701 14.308594 6.2871094 C 14.556051 6.5672101 14.857231 7.0324412 15.169922 7.53125 C 15.482613 8.0300588 15.806429 8.562864 16.212891 9.03125 C 16.619352 9.499636 17.178927 10 18 10 L 45 10 C 45.56503 10 46 10.43497 46 11 L 46 13.1875 C 45.685108 13.07394 45.351843 13 45 13 L 5 13 C 4.6481575 13 4.3148915 13.07394 4 13.1875 L 4 7 C 4 6.4349698 4.4349698 6 5 6 z M 5 15 L 45 15 C 45.56503 15 46 15.43497 46 16 L 46 26 L 46 43 C 46 43.56503 45.56503 44 45 44 L 5 44 C 4.4349698 44 4 43.56503 4 43 L 4 26 L 4 16 C 4 15.43497 4.4349698 15 5 15 z M 20.714844 20 C 17.061376 20 14 22.772122 14 26.267578 C 14 29.498825 16.727445 32.678611 19.287109 35.275391 C 21.846774 37.87217 24.396484 39.796875 24.396484 39.796875 L 24.996094 40.25 L 25.597656 39.800781 C 25.597656 39.800781 28.149759 37.898778 30.710938 35.3125 C 33.272115 32.726222 36 29.534329 36 26.267578 C 36 22.772122 32.938624 20 29.285156 20 C 27.564735 20 26.144769 20.796614 25 21.769531 C 23.855231 20.796614 22.435265 20 20.714844 20 z M 20.714844 22 C 22.084338 22 23.373807 22.738033 24.273438 23.6875 L 25 24.453125 L 25.726562 23.6875 C 26.626193 22.738033 27.915662 22 29.285156 22 C 31.941688 22 34 23.945034 34 26.267578 C 34 28.268827 31.727884 31.443528 29.289062 33.90625 C 27.150185 36.066089 25.499548 37.292977 25.003906 37.671875 C 24.50904 37.289107 22.853941 36.045143 20.712891 33.873047 C 18.272555 31.397326 16 28.210331 16 26.267578 C 16 23.945034 18.058312 22 20.714844 22 z"></path>
            </svg>
            <p> {"2b | | !2b"} </p>
          </div>
        </div>
      </div>
      <div className="x-break-white">
        <hr className="hr-text-white" data-content="X"></hr>
      </div>
      <div className="tech-stack">
        <div className="techstack-title">
          <h1> Tech Stack </h1>
        </div>
        <div className="stack-section sibling-fade">
          <div className="container">
            <img className="tech-stack-img" src={html5} alt="html5" />
            <span className="tooltiptext2">HTML 5: Intermediate</span>
          </div>
          <div className="container">
            <img className="tech-stack-img" src={css3} alt="css3" />
            <span className="tooltiptext2">CSS: Intermediate </span>
          </div>
          <div className="container">
            <img className="tech-stack-img" src={javascript} alt="javascript" />
            <span className="tooltiptext2">Javascript{":"} Intermediate </span>
          </div>
          <div className="container">
            <img className="tech-stack-img" src={python} alt="python" />
            <span className="tooltiptext2">Python: Intermediate</span>
          </div>
          <div className="container">
            <img className="tech-stack-img" src={react} alt="react" />
            <span className="tooltiptext2">
              React: Intermediate - This porftolio is built w/ React!
            </span>
          </div>
          <div className="container">
            <img className="tech-stack-img" src={sass} alt="sass" />
            <span className="tooltiptext2">
              Sass: Beginner - This portfolio was built using SCSS!
            </span>
          </div>
          <div className="container">
            <img className="tech-stack-img" src={mongodb} alt="mongodb" />
            <span className="tooltiptext2">Mongodb: Intermediate</span>
          </div>
          <div className="container">
            <img className="tech-stack-img" src={django} alt="django" />
            <span className="tooltiptext2">Django: Beginner</span>
          </div>
          <div className="container">
            <img className="tech-stack-img" src={nodejs} alt="nodejs" />
            <span className="tooltiptext2">Nodejs: Intermediate</span>
          </div>
          <div className="container">
            <img className="tech-stack-img" src={postgresql} alt="postgresql" />
            <span className="tooltiptext2">Postgresql: Intermediate</span>
          </div>
          <div className="container">
            <img className="tech-stack-img" src={jupyter} alt="jupyter" />
            <span className="tooltiptext2">JupterLabs: Intermediate</span>
          </div>
          <div className="container">
            <img className="tech-stack-img" src={postman} alt="postman" />
            <span className="tooltiptext2">Postman: Intermediate</span>
          </div>
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

      <div className="x-break">
        <hr className="hr-text" data-content="X"></hr>
      </div>
      <div className="project-section">
        <h1> Projects </h1>

        <div className="py-3">
          <div className="project-description">

            <div className="project1 design-bg project">
              <div className="project-overlay">
                <h3>Gamogatchi</h3>
                <div className="project-summary">
                  <p>
                    Gamogatchi was the first project I ever did as part of
                    General Assembly's Software Engineering Immersive Program.
                  </p>
                  <div>
                    <a href="https://www.gamogatchi.com" target="blank">View Site</a>
                    <a href="https://www.github.com" target="blank"> Github</a>
                    <div className="view-more">
                    <a>View More Info</a>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="project2 design-bg project">
              <div className="project-overlay">
                <h3>Golden Path</h3>
                <div className="project-summary">
                  <p>
                    An online market place to promote learning
                  </p>
                  <div>
                    <a href="https://www.gamogatchi.com" target="blank">View Site</a>
                    <a href="https://www.github.com" target="blank"> Github</a>
                    <div className="view-more">
                    <a>View More Info</a>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="project3 design-bg project">
              <div className="project-overlay">
                <h3>Munch</h3>
                <div className="project-summary">
                  <p>
                    Online React application to mimic a food delivery service
                  </p>
                  <div>
                    <a href="https://www.gamogatchi.com" target="blank">View Site</a>
                    <a href="https://www.github.com" target="blank"> Github</a>
                    <div className="view-more">
                    <a>View More Info</a>
                      </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="project4 design-bg project">
              <div className="project-overlay">
                <h3>Hidden.</h3>
                <div className="project-summary">
                  <p>
                    Online web application built to bring awarness to human traficking 
                  </p>
                  <div>
                    <a href="https://www.gamogatchi.com" target="blank">View Site</a>
                    <a href="https://www.github.com" target="blank"> Github</a>
                    <div className="view-more">
                    <a>View More Info</a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1>Contact Me!</h1> 
      </div>


    </div>
  );
}
