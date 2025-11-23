"use client";

import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Blog {
  id: number;
  title: string;
  date: string;
  readTime: string;
  description: string;
  tags: string[];
  image: string;
  views: number;
  likes: number;
  link: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Building Scalable React Applications: Best Practices and Patterns",
    date: "August 14, 2025",
    readTime: "5 min read",
    description:
      "Discover the essential patterns and practices for building maintainable React applications that can grow with your team and user base.",
    tags: ["React", "JavaScript", "Frontend"],
    image: "/Building-Scalable-Web-Applications.png",
    views: 2156,
    likes: 87,
    link: "https://devenrikame.hashnode.dev/building-scalable-react-applications-best-practices-and-patterns?showSharer=true",
  },
  {
    id: 2,
    title: "The Complete Guide to Next.js App Router",
    date: "August 01, 2025",
    readTime: "3 min read",
    description:
      "Everything you need to know about Next.js 13+ App Router, from basic routing to advanced patterns and performance optimization.",
    tags: ["Next.js", "React", "Web Development"],
    image: "/The-Complete-Guide-to-Nextjs.png",
    views: 3421,
    likes: 156,
    link: "https://devenrikame.hashnode.dev/the-complete-guide-to-nextjs-app-router-explained-for-beginners",
  },
];

export default function FeaturedArticles() {
  return (
    <section className="relative py-24 md:py-32 px-4 bg-white dark:bg-black transition-colors duration-300 overflow-hidden">
      {/* Background decorative elements - only visible in dark mode */}
      <div className="absolute inset-0 opacity-0 dark:opacity-20">
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
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
            className="text-sm md:text-base text-indigo-600 dark:text-indigo-400 font-mono tracking-wider mb-4 uppercase font-semibold"
          >
            Featured
          </motion.p>
          <motion.h2
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold gradient-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured Articles
          </motion.h2>
          <motion.p
            className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Handpicked articles that showcase my best insights and expertise
          </motion.p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/30 overflow-hidden flex flex-col transition-all duration-300 group hover:scale-[1.02] hover:-translate-y-2"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2, type: "spring", stiffness: 300 }
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="will-change-transform"
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={800}
                    height={400}
                    className="w-full h-56 object-cover"
                  />
                </motion.div>
                <span className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  Featured
                </span>
                <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/60 backdrop-blur-sm text-gray-900 dark:text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                  <Clock size={14} />
                  {blog.readTime}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400 mb-3"
                >
                  <Calendar size={16} className="text-indigo-600 dark:text-blue-400" />
                  <span className="font-semibold text-gray-800">{blog.date}</span>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100 leading-tight"
                >
                  {blog.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                  viewport={{ once: true }}
                  className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
                >
                  {blog.description}
                </motion.p>

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {blog.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: index * 0.15 + 0.5 + tagIndex * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:bg-purple-900/30 dark:border dark:border-purple-700 text-indigo-700 dark:text-purple-400 text-sm px-4 py-1.5 rounded-full transition-colors duration-300 font-bold border-0 hover:from-indigo-100 hover:to-purple-100 hover:text-indigo-800"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.6 }}
                  viewport={{ once: true }}
                  className="mt-auto"
                >
                  <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-white mb-4">
                    <span className="font-semibold text-gray-800 dark:text-white">{blog.views.toLocaleString()} views</span>
                    <span className="font-semibold text-gray-800 dark:text-white">{blog.likes} likes</span>
                  </div>
                  <motion.a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500 hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-700 dark:hover:from-blue-400 dark:hover:to-cyan-400 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{
                      scale: 1.08,
                      y: -2,
                      transition: { duration: 0.2, type: "spring", stiffness: 400 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read on Hashnode <ArrowUpRight size={16} />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
