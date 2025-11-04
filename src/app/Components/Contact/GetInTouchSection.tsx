"use client";

import React from 'react';
import { motion } from 'framer-motion';

const GetInTouchSection = () => {
  return (
    <section className="bg-gradient-to-b from-white via-indigo-50/20 to-white dark:from-black dark:via-gray-900 dark:to-black py-28 md:py-36 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-indigo-600 dark:text-blue-400 font-bold tracking-wider mb-6 uppercase"
          >
            Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">Get In Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
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