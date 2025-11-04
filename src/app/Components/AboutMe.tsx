"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutMe : React.FC = () => {
    const highlights = [
        "Full Stack Development",
        "Modern UI/UX Design",
        "Scalable Architecture",
        "Cloud Technologies"
    ];

    return (
        <section id="about" className="px-6 py-24 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center mb-16"
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-sm md:text-base text-blue-600 dark-mode-text-secondary font-mono tracking-wider mb-4"
                >
                    About Me
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-extrabold mb-6"
                >
                    Crafting Digital Experiences
                </motion.h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid md:grid-cols-2 gap-12 items-center"
            >
                {/* Left side - Description */}
                <div className="space-y-6">
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-gray-700 dark-mode-text-secondary leading-relaxed"
                    >
                        I am a passionate full stack developer with extensive experience in building
                        modern, responsive web applications. I specialize in creating sleek, user-friendly
                        interfaces and robust backend solutions.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-gray-700 dark-mode-text-secondary leading-relaxed"
                    >
                        Continuously striving to deliver innovative and high-quality projects that
                        exceed expectations and create lasting impact. I believe in writing clean,
                        maintainable code and staying up-to-date with the latest technologies.
                    </motion.p>
                </div>

                {/* Right side - Highlights */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    {highlights.map((highlight, index) => (
                        <motion.div
                            key={highlight}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark-mode-hover border border-gray-200 dark-mode-border-gray-200 hover:shadow-md transition-all duration-300"
                        >
                            <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                            <span className="text-lg font-semibold text-gray-800 dark-mode-text-secondary">
                                {highlight}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default AboutMe;