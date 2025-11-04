"use client";

import { motion } from "framer-motion";

function BlogsHeader() {
    const tags = ["6 Articles", "Web Development", "Published on Hashnode"];

    return(
        <section className="bg-gradient-to-b from-white via-indigo-50/20 to-white dark:bg-black py-24 md:py-32 text-center px-4 transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
                >
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">My Blog</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-gray-900 dark:text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-medium"
                >
                    Sharing insights, tutorials and experiences from my journey as a
                    full-stack developer. Topics include React, Next.js, TypeScript, and
                    modern web development practices.
                </motion.p>

                {/* Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    {tags.map((tag, index) => (
                        <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.5 + index * 0.1,
                                type: "spring",
                                stiffness: 200
                            }}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2, type: "spring", stiffness: 400 }
                            }}
                            className="px-6 py-2.5 bg-white dark:bg-gray-800 dark:border dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm md:text-base font-semibold transition-all duration-300 cursor-default shadow-sm hover:shadow-md hover:scale-105 border-0 hover:text-indigo-600"
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