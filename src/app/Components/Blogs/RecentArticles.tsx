// components/RecentArticles.tsx
"use client";

import { Calendar, Clock, ExternalLink } from "lucide-react";
import Image from "next/image";

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
    image: "/React-hooks.jpeg",
    link: "https://medium.com/@devenrikame55/react-hooks-explained-8e5dc0b0012c",
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
    image: "/TypeScript-Tips-For-Better-React-Development.png",
    link: "https://medium.com/@devenrikame55/3de87c79174e?source=friends_link&sk=4abd7ac9e6b206ba1953eb57e0e1fc10",
  },
  {
    title: "Building a Modern Authentication System",
    date: "December 20, 2023",
    readTime: "10 min read",
    description:
      "Learn how to implement secure, user-friendly authentication in modern web applications using JWT, OAuth, and best practices.",
    tags: ["Authentication", "Security", "Backend"],
    views: 2967,
    likes: 134,
    image: "/articles/article2.jpg",
    link: "https://medium.com/@yourprofile/your-article",
  },
  {
    title: "Database Design Patterns for Web Applications",
    date: "December 15, 2023",
    readTime: "9 min read",
    description:
      "Explore essential database design patterns and optimization techniques for building efficient and scalable applications.",
    tags: ["Database", "Design Patterns", "SQL"],
    views: 1673,
    likes: 89,
    image: "/articles/article3.jpg",
    link: "https://medium.com/@yourprofile/your-article",
  },
  {
    title: "CSS Grid vs Flexbox: When to use What",
    date: "Devember 9, 2023",
    readTime: "7 min read",
    description: 
        "A practical guide to choosing between CSS Grid and Flexbox for your layout needs, with real-world examples and use cases.",
    tags: ["CSS", "Layout", "Frontend"],
    views: 2234,
    likes: 98,
    image: "/articles/article4.jpg",
    link: "https://medium.com/@yourprofile/you-article",
  },
];

export default function RecentArticles() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Recent Articles</h2>
        <p className="text-gray-500 mt-2">
          Latest insights and tutorials from my development journey
        </p>

        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col"
            >
              {/* Image with badge */}
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
                    Read on Medium <ExternalLink size={14} />
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
