"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface StatItemProps {
  value: string;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, suffix = "", delay = 0 }) => {
  const ref = useRef(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);
  const targetValue = parseInt(value);

  useGSAP(() => {
    if (!isInView || !numberRef.current) return;

    // Counter animation
    gsap.to(
      { val: 0 },
      {
        val: targetValue,
        duration: 2,
        delay: delay,
        ease: "power2.out",
        onUpdate: function() {
          setDisplayValue(Math.round(this.targets()[0].val));
        },
      }
    );

    // Add floating animation
    gsap.to(numberRef.current, {
      y: -5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: delay + 2,
    });
  }, { dependencies: [isInView], scope: ref });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="text-center group"
    >
      <div className="relative inline-block p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
        <div
          ref={numberRef}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3 text-blue-700 dark:text-blue-400"
        >
          {displayValue}{suffix}
        </div>
        <p className="text-base md:text-lg text-gray-900 dark:text-gray-300 font-bold">
          {label}
        </p>
        {/* Decorative line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-700 dark:bg-blue-400 rounded-full group-hover:w-24 transition-all duration-300"></div>
      </div>
    </motion.div>
  );
};

const StatisticsSection: React.FC = () => {
  const stats = [
    { value: "50", label: "Projects Completed", suffix: "+" },
    { value: "100", label: "Happy Clients", suffix: "+" },
    { value: "5", label: "Years Experience", suffix: "+" },
    { value: "20", label: "Technologies Mastered", suffix: "+" },
  ];

  return (
    <section className="relative py-24 px-6 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-sm md:text-base text-blue-600 dark:text-blue-400 font-mono tracking-wider mb-4 uppercase">
            Achievements
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Numbers That Speak
          </h2>
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
            A glimpse of my journey and impact through the years
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;

