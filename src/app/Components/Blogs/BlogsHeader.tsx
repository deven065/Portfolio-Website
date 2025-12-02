"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function BlogsHeader() {
    const tags = ["6 Articles", "Web Development", "Published on Hashnode"];
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
            span.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
            span.style.webkitBackgroundClip = "text";
            span.style.webkitTextFillColor = "transparent";
            span.style.backgroundClip = "text";
            titleRef.current?.appendChild(span);
        });

        gsap.fromTo(
            titleRef.current.children,
            { opacity: 0, y: 20, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: 0.02,
                duration: 0.4,
                ease: "power2.out",
                delay: 0.1,
            }
        );
    }, { scope: sectionRef });

    return(
        <section ref={sectionRef} className="relative bg-gray-50 dark:bg-gray-950 py-28 md:py-36 text-center px-4 transition-colors duration-300 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-lg md:text-2xl text-blue-600 dark:text-blue-400 font-mono tracking-wider mb-8 uppercase font-bold"
                >
                    Insights & Articles
                </motion.p>

                {/* Heading */}
                <h1 ref={titleRef} className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
                    My Blog
                </h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-gray-800 dark:text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
                >
                    Sharing insights, tutorials and experiences from my journey as a
                    full-stack developer. Topics include React, Next.js, TypeScript, and
                    modern web development practices.
                </motion.p>

                {/* Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    {tags.map((tag, index) => (
                        <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.7 + index * 0.1,
                                type: "spring",
                                stiffness: 200
                            }}
                            whileHover={{
                                scale: 1.08,
                                transition: { duration: 0.2, type: "spring", stiffness: 400 }
                            }}
                            className="px-7 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm md:text-base font-semibold shadow-md hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 cursor-default"
                        >
                            {tag}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default BlogsHeader