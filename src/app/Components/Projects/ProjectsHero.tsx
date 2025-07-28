"use client";
import React from "react";

const ProjectsHero: React.FC = () => {
    return (
        <section className="text-center max-w-3xl mx-auto px-4 py-16">
            {/* Title */}
            <h2 className="text-3xl sm:text-5xl font-extrabold">
                <span className="text-black">My</span>
                <span className="text-blue-500">Projects</span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                A collection of projects I've built over the years, showcasing my skills in full-stack development, modern frameworks, and emerging technologies.
            </p>

            {/* Tages / Filters */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm sm:text-base">
                    6 Projects
                </span>
                <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm sm:text-base">
                    Full Stack Development
                </span>
                <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm sm:text-base">
                    Modern Technologies
                </span>
            </div>
        </section>
    )
}

export default ProjectsHero;