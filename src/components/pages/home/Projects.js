import React from "react";
import { ProjectData } from "../../data/ProjectData";

export default function Projects() {
  return (
    <>
      {ProjectData.map((item, index) => {
        return (
            <div key={index} className={item.cName}>
              <div className="project-overlay">
                <div className="project-summary">
                  <h3>{item.title}</h3>
                  <p>
                    {item.description}
                  </p>
                  <div className="project-links">
                    <a href={item.deployedSite} target="blank">
                      View Site
                    </a>
                    <a href={item.github} target="blank">
                      Github
                    </a>
                    {/* <div className="view-more">
                      <a>Find out more!</a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
        );
      })}
    </>
  );
}
