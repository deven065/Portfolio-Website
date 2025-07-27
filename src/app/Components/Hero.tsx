"use client";

import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const lines = ["Crafting", "Digital Experiences"];
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    const currentLine = lines[currentLineIndex];
    const speed = 30; // same speed for typing and deleting

    if (direction === "forward") {
      if (charIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + currentLine[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        // Move to next line
        if (currentLineIndex < lines.length - 1) {
          setTypedLines((prev) => [...prev, currentLine]);
          setCurrentText("");
          setCharIndex(0);
          setCurrentLineIndex((prev) => prev + 1);
        } else {
          // Pause before reverse
          const waitTimeout = setTimeout(() => {
            setDirection("backward");
          }, 1000);
          return () => clearTimeout(waitTimeout);
        }
      }
    } else {
      // Deleting backward
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
        }, speed);
        return () => clearTimeout(timeout);
      } else if (typedLines.length > 0) {
        const lastLine = typedLines[typedLines.length - 1];
        setTypedLines((prev) => prev.slice(0, -1));
        setCurrentText(lastLine);
      } else {
        // Restart cycle
        setCurrentLineIndex(0);
        setCharIndex(0);
        setDirection("forward");
      }
    }
  }, [charIndex, currentText, direction, currentLineIndex, typedLines, lines]);

  return (
    <section className="flex flex-col items-center text-center px-6 py-20">
      <div className="relative h-32 md:h-48 mb-6 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {/* Fixed positioning container to prevent layout shifts */}
          <div className="min-h-[8rem] md:min-h-[12rem] flex flex-col justify-center">
            {/* Animated lines */}
            {typedLines.map((line, idx) => (
              <span
                key={idx}
                className={`block ${idx === 1 ? "text-blue-500" : ""}`}
              >
                {line}
              </span>
            ))}
            {currentText && (
              <span
                className={`block ${currentLineIndex === 1 ? "text-blue-500" : ""}`}
              >
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            )}

            {/* Static line */}
            <span className="block">with Passion</span>
          </div>
        </h1>
      </div>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8 transition-opacity duration-700">
        I’m a full-stack developer dedicated to creating innovative and user-friendly web applications.
        Explore my portfolio to see how I can bring your ideas to life with clean, efficient code and
        cutting-edge technology.
      </p>

      {/* Email Signup */}
      <div className="flex gap-4 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow px-6 py-3 border border-black rounded-full text-gray-700 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
        />
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition">
          Sign up
        </button>
      </div>

    </section>
  );
};

export default Hero;
