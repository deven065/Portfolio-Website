"use client";
import React from "react";

const ProjectsHero: React.FC = () => {
    return (
        <section 
            className="relative py-20 md:py-28 text-center px-6 overflow-hidden"
            style={{ 
                backgroundColor: '#0f172a',
                color: '#ffffff'
            }}
        >
            <div className="max-w-4xl mx-auto relative" style={{ zIndex: 10 }}>
                {/* Label */}
                <p
                    className="text-sm font-semibold tracking-wide uppercase mb-6"
                    style={{ 
                        color: '#60a5fa',
                        WebkitTextFillColor: '#60a5fa'
                    }}
                >
                    PORTFOLIO
                </p>

                {/* Title */}
                <h1 
                    className="text-4xl md:text-6xl font-bold mb-6"
                    style={{ 
                        color: '#ffffff',
                        WebkitTextFillColor: '#ffffff'
                    }}
                >
                    Featured Projects
                </h1>

                {/* Description */}
                <p
                    className="text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
                    style={{ 
                        color: '#ffffff',
                        WebkitTextFillColor: '#ffffff'
                    }}
                >
                    Explore a selection of my completed projects, built with modern technologies like React and Node.js, demonstrating my full stack expertise and passion for innovative development.
                </p>

                {/* Tags / Filters */}
                <div className="flex flex-wrap justify-center gap-3">
                    <span className="px-5 py-2 bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-300 rounded-full text-sm font-medium border-2 border-gray-900 dark:border-gray-700 shadow-md">
                        10 Projects
                    </span>
                    <span className="px-5 py-2 bg-blue-600 dark:bg-blue-900/20 text-white dark:text-blue-400 rounded-full text-sm font-medium border-2 border-blue-600 dark:border-blue-800 shadow-md">
                        Full Stack
                    </span>
                    <span className="px-5 py-2 bg-purple-600 dark:bg-purple-900/20 text-white dark:text-purple-400 rounded-full text-sm font-medium border-2 border-purple-600 dark:border-purple-800 shadow-md">
                        Modern Tech
                    </span>
                </div>
            </div>
        </section>
    );
};

export default ProjectsHero;