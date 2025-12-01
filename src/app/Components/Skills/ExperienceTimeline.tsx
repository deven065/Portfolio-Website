"use client";
// components/ExperienceTimeline.tsx
import React from 'react';
import { motion } from 'framer-motion';

type Experience = {
  title: string;
  date: string;
  description: string;
};

const experiences: Experience[] = [
  {
    title: 'Founder - Deven Digital Labs',
    date: 'Nov 2025 - Present',
    description:
      'Founded and leading Deven Digital Labs, providing full-stack development services and innovative digital solutions. Building scalable applications, managing client projects, and driving business growth through cutting-edge technology and strategic vision.',
  },
  {
    title: 'Software Developer Engineer - 1',
    date: 'Oct 2025 - Present',
    description:
      'Developing and maintaining web applications using React, Next.js, and Node.js. Collaborating with cross-functional teams to deliver high-quality software solutions.',
  },
  {
    title: 'Elite Project Analyst',
    date: 'Feb 2024 - June 2024',
    description:
      "Collaborated with managers to build lead-focused dashboards, mentored junior analysts, and delivered impactful insights while consistently contributing during night shifts in a flexible, team-driven environment."
  },
  {
    title: 'Credit Processing Associate',
    date: 'Oct 2022 - Jan 2023',
    description:
      'Processed and verified credit applications at Karur Vysya Bank, ensuring compliance with banking regulations and timely approval of customer loans.',
  },
];

export const ExperienceTimeline = () => {
  return (
    <section className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white py-20 px-4">
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My career journey and key accomplishments
          </p>
        </motion.div>

        {/* Animated vertical line (desktop) + mobile accent */}
        <motion.div
          aria-hidden
          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-32 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-500/50 to-transparent dark:from-blue-400 dark:via-blue-500/50 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.div
          aria-hidden
          className="md:hidden absolute left-4 top-32 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-500/50 to-transparent dark:from-blue-400 dark:via-blue-500/50 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
          className="space-y-10"
        >
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0; // place first card on the left
            return (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: isLeft ? -18 : 18 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
                className="relative grid md:grid-cols-2 items-start gap-6"
              >
                {/* Center dot aligned to the spine (desktop) */}
                <motion.span
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full shadow-[0_0_0_4px_rgba(59,130,246,0.2)] dark:shadow-[0_0_0_4px_rgba(96,165,250,0.2)] z-10 border-2 border-white dark:border-gray-900"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    delay: index * 0.1
                  }}
                  whileHover={{
                    scale: 1.6,
                    transition: { duration: 0.4, type: "spring", stiffness: 200, damping: 10 }
                  }}
                />

                {/* Left column (desktop): render card when isLeft */}
                {isLeft ? (
                  <motion.div
                    className="hidden md:block md:col-start-1 md:pr-12"
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        y: -8,
                        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                      }}
                      className="rounded-2xl bg-gray-900 dark:bg-gray-900 border-2 border-gray-700 dark:border-gray-700 p-6 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-2xl transition-all duration-500 ease-out will-change-transform md:text-right cursor-pointer"
                    >
                      <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.15 + 0.2 }}
                        className="text-lg md:text-xl font-bold mb-2 text-white dark:text-white"
                      >
                        {exp.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.15 + 0.3 }}
                        className="text-blue-400 dark:text-blue-400 font-semibold mb-3 text-sm"
                      >
                        {exp.date}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.15 + 0.4 }}
                        className="text-gray-300 dark:text-gray-300 leading-relaxed"
                      >
                        {exp.description}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                ) : (
                  <div className="hidden md:block md:col-start-1" />
                )}

                {/* Right column (desktop): render card when not isLeft */}
                {!isLeft ? (
                  <motion.div
                    className="hidden md:block md:col-start-2 md:pl-12"
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        y: -8,
                        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                      }}
                      className="rounded-2xl bg-gray-900 dark:bg-gray-900 border-2 border-gray-700 dark:border-gray-700 p-6 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-2xl transition-all duration-500 ease-out will-change-transform cursor-pointer"
                    >
                      <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.15 + 0.2 }}
                        className="text-lg md:text-xl font-bold mb-2 text-white dark:text-white"
                      >
                        {exp.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.15 + 0.3 }}
                        className="text-blue-400 dark:text-blue-400 font-semibold mb-3 text-sm"
                      >
                        {exp.date}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.15 + 0.4 }}
                        className="text-gray-300 dark:text-gray-300 leading-relaxed"
                      >
                        {exp.description}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                ) : (
                  <div className="hidden md:block md:col-start-2" />
                )}

                {/* Mobile single-column card */}
                <motion.div
                  className="md:hidden relative pl-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  {/* Mobile dot (left accent) */}
                  <motion.span
                    className="absolute left-0 top-2 w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full z-10 border-2 border-white dark:border-black"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                      delay: index * 0.15 + 0.1
                    }}
                    whileHover={{
                      scale: 1.6,
                      transition: { duration: 0.4, type: "spring", stiffness: 200, damping: 10 }
                    }}
                  />
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      y: -8,
                      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                    }}
                    className="rounded-2xl bg-gray-900 dark:bg-gray-900 border-2 border-gray-700 dark:border-gray-700 p-6 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-2xl transition-all duration-500 ease-out will-change-transform cursor-pointer"
                  >
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.2 }}
                      className="text-lg font-bold mb-2 text-white dark:text-white"
                    >
                      {exp.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      className="text-blue-400 dark:text-blue-400 font-semibold mb-3 text-sm"
                    >
                      {exp.date}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.4 }}
                      className="text-gray-300 dark:text-gray-300 leading-relaxed"
                    >
                      {exp.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};
