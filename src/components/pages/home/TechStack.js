import React from 'react'
import { TechStackData } from '../../data/TechStackData'

export default function TechStack() {
    return (
        <>
        {TechStackData.map((item, index) => {
            return (
                <div key={index} className="container">
                    <img className="tech-stack-img" src={item.src} alt={item.alt} />
                    <span className="tooltiptext2">{item.span}</span>
                </div>
            )
        })}
        </>
    )
}
