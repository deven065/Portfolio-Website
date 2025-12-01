"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutMe: React.FC = () => {
    const highlights = [
        {
            title: "Full Stack Development",
            description: "End-to-end development expertise"
        },
        {
            title: "Modern UI/UX Design",
            description: "User-centered design approach"
        },
        {
            title: "Scalable Architecture",
            description: "Building for growth and performance"
        },
        {
            title: "Cloud Technologies",
            description: "Leveraging modern cloud platforms"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="about" className="px-6 py-20 md:py-28 bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-500 tracking-wide uppercase">
                        About
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        Building with Purpose
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left side - Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                            As a full-stack software engineer at Deven Digital Labs, I specialize in creating 
                            elegant, scalable solutions that bridge design and functionality. With expertise in 
                            modern web technologies, I transform complex requirements into intuitive user experiences.
                        </p>
                        <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                            I&apos;m passionate about clean code, performance optimization, and staying at the forefront 
                            of web development trends. Every project is an opportunity to push boundaries and deliver 
                            exceptional results.
                        </p>
                    </motion.div>

                    {/* Right side - Highlights */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="space-y-4"
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-700 dark:bg-blue-400 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-800 dark:text-gray-400 font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;