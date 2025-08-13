"use client";

import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import Image from "next/image";

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
    date: "August 13, 2025",
    readTime: "5 min read",
    description:
      "Discover the essential patterns and practices for building maintainable React applications that can grow with your team and user base.",
    tags: ["React", "JavaScript", "Frontend"],
    image: "/Building-Scalable-Web-Applications.png",
    views: 2156,
    likes: 87,
    link: "https://medium.com/@devenrikame55/building-scalable-react-applications-best-practices-and-patterns-0c63ea4e0d1b",
  },
  {
    id: 2,
    title: "The Complete Guide to Next.js App Router",
    date: "August 14, 2025",
    readTime: "3 min read",
    description:
      "Everything you need to know about Next.js 13+ App Router, from basic routing to advanced patterns and performance optimization.",
    tags: ["Next.js", "React", "Web Development"],
    image: "/The-Complete-Guide-to-Nextjs.png",
    views: 3421,
    likes: 156,
    link: "https://medium.com/@devenrikame55/the-complete-guide-to-next-js-app-router-explained-for-beginners-4ab80f7fba63",
  },
];

export default function FeaturedArticles() {
  return (
    <section className="py-16 bg-[#f7f8fa]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Featured Articles
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Handpicked articles that showcase my best insights and expertise
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
            >
              {/* Image section with hover zoom */}
              <div className="relative overflow-hidden group">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={800}
                  height={400}
                  className="w-full h-56 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-sm font-medium px-3 py-1 rounded-full">
                  Featured
                </span>
                <div className="absolute bottom-3 right-3 bg-gray-800/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <Clock size={14} />
                  {blog.readTime}
                </div>
              </div>

              {/* Content section */}
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

                {/* Views / Likes */}
                <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                  <span>{blog.views.toLocaleString()}</span>
                  <span>{blog.likes}</span>
                  {/* Read Button */}
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
                  >
                    Read on Medium <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
