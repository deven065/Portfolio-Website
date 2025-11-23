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
      className="text-center"
    >
      <div
        ref={numberRef}
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3 bg-gradient-to-r from-slate-700 via-blue-600 to-cyan-600 dark:from-blue-400 dark:via-pink-500 dark:to-orange-400 bg-clip-text text-transparent"
      >
        {displayValue}{suffix}
      </div>
      <p className="text-lg md:text-xl text-gray-600 dark-mode-text-secondary font-medium">
        {label}
      </p>
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
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark-mode-hero-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-sm md:text-base text-blue-600 dark-mode-text-secondary font-mono tracking-wider mb-4">
            Achievements
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            Numbers That Speak
          </h2>
          <p className="text-lg text-gray-600 dark-mode-text-secondary max-w-2xl mx-auto">
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

