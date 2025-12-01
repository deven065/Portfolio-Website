'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Skill = {
  name: string;
  percentage: number;
};

type SkillCardProps = {
  title: string;
  subtitle: string;
  skills: Skill[];
  index?: number;
};

const getColor = (skillName: string) => {
  const map: { [key: string]: string } = {
    React: 'bg-blue-600',
    'Next.js': 'bg-neutral-800',
    TypeScript: 'bg-blue-500',
    JavaScript: 'bg-yellow-400',
    HTML5: 'bg-orange-500',
    CSS3: 'bg-blue-400',
    'Tailwind CSS': 'bg-teal-500',
    'Vue.js': 'bg-green-500',
    'Node.js': 'bg-green-600',
    'Express.js': 'bg-neutral-800',
    Python: 'bg-blue-500',
    Django: 'bg-green-700',
    FastAPI: 'bg-teal-600',
    PHP: 'bg-purple-500',
    Laravel: 'bg-red-500',
    'REST APIs': 'bg-indigo-500',
    MongoDB: 'bg-green-600',
    PostgreSQL: 'bg-indigo-700',
    MySQL: 'bg-blue-700',
    Redis: 'bg-red-600',
    Realm: 'bg-violet-500',
    Firebase: 'bg-yellow-500',
    'React Native': 'bg-blue-700',
    Flutter: 'bg-cyan-500',
    Expo: 'bg-neutral-800',
    'iOS Dev': 'bg-slate-600',
    'Android Dev': 'bg-green-600',
    AWS: 'bg-orange-500',
    'Google Cloud': 'bg-blue-400',
    Azure: 'bg-blue-600',
    Docker: 'bg-blue-700',
    Kubernetes: 'bg-indigo-600',
    'CI/CD': 'bg-green-500',
    Vercel: 'bg-neutral-900',
    Netlify: 'bg-green-400',
    Git: 'bg-red-600',
    GitHub: 'bg-neutral-800',
    'VS Code': 'bg-blue-500',
    Webpack: 'bg-yellow-400',
    Vite: 'bg-purple-500',
    Jest: 'bg-pink-500',
    ESLint: 'bg-indigo-500',
    Prettier: 'bg-teal-500',
  };

  return map[skillName];
};

const SkillCard: React.FC<SkillCardProps> = ({ title, subtitle, skills, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="w-full max-w-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/30 rounded-3xl p-8 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-1 h-12 rounded-full bg-blue-700 dark:bg-blue-400" />
        <div>
          <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-1">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
        </div>
      </div>
      <div className="space-y-5">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <div className="flex justify-between mb-2">
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{skill.percentage}%</span>
            </div>
            <div className="relative w-full bg-gray-200 dark:bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + idx * 0.05, ease: "easeOut" }}
                className={`${getColor(skill.name)} h-2.5 rounded-full relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/30 shimmer"></div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
