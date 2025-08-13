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
    <section className="py-16 bg-[#f7f8fa]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Articles
        </motion.h2>

        <motion.p
          className="text-center text-gray-500 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Handpicked articles that showcase my best insights and expertise
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden group">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={800}
                    height={400}
                    className="w-full h-56 object-cover"
                  />
                </motion.div>
                <span className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-sm font-medium px-3 py-1 rounded-full">
                  Featured
                </span>
                <div className="absolute bottom-3 right-3 bg-gray-800/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <Clock size={14} />
                  {blog.readTime}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar size={14} className="text-blue-600" />
                  {blog.date}
                </div>

                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-50 text-purple-600 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                  <span>{blog.views.toLocaleString()} views</span>
                  <span>{blog.likes} likes</span>
                  <motion.a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Read on Hashnode <ArrowUpRight size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
