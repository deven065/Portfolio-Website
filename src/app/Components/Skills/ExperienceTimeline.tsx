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
    <section className="bg-[#0E1629] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Experience Timeline
        </motion.h2>

        {/* Animated vertical line (desktop) + mobile accent */}
        <motion.div
          aria-hidden
          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-28 bottom-0 w-px bg-blue-500/30 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        />
        <div aria-hidden className="md:hidden absolute left-4 top-28 bottom-0 w-px bg-blue-500/20" />

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
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_0_4px_rgba(59,130,246,0.15)]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                />

                {/* Left column (desktop): render card when isLeft */}
                {isLeft ? (
                  <div className="hidden md:block md:col-start-1 md:pr-12">
                    <div className="rounded-xl bg-white/5 border border-white/10 p-5 backdrop-blur hover:shadow-lg hover:shadow-blue-500/10 transition-transform will-change-transform hover:-translate-y-0.5 md:text-right">
                      <h3 className="text-lg md:text-xl font-semibold">{exp.title}</h3>
                      <p className="text-blue-400 font-medium mb-2">{exp.date}</p>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                ) : (
                  <div className="hidden md:block md:col-start-1" />
                )}

                {/* Right column (desktop): render card when not isLeft */}
                {!isLeft ? (
                  <div className="hidden md:block md:col-start-2 md:pl-12">
                    <div className="rounded-xl bg-white/5 border border-white/10 p-5 backdrop-blur hover:shadow-lg hover:shadow-blue-500/10 transition-transform will-change-transform hover:-translate-y-0.5">
                      <h3 className="text-lg md:text-xl font-semibold">{exp.title}</h3>
                      <p className="text-blue-400 font-medium mb-2">{exp.date}</p>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                ) : (
                  <div className="hidden md:block md:col-start-2" />
                )}

                {/* Mobile single-column card */}
                <div className="md:hidden relative pl-6">
                  {/* Mobile dot (left accent) */}
                  <span className="absolute left-0 top-2 w-2.5 h-2.5 bg-blue-500 rounded-full" />
                  <div className="rounded-xl bg-white/5 border border-white/10 p-5 backdrop-blur hover:shadow-lg hover:shadow-blue-500/10 transition-transform will-change-transform hover:-translate-y-0.5">
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-blue-400 font-medium mb-2">{exp.date}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};
