'use client';

import { FC, JSX } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Palette,
  LineChart,
  ShieldCheck,
  Rocket,
  Users,
} from 'lucide-react';

type ExpertiseItem = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const expertiseList: ExpertiseItem[] = [
  {
    icon: <Code2 className="w-10 h-10 text-blue-500 dark:text-blue-400" />,
    title: 'Full-Stack Development',
    description: 'End-to-end application development',
  },
  {
    icon: <Palette className="w-10 h-10 text-blue-500 dark:text-blue-400" />,
    title: 'UI/UX Design',
    description: 'User-centered design principles',
  },
  {
    icon: <LineChart className="w-10 h-10 text-blue-500 dark:text-blue-400" />,
    title: 'Performance Optimization',
    description: 'Web performance and SEO',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-500 dark:text-blue-400" />,
    title: 'Security Best Practices',
    description: 'Secure coding and authentication',
  },
  {
    icon: <Rocket className="w-10 h-10 text-blue-500 dark:text-blue-400" />,
    title: 'Agile Development',
    description: 'Scrum and project management',
  },
  {
    icon: <Users className="w-10 h-10 text-blue-500 dark:text-blue-400" />,
    title: 'Team Collaboration',
    description: 'Leadership and mentoring',
  },
];

const AdditionalExpertise: FC = () => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-gray-100 mb-12">Additional Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {expertiseList.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2, type: "spring", stiffness: 300 }
              }}
              className="flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 border border-transparent dark:border-gray-800 hover:bg-neutral-100 dark:hover:bg-gray-900 hover:border-neutral-200 dark:hover:border-gray-700 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-blue-500/10"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-16 h-16 rounded-full bg-blue-100 dark:bg-gray-800 dark:border dark:border-gray-700 flex items-center justify-center mb-4 transition-colors duration-300 hover:bg-blue-200 dark:hover:bg-gray-700"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-gray-100 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalExpertise;
