import React from "react";
import { CodeDesignData } from "../../data/CodeDesignData";

export default function CodeDesign() {
  return (
    <>
      {CodeDesignData.map((item, index) => {
        return (
            <div key={index} className={item.cName}>
              <p> {item.title} </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={item.width}
                height={item.height}
                viewBox={item.viewBox}
              >
                <path d={item.d}></path>
              </svg>
              <p> {item.description ? item.description : null} </p>
            </div>
        );
      })}
    </>
  );
}
