"use client";
import React from "react";

const ProjectsHero: React.FC = () => {
    return (
        <section className="relative py-20 md:py-28 text-center px-6 overflow-hidden bg-white dark:bg-gray-950">
            <div className="max-w-4xl mx-auto relative" style={{ zIndex: 10 }}>
                
                <p className="text-sm font-semibold tracking-wide uppercase mb-6 text-blue-600 dark:text-blue-400">
                    PORTFOLIO
                </p>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white dark:text-white">
                    Featured Projects
                </h1>

                <p className="text-lg md:text-xl text-white dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                    Explore a selection of my completed projects, built with modern technologies like React and Node.js.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-3">
                    <span className="px-5 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-300 dark:border-gray-700 shadow-sm">
                        10 Projects
                    </span>
                    <span className="px-5 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800 shadow-sm">
                        Full Stack
                    </span>
                    <span className="px-5 py-2 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-800 shadow-sm">
                        Modern Tech
                    </span>
                </div>
            </div>
        </section>
    );
};

export default ProjectsHero;
