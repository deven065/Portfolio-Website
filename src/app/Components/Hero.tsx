"use client";

import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const animatedLine = "Digital Experiences";
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
    <section className="relative z-0 flex flex-col items-center text-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="relative pointer-events-auto max-w-4xl w-full">
        <div className="text-4xl md:text-6xl font-bold font-mono leading-tight mb-6 space-y-2">
          <div>Crafting</div>

          {/* Animated middle line */}
          <div className="text-blue-500 mx-auto">
            <div
              className="inline-block text-center"
              style={{ minWidth: `${animatedLine.length + 1}ch` }}
            >
              {currentText}
              <span className="animate-pulse">|</span>
            </div>
          </div>

          <div>with Passion</div>
        </div>

        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          I’m a full-stack developer dedicated to creating innovative and user-friendly web applications.
          Explore my portfolio to see how I can bring your ideas to life with clean, efficient code and
          cutting-edge technology.
        </p>

        <div className="flex flex-wrap gap-4 w-full max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-6 py-3 border border-black rounded-full text-gray-700 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
