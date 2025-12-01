"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Server, 
  Database, 
  Smartphone, 
  Cloud, 
  Wrench,
  CheckCircle2
} from "lucide-react";

type Skill = {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
  icon?: string;
};

type Category = {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: Skill[];
  color: string;
};

const categories: Category[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: <Code2 className="w-6 h-6" />,
    description: "Modern UI/UX with cutting-edge frameworks",
    color: "blue",
    skills: [
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "HTML5 & CSS3", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "Vue.js", level: "Intermediate" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    description: "Scalable server-side architecture",
    color: "green",
    skills: [
      { name: "Node.js", level: "Expert" },
      { name: "Express.js", level: "Expert" },
      { name: "Python", level: "Advanced" },
      { name: "Django", level: "Intermediate" },
      { name: "FastAPI", level: "Intermediate" },
      { name: "RESTful APIs", level: "Expert" },
      { name: "GraphQL", level: "Advanced" },
      { name: "Microservices", level: "Advanced" },
    ],
  },
  {
    id: "database",
    title: "Database & Storage",
    icon: <Database className="w-6 h-6" />,
    description: "Efficient data management solutions",
    color: "purple",
    skills: [
      { name: "MongoDB", level: "Expert" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "Redis", level: "Intermediate" },
      { name: "Firebase", level: "Advanced" },
      { name: "Prisma ORM", level: "Advanced" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    icon: <Smartphone className="w-6 h-6" />,
    description: "Cross-platform mobile solutions",
    color: "orange",
    skills: [
      { name: "React Native", level: "Advanced" },
      { name: "Flutter", level: "Intermediate" },
      { name: "Expo", level: "Advanced" },
      { name: "iOS Development", level: "Intermediate" },
      { name: "Android Development", level: "Intermediate" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    description: "Cloud infrastructure and automation",
    color: "cyan",
    skills: [
      { name: "AWS", level: "Advanced" },
      { name: "Google Cloud", level: "Intermediate" },
      { name: "Azure", level: "Intermediate" },
      { name: "Docker", level: "Advanced" },
      { name: "Kubernetes", level: "Advanced" },
      { name: "CI/CD Pipelines", level: "Expert" },
      { name: "Vercel", level: "Expert" },
      { name: "Netlify", level: "Advanced" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    icon: <Wrench className="w-6 h-6" />,
    description: "Development tools and best practices",
    color: "indigo",
    skills: [
      { name: "Git & GitHub", level: "Expert" },
      { name: "VS Code", level: "Expert" },
      { name: "Webpack", level: "Advanced" },
      { name: "Vite", level: "Advanced" },
      { name: "Jest & Testing", level: "Advanced" },
      { name: "ESLint & Prettier", level: "Expert" },
      { name: "Agile/Scrum", level: "Advanced" },
    ],
  },
];

const levelColors = {
  Expert: "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
  Advanced: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
  Intermediate: "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800",
};

const categoryColors: Record<string, string> = {
  blue: "border-blue-500 dark:border-blue-400 hover:border-blue-600 dark:hover:border-blue-300",
  green: "border-green-500 dark:border-green-400 hover:border-green-600 dark:hover:border-green-300",
  purple: "border-purple-500 dark:border-purple-400 hover:border-purple-600 dark:hover:border-purple-300",
  orange: "border-orange-500 dark:border-orange-400 hover:border-orange-600 dark:hover:border-orange-300",
  cyan: "border-cyan-500 dark:border-cyan-400 hover:border-cyan-600 dark:hover:border-cyan-300",
  indigo: "border-indigo-500 dark:border-indigo-400 hover:border-indigo-600 dark:hover:border-indigo-300",
};

const SkillsGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section className="relative py-20 bg-gray-50 dark:bg-black">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise across modern development technologies
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
              }}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                bg-white dark:bg-gray-900 rounded-2xl p-6 cursor-pointer
                border-2 transition-all duration-300
                ${selectedCategory === category.id 
                  ? categoryColors[category.color]
                  : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                }
                hover:shadow-xl
              `}
            >
              {/* Category Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`
                  p-3 rounded-xl 
                  ${category.color === 'blue' && 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'}
                  ${category.color === 'green' && 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'}
                  ${category.color === 'purple' && 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'}
                  ${category.color === 'orange' && 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'}
                  ${category.color === 'cyan' && 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400'}
                  ${category.color === 'indigo' && 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'}
                `}>
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Preview */}
              <div className="space-y-2">
                {category.skills.slice(0, 4).map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {skill.name}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${levelColors[skill.level]}`}>
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
                {category.skills.length > 4 && (
                  <p className="text-xs text-gray-500 dark:text-gray-500 text-center pt-2">
                    +{category.skills.length - 4} more skills
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Modal */}
        <AnimatePresence>
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedCategory(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-10 max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-800 my-8"
              >
                {(() => {
                  const category = categories.find(c => c.id === selectedCategory);
                  if (!category) return null;
                  
                  return (
                    <>
                      <div className="flex items-start gap-4 mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 15 }}
                          className={`
                          p-4 rounded-2xl shadow-lg
                          ${category.color === 'blue' && 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'}
                          ${category.color === 'green' && 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'}
                          ${category.color === 'purple' && 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'}
                          ${category.color === 'orange' && 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'}
                          ${category.color === 'cyan' && 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400'}
                          ${category.color === 'indigo' && 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'}
                        `}>
                          {category.icon}
                        </motion.div>
                        <div className="flex-1">
                          <motion.h3 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                          >
                            {category.title}
                          </motion.h3>
                          <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-gray-600 dark:text-gray-400 text-lg"
                          >
                            {category.description}
                          </motion.p>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="border-b border-gray-200 dark:border-gray-700 mb-8"></div>

                      {/* Skills List */}
                      <div className="space-y-3 mb-8">
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                          Skills & Technologies ({category.skills.length})
                        </p>
                        {category.skills.map((skill, idx) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: 0.3 + idx * 0.04,
                              ease: [0.22, 1, 0.36, 1]
                            }}
                            whileHover={{ 
                              x: 4,
                              transition: { duration: 0.2 }
                            }}
                            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
                          >
                            <span className="text-gray-900 dark:text-white font-semibold flex items-center gap-3 text-base">
                              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                              {skill.name}
                            </span>
                            <span className={`px-3 py-1.5 rounded-full text-sm font-bold border ${levelColors[skill.level]} whitespace-nowrap`}>
                              {skill.level}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedCategory(null)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Close
                      </motion.button>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsGrid;