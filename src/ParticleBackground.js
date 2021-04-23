import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from './config/ParticleConfig';

export default function ParticleBackground() {
    return (
        <Particles
        options={particlesConfig}>
        </Particles>
    )
}
