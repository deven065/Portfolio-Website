"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const animatedLine = "Software Developer Engineer";
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    const speed = 80;

    if (direction === "forward") {
      if (charIndex < animatedLine.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + animatedLine[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        const pause = setTimeout(() => setDirection("backward"), 2000);
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
        }, 500);
        return () => clearTimeout(reset);
      }
    }
  }, [charIndex, currentText, direction]);

  return (
    <section className="relative z-0 flex flex-col items-center text-center px-6 py-20 md:py-32 overflow-hidden hero-section">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark-mode-hero-bg transition-all duration-500" />

      {/* Floating circles animation */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply blur-xl opacity-20 animate-blob dark-mode-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply blur-xl opacity-20 animate-blob animation-delay-2000 dark-mode-blob" />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply blur-xl opacity-20 animate-blob animation-delay-4000 dark-mode-blob" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative pointer-events-auto max-w-4xl w-full z-10"
      >
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base text-gray-600 dark-mode-text-secondary mb-4 font-mono tracking-wider"
        >
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 hero-name"
        >
          Deven Rikame
        </motion.h1>

        {/* Animated subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl md:text-4xl font-semibold mb-8 h-12 md:h-16 flex items-center justify-center hero-subtitle"
        >
          <span className="inline-block text-center" style={{ minWidth: `${animatedLine.length + 1}ch` }}>
            {currentText}
            <span className="animate-pulse ml-1">|</span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-700 dark-mode-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I build modern, scalable web applications with a focus on clean code, seamless user experience, and innovative solutions. Let&apos;s collaborate to turn your ideas into reality.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto justify-center"
        >
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105 hero-button-primary"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 text-center transform hover:scale-105 hero-button-secondary"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <a href="#projects" className="flex flex-col items-center group">
          <span className="text-gray-500 dark-mode-text-secondary animate-bounce text-2xl mb-2">↓</span>
          <span className="text-xs text-gray-500 dark-mode-text-secondary group-hover:text-blue-600 transition-colors">Scroll Down</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
