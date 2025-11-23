"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutMe : React.FC = () => {
    const highlights = [
        "Full Stack Development",
        "Modern UI/UX Design",
        "Scalable Architecture",
        "Cloud Technologies"
    ];

    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const highlightsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sectionRef.current) return;

        // Animate title with split text effect
        if (titleRef.current) {
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
                {
                    opacity: 0,
                    y: 50,
                    rotationX: -90,
                },
                {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    stagger: 0.03,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }

        // Animate highlights with cascade effect
        if (highlightsRef.current) {
            gsap.fromTo(
                highlightsRef.current.children,
                {
                    opacity: 0,
                    x: -100,
                    scale: 0.8,
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: highlightsRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="about" className="px-6 py-24 max-w-7xl mx-auto">
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
                <h2
                    ref={titleRef}
                    className="text-4xl md:text-6xl font-extrabold mb-6"
                    style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                >
                    Crafting Digital Experiences
                </h2>
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
                <div
                    ref={highlightsRef}
                    className="space-y-4"
                >
                    {highlights.map((highlight) => (
                        <div
                            key={highlight}
                            className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark-mode-hover border border-gray-200 dark-mode-border-gray-200 hover:shadow-md transition-all duration-300"
                        >
                            <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                            <span className="text-lg font-semibold text-gray-800 dark-mode-text-secondary">
                                {highlight}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default AboutMe;