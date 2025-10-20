"use client";

import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const animatedLine = "Software Developer Engineer";
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    const speed = 20; // ⚡ Fastest speed

    if (direction === "forward") {
      if (charIndex < animatedLine.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + animatedLine[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        const pause = setTimeout(() => setDirection("backward"), 700); // quick pause
        return () => clearTimeout(pause);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        const reset = setTimeout(() => {
          setCharIndex(0);
          setDirection("forward");
        }, 200);
        return () => clearTimeout(reset);
      }
    }
  }, [charIndex, currentText, direction]);

  return (
    <section className="relative z-0 flex flex-col items-center text-center px-6 py-28 md:py-36 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Subtle background SVG */}
      <svg className="absolute left-1/2 top-0 -translate-x-1/2 opacity-10 z-0" width="900" height="300" viewBox="0 0 900 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="450" cy="150" rx="400" ry="120" fill="#3B82F6" />
      </svg>

      <div className="relative pointer-events-auto max-w-3xl w-full z-10">
        <p className="text-base md:text-lg text-gray-500 mb-2 font-mono">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-gray-900">
          Deven Rikame
        </h1>
        {/* Animated subtitle */}
        <div className="text-blue-600 text-2xl md:text-3xl font-semibold mb-6 h-10 md:h-12 flex items-center justify-center">
          <span className="inline-block text-center" style={{ minWidth: `${animatedLine.length + 1}ch` }}>
            {currentText}
            <span className="animate-pulse">|</span>
          </span>
        </div>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          I build modern, scalable web applications with a focus on clean code, seamless user experience, and innovative solutions. Let’s collaborate to turn your ideas into reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs mx-auto justify-center">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition text-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition text-center"
          >
            Contact Me
          </a>
        </div>
      </div>
      {/* Optional: Scroll down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <span className="text-gray-400 animate-bounce">↓</span>
      </div>
    </section>
  );
};

export default Hero;
