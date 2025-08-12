"use client";

import React from "react";
import Typewriter from "typewriter-effect";



export default function HeroTypewriter() {
    return (
        <h1 className="text-3xl font-bold font-mono">
            <Typewriter
                options={{
                    strings: [
                        "Backend Developer",
                        "Full Stack Developer",
                        "API Specialist"
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75, // typing speed
                    deleteSpeed: 50
                }}
            />
        </h1>
    );
}
