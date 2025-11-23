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

    return(
        <section ref={sectionRef} className="relative bg-gradient-to-br from-gray-50 via-indigo-50/30 to-purple-50/20 dark:from-gray-950 dark:via-indigo-950/20 dark:to-purple-950/10 py-28 md:py-36 text-center px-4 transition-colors duration-300 overflow-hidden">
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
                    className="text-lg md:text-2xl text-indigo-600 dark:text-indigo-400 font-mono tracking-wider mb-8 uppercase font-bold"
                >
                    Insights & Articles
                </motion.p>

                {/* Heading */}
                <h1 ref={titleRef} className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight gradient-text">
                    My Blog
                </h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-gray-700 dark:text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
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
                            className="px-7 py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 text-gray-900 dark:text-gray-100 rounded-full text-sm md:text-base font-semibold shadow-lg hover:shadow-xl hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-all duration-300 cursor-default"
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