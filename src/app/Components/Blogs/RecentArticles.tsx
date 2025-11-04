"use client";

import { Calendar, Clock, ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Article {
  title: string;
  date: string;
  readTime: string;
  description: string;
  tags: string[];
  views: number;
  likes: number;
  image: string;
  link: string;
}

const articles: Article[] = [
  {
    title: "React Hooks Explained Simply",
    date: "August 12, 2025",
    readTime: "11 min read",
    description:
      "Master the fundamentals of React Hooks with clear examples and practical use cases, making your components cleaner, more efficient, and easier to maintain.",
    tags: ["React Hooks", "React", "Web Development"],
    views: 1854,
    likes: 73,
    image: "/React-Hooks-Explained.png",
    link: "https://devenrikame.hashnode.dev/react-hooks-explained",
  },
  {
    title: "TypeScript Tips for Better React Development",
    date: "August 14, 2025",
    readTime: "4 min read",
    description:
      "Level up your React development with these practical TypeScript tips and patterns that will make your code more robust and maintainable.",
    tags: ["TypeScript", "React", "Development"],
    views: 1854,
    likes: 73,
    image: "/TypeScript-Tips for-Better-React-Development.png",
    link: "https://devenrikame.hashnode.dev/typescript-tips-for-better-react-development",
  },
  {
    title: "Building a Modern Authentication System",
    date: "December 20, 2023",
    readTime: "10 min read",
    description:
      "Explore modern authentication: best practices, pitfalls, implementations for security, scalability, and user experience.",
    tags: ["Authentication", "Security", "Backend"],
    views: 2967,
    likes: 134,
    image: "/Building-a-Modern-Authentication-System.png",
    link: "https://devenrikame.hashnode.dev/building-a-modern-authentication-system",
  },
  {
    title: "Good Practices Every Developer Should Follow While Coding",
    date: "August 14, 2025",
    readTime: "3 min read",
    description:
      "Learn essential coding practices every developer should follow for readable, maintainable, and scalable code, from clean coding to version control",
    tags: ["Authentication", "Security", "Backend"],
    views: 2967,
    likes: 134,
    image: "/Good-Practices-Ever- Developer-Should-Follow-While-Coding.png",
    link: "https://devenrikame.hashnode.dev/good-practices-every-developer-should-follow-while-coding",
  },
  {
    title: "Database Design Patterns for Web Applications",
    date: "December 15, 2023",
    readTime: "5 min read",
    description:
      "Learn essential database design patterns for scalable, maintainable web applications, with examples and case studies.",
    tags: ["Database", "Design Patterns", "SQL"],
    views: 1673,
    likes: 89,
    image: "/Database-Design-Patterns-for-Web-Applications.png",
    link: "https://devenrikame.hashnode.dev/database-design-patterns-for-web-applications",
  },
  {
    title: "CSS Grid vs Flexbox: When to use What",
    date: "December 9, 2023",
    readTime: "5 min read",
    description:
      "Explore when to use CSS Grid or Flexbox for responsive layouts, understanding key differences, use cases, and practical examples",
    tags: ["CSS", "Layout", "Frontend"],
    views: 2234,
    likes: 98,
    image: "/CSS-Grid-vs-Flexbox-When-to-use-What.png",
    link: "https://devenrikame.hashnode.dev/css-grid-vs-flexbox-when-to-use-what",
  },
  {
    title: "JavaScript Fundamentals + HR Questions",
    date: "August 21, 2025",
    description:
      "Day 1 of the JavaScript Fundamentals course, covering key concepts and common HR interview questions to help you prepare for your next job.",
    readTime: "3 min read",
    tags: ["JavaScript", "Interview Prep", "Web Development"],
    views: 2967,
    likes: 134,
    image: "/JavaScript-Fundamentals-HR-Questions.png",
    link: "https://devenrikame.hashnode.dev/javascript-fundamentals-hr-questions"
  },
  {
    title: "React Basics + HR Questions",
    date: "August 22, 2025",
    description:
      "Day 2 of the React Basics course, focusing on core concepts and HR interview questions to help you ace your next React job interview.",
    readTime: "3 min read",
    tags: ["React", "Interview Prep", "Web Development"],
    views: 2967,
    likes: 134,
    image: "/React-Basics-HR-Questions.png",
    link: "https://devenrikame.hashnode.dev/react-basics-hr-questions"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95 },
};

export default function RecentArticles() {
  return (
    <section className="py-24 md:py-32 px-4 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-indigo-600 dark:text-blue-400 font-bold tracking-wider mb-3 uppercase"
          >
            Latest Posts
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Recent Articles
          </motion.h2>
          <motion.p
            className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto mb-8 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Latest insights and tutorials from my development journey
          </motion.p>
        </motion.div>

        <motion.div
          layout
          className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {articles.map((article, index) => (
              <motion.div
                key={article.title}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2, type: "spring", stiffness: 300 }
                }}
                className="bg-white dark:bg-gray-900 dark:border-2 dark:border-gray-700/50 rounded-2xl shadow-md dark:shadow-2xl overflow-hidden flex flex-col hover:shadow-xl dark:hover:shadow-blue-500/20 dark:hover:border-blue-500/50 transition-all duration-300 group border-0 dark:border"
              >
                {/* Image */}
                <div className="relative overflow-hidden group">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="will-change-transform"
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                  <span className="absolute bottom-3 right-3 bg-white/95 dark:bg-black/70 backdrop-blur-sm text-gray-900 dark:text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <Clock size={14} /> {article.readTime}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center text-sm text-gray-700 dark:text-gray-400 gap-2 mb-3">
                    <Calendar size={16} className="text-indigo-600 dark:text-blue-400" />
                    <span className="font-semibold text-gray-800">{article.date}</span>
                  </div>

                  <h3 className="text-xl font-bold mt-1 mb-2 text-gray-900 dark:text-gray-100 leading-tight">{article.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-1 flex-1 leading-relaxed">
                    {article.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {article.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: tagIndex * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:bg-purple-900/30 dark:border dark:border-purple-700 text-indigo-700 dark:text-purple-400 text-xs px-3 py-1 rounded-full transition-colors duration-300 font-bold border-0 hover:from-indigo-100 hover:to-purple-100 hover:text-indigo-800"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Stats + Button */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-gray-700 dark:text-white text-sm font-semibold">
                      <span className="text-gray-800 dark:text-white">{article.views.toLocaleString()} views</span> · <span className="text-gray-800 dark:text-white">{article.likes} likes</span>
                    </div>
                    <motion.a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:bg-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-700 dark:hover:bg-blue-500 text-white text-sm px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all duration-300 font-bold"
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        transition: { duration: 0.2, type: "spring", stiffness: 400 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read on Hashnode <ExternalLink size={14} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
