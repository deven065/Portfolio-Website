"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Rocket, TrendingUp } from 'lucide-react';

const SkillsHero: React.FC = () => {
    const stats = [
        { icon: <Code className="w-5 h-5" />, label: "Technologies", value: "50+" },
        { icon: <Rocket className="w-5 h-5" />, label: "Projects", value: "20+" },
        { icon: <Award className="w-5 h-5" />, label: "Experience", value: "1+ Years" },
        { icon: <TrendingUp className="w-5 h-5" />, label: "Success Rate", value: "98%" },
    ];

    return (
        <section className='relative bg-white dark:bg-gray-950 pt-32 pb-20 px-4 overflow-hidden'>
            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-block mb-4"
                    >
                        <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold border border-blue-100 dark:border-blue-800">
                            Skills & Expertise
                        </span>
                    </motion.div>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className='text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight'
                    >
                        Technical Expertise &<br />
                        <span className="text-blue-600 dark:text-blue-400">Professional Skills</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className='text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium'
                    >
                        A comprehensive showcase of my technical capabilities, from frontend frameworks to cloud infrastructure, 
                        demonstrating proficiency across the full development stack.
                    </motion.p>
                </div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto'
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                                duration: 0.7, 
                                delay: 0.6 + index * 0.1,
                                type: "spring",
                                stiffness: 80,
                                damping: 12
                            }}
                            whileHover={{ 
                                scale: 1.05, 
                                y: -8,
                                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                            }}
                            className='bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-500 ease-out'
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl mb-3">
                                {stat.icon}
                            </div>
                            <div className="text-2xl md:text-3xl font-bold text-white dark:text-white mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-white dark:text-white font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
};

export default SkillsHero;