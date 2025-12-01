"use client";
import React from "react";
import { motion } from "framer-motion";

const ProjectsHero: React.FC = () => {
    return (
        <section className="relative bg-white dark:bg-gray-950 py-20 md:py-28 text-center px-6 overflow-hidden">

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Label */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-sm font-semibold text-blue-600 dark:text-blue-500 tracking-wide uppercase mb-6"
                >
                    Portfolio
                </motion.p>

                {/* Title */}
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                >
                    Featured Projects
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    Explore a selection of my completed projects, built with modern technologies like React and Node.js, demonstrating my full stack expertise and passion for innovative development.
                </motion.p>

                {/* Tags / Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3"
                >
                    <span className="px-5 py-2 bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-300 rounded-full text-sm font-medium border-2 border-gray-900 dark:border-gray-700 shadow-md">
                        10 Projects
                    </span>
                    <span className="px-5 py-2 bg-blue-600 dark:bg-blue-900/20 text-white dark:text-blue-400 rounded-full text-sm font-medium border-2 border-blue-600 dark:border-blue-800 shadow-md">
                        Full Stack
                    </span>
                    <span className="px-5 py-2 bg-purple-600 dark:bg-purple-900/20 text-white dark:text-purple-400 rounded-full text-sm font-medium border-2 border-purple-600 dark:border-purple-800 shadow-md">
                        Modern Tech
                    </span>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsHero;