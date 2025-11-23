"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const ProjectsHero: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        if (!titleRef.current) return;

        // Animate title characters
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
        <section ref={sectionRef} className="relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/10 py-28 text-center px-4 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Label */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-lg md:text-2xl text-blue-600 dark:text-blue-400 font-mono tracking-wider mb-8 uppercase font-bold"
                >
                    Portfolio Showcase
                </motion.p>

                {/* Title */}
                <h2 ref={titleRef} className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 gradient-text">
                    My Projects
                </h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    A collection of projects I&apos;ve built over the years, showcasing my skills in full-stack development, modern frameworks, and emerging technologies.
                </motion.p>

                {/* Tags / Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <span className="px-6 py-3 bg-gray-800 dark:bg-gray-900/80 backdrop-blur-xl text-white rounded-full text-sm md:text-base font-semibold border border-gray-700/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        6 Projects
                    </span>
                    <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm md:text-base font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        Full Stack Development
                    </span>
                    <span className="px-6 py-3 bg-gray-800 dark:bg-gray-900/80 backdrop-blur-xl text-white rounded-full text-sm md:text-base font-semibold border border-gray-700/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        Modern Technologies
                    </span>
                </motion.div>
            </div>
        </section>
    )
}

export default ProjectsHero;