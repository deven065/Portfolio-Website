"use client";

import React, { useState, useEffect, useMemo } from "react";

const Hero: React.FC = () => {
  const lines = useMemo(() => ["Crafting", "Digital Experiences"], []);

  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    const currentLine = lines[currentLineIndex];
    const speed = 30;

    if (direction === "forward") {
      if (charIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + currentLine[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        if (currentLineIndex < lines.length - 1) {
          setTypedLines((prev) => [...prev, currentLine]);
          setCurrentText("");
          setCharIndex(0);
          setCurrentLineIndex((prev) => prev + 1);
        } else {
          const waitTimeout = setTimeout(() => {
            setDirection("backward");
          }, 1000);
          return () => clearTimeout(waitTimeout);
        }
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
        }, speed);
        return () => clearTimeout(timeout);
      } else if (typedLines.length > 0) {
        const lastLine = typedLines[typedLines.length - 1];
        setTypedLines((prev) => prev.slice(0, -1));
        setCurrentText(lastLine);
        setCharIndex(lastLine.length);
      } else {
        setCurrentLineIndex(0);
        setCharIndex(0);
        setDirection("forward");
      }
    }
  }, [charIndex, currentText, direction, currentLineIndex, typedLines, lines]);

  return (
    <section className="flex flex-col items-center text-center px-6 py-28 sm:py-36">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
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
        <span className="block">with Passion</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8 transition-opacity duration-700">
        I’m a full-stack developer dedicated to creating innovative and
        user-friendly web applications. Explore my portfolio to see how I can
        bring your ideas to life with clean, efficient code and cutting-edge
        technology.
      </p>

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
