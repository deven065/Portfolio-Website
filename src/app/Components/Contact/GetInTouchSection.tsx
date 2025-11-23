"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const GetInTouchSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!titleRef.current) return;

    const text = titleRef.current.textContent || "";
    const chars = text.split("");
    titleRef.current.innerHTML = "";
    
    chars.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      titleRef.current?.appendChild(span);
    });

    gsap.fromTo(
      titleRef.current.children,
      { opacity: 0, y: 30, rotationX: -90, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        stagger: 0.02,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.1,
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-white dark:from-gray-950 dark:via-indigo-950/20 dark:to-blue-950/10 dark:bg-gradient-to-br py-32 md:py-40 px-4 transition-colors duration-300 overflow-hidden">
      {/* Background decorative elements - only visible in dark mode */}
      <div className="absolute inset-0 opacity-0 dark:opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-2xl text-indigo-600 dark:text-indigo-400 font-mono tracking-wider mb-8 uppercase font-bold"
          >
            Let&apos;s Connect
          </motion.p>
          <h2 ref={titleRef} className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-10 leading-tight gradient-text">
            Get In Touch
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Have a project in mind? Let&apos;s discuss how we can work together to bring your ideas to life.
            I&apos;m always excited to take on new challenges and collaborate with amazing people.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouchSection;