"use client";
import React from "react";

const ProjectsHero: React.FC = () => {
    return (
        <section className="bg-white py-20 text-center px-4">
            <div className="max-w-3xl mx-auto">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    My <span className="text-blue-600">Projects</span>
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8">
                    A collection of projects I&apos;ve built over the years, showcasing my skills in full-stack development, modern frameworks, and emerging technologies.
                </p>

                {/* Tags / Filters */}
                <div className="flex flex-wrap justify-center gap-4">
                    <span className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full text-sm md:text-base font-medium">
                        6 Projects
                    </span>
                    <span className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full text-sm md:text-base font-medium">
                        Full Stack Development
                    </span>
                    <span className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full text-sm md:text-base font-medium">
                        Modern Technologies
                    </span>
                </div>
            </div>
        </section>
    )
}

export default ProjectsHero;