'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Palette,
  Zap,
  ShieldCheck,
  Rocket,
  Users,
  GitBranch,
  Globe,
  Cpu,
} from 'lucide-react';

const expertiseList = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Full-Stack Development',
    description: 'End-to-end application architecture and development',
    color: 'blue',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'UI/UX Design',
    description: 'User-centered design with modern aesthetics',
    color: 'purple',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Performance Optimization',
    description: 'Lightning-fast load times and smooth interactions',
    color: 'yellow',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Security Best Practices',
    description: 'Secure authentication and data protection',
    color: 'green',
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: 'Version Control',
    description: 'Git workflows and collaboration strategies',
    color: 'orange',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Agile Methodology',
    description: 'Scrum, sprints, and iterative development',
    color: 'red',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'API Development',
    description: 'RESTful and GraphQL API design',
    color: 'cyan',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'System Architecture',
    description: 'Scalable and maintainable system design',
    color: 'indigo',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Team Leadership',
    description: 'Mentoring and cross-functional collaboration',
    color: 'pink',
  },
];

const colorClasses: Record<string, string> = {
  blue: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/30',
  purple: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/30',
  yellow: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-900/30',
  green: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 group-hover:bg-green-200 dark:group-hover:bg-green-900/30',
  orange: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/30',
  red: 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 group-hover:bg-red-200 dark:group-hover:bg-red-900/30',
  cyan: 'bg-cyan-100 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-900/30',
  indigo: 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/30',
  pink: 'bg-pink-100 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 group-hover:bg-pink-200 dark:group-hover:bg-pink-900/30',
};

const AdditionalExpertise: FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-950 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-4">
            Professional Competencies
          </h2>
          <p className="text-lg text-gray-400 dark:text-gray-400 max-w-2xl mx-auto">
            Beyond technical skills, here are the professional capabilities that drive project success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseList.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.04,
                y: -8,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
              }}
              className="group bg-gray-900 dark:bg-gray-900 rounded-2xl p-6 border border-gray-800 dark:border-gray-800 hover:border-gray-700 dark:hover:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${colorClasses[item.color]}`}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-lg font-bold text-white dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalExpertise;
