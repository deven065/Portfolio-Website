"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutMe : React.FC = () => {
    return (
        <section className="px-6 py-20 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }} // Start below and transparent
                whileInView={{ opacity: 1, y: 0 }} // Slide up and fade in
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} // Only animate once per page load
                className="flex flex-col md:flex-row gap-8 md:gap-20 items-start"
            >
                {/* Left side - Heading */}
                <h2 className="text-4xl md:text-5xl font-extrabold whitespace-nowrap">
                    About Me
                </h2>

                {/* Right side - Description */}
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    I am a passionate full stack developer with extensive experience in building
                    modern, responsive web applications. I specialize in creating sleek, user-friendly
                    interfaces and robust backend solutions, continuously striving to deliver
                    innovative and high-quality projects that impress recruiters and collaorators alike.
                </p>
            </motion.div>
        </section>
    )
}

export default AboutMe;