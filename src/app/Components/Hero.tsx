"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 bg-gray-50 dark:bg-gray-950 overflow-hidden">

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* Company Badge */}
        <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-800">
            Deven Digital Labs
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          {...fadeIn}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
        >
          Building Digital
          <span className="block mt-2 text-blue-700 dark:text-blue-400">
            Excellence
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          {...fadeIn}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-black dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          Full-stack software engineer crafting elegant solutions with modern technologies. 
          Specialized in React, Next.js, and scalable web applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          {...fadeIn}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="group px-8 py-4 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            View Projects
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-gray-500 dark:border-gray-600 text-gray-900 dark:text-gray-300 rounded-lg font-semibold hover:border-gray-700 hover:bg-gray-100 dark:hover:border-gray-400 dark:hover:text-white transition-all duration-200"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div 
          {...fadeIn}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {['React', 'Next.js', 'TypeScript', 'Node.js', 'TailwindCSS'].map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-full border-2 border-blue-600 dark:border-gray-700 shadow-md transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400 dark:text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
