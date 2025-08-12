"use client";

import React from "react";
import Typewriter from "typewriter-effect";


export default function HeroTypewriter() {
    return (
        <h1 className="text-3xl font-bold">
            <Typewriter
                options={{
                    strings: [
                        "Full Stack Developer",
                        "Backend Developer",
                        "API Specialist",
                        "Frontend Developer"
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50
                }}
            />
        </h1>
    );
}
