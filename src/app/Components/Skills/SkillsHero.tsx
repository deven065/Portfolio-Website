"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const SkillsHero: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        if (!titleRef.current) return;

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
            { opacity: 0, y: 60, rotationX: -90, scale: 0.5 },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                scale: 1,
                stagger: 0.04,
                duration: 1,
                ease: "elastic.out(1, 0.5)",
                delay: 0.2,
            }
        );
    }, { scope: sectionRef });

    return (
        <div>
            <section ref={sectionRef} className='relative bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/20 dark:from-gray-950 dark:via-purple-950/20 dark:to-blue-950/10 py-28 text-center px-4 overflow-hidden'>
                {/* Background decorative elements */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-lg md:text-2xl text-blue-600 dark:text-blue-400 font-mono tracking-wider mb-8 uppercase font-bold"
                >
                    Technical Expertise
                </motion.p>                    <h2 ref={titleRef} className='text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 gradient-text'>
                        My Skills
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed'
                    >
                        A comprehensive overview of my technical skills and expertise in modern web development, from
                        frontend frameworks to cloud technologies.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className='flex flex-wrap justify-center gap-4'
                    >
                        <span className='px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-sm md:text-base font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300'>
                            1+ Years Experience
                        </span>
                        <span className='px-6 py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl text-gray-900 dark:text-white rounded-full text-sm md:text-base font-semibold border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 shimmer'>
                            Full-Stack Developer
                        </span>
                        <span className='px-6 py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl text-gray-900 dark:text-white rounded-full text-sm md:text-base font-semibold border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 shimmer'>
                            50+ Technologies
                        </span>
                    </motion.div>
                </div>
            </section>
        </div>
    )
};

export default SkillsHero;