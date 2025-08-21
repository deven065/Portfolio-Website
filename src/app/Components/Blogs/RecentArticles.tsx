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
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Recent Articles</h2>
        <p className="text-gray-500 mt-2">
          Latest insights and tutorials from my development journey
        </p>

        <motion.div
          layout
          className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {articles.map((article, idx) => (
              <motion.div
                key={article.title}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative overflow-hidden group">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 right-3 bg-black/70 text-white text-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Clock size={14} /> {article.readTime}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center text-sm text-gray-500 gap-2">
                    <Calendar size={16} className="text-blue-500" />
                    {article.date}
                  </div>

                  <h3 className="text-lg font-semibold mt-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mt-1 flex-1">
                    {article.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats + Button */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-gray-500 text-sm">
                      {article.views.toLocaleString()} views · {article.likes}
                    </div>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-2 rounded-md flex items-center gap-1"
                    >
                      Read on Hashnode <ExternalLink size={14} />
                    </a>
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
