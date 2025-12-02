"use client";
import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "FlatMate",
    description: {
      main: "FlatMate is a modern society maintenance web app with role‑based access, real‑time data, and secure Firebase authentication, enabling admins to manage records, expenses, and payments while members track announcements and dues. It features protected routes and dark mode for seamless, accessible community management.",
      note: "That project is still a work in progress and because of that link is not active yet."
    },
    image: "/FlatMate.png",
    tech: ["React", "Node.js", "TailwindCSS", "Firebase", "Authentication"],
    featured: true,
    tag: "Full Stack - WIP",
    liveLink: "https://your-live-demo-link.com",
    codeLink: "https://github.com/deven065/FlatMate.git",
  },
  {
    id: 2,
    title: "Accent Techno Solutions CRM",
    description:
      {
        main: "A robust, enterprise-grade CRM platform built for Accent Techno Solutions Private Limited. This system streamlines client management, sales tracking, and internal workflows with secure authentication, role-based access, and real-time analytics. Designed for scalability and efficiency, it empowers teams to manage leads, automate follow-ups, and generate insightful reports.",
        note: "The repository is private due to company policy. You can access the login page, but credentials are not provided as this system is not for public use."
      },
    image: "/CRM.png",
    tech: ["Next.js", "TailwindCSS", "MariaDB", "Deployment", "Custom API", "Sales Dashboard", "CRM", "Authentication"],
    featured: true,
    tag: "Full Stack",
    liveLink: "https://accent-lime.vercel.app/signin?from=%2Fdashboard",
    codeLink: "Sorry, the repository is private",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95 },
};

const FeaturedProjects: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black pt-20 pb-20 min-h-screen px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20 relative z-10"
      >
        <p className="text-sm md:text-base text-blue-600 dark:text-blue-400 font-mono tracking-wider mb-4 uppercase font-semibold">
          Featured Work
        </p>
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Highlighting my most impactful and innovative development projects
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <AnimatePresence>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.6, delay: project.id * 0.1 }}
              className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden hover:shadow-blue-500/30 dark:hover:shadow-blue-400/40 transition-all duration-500 relative hover:scale-[1.02] hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50"
              style={{ transformStyle: "preserve-3d", willChange: "transform" }}
            >
            {/* Image with Badges */}
            <div className="relative group overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className="w-full h-56 object-cover transform transition-transform duration-200 ease-out will-change-transform group-hover:scale-105"
              />
              {project.featured && (
                <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </span>
              )}
              <span className="absolute top-3 right-3 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                {project.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              {typeof project.description === "object" && project.description !== null ? (
                <>
                  <p className="text-gray-600 text-sm mb-2">{project.description.main}</p>
                  <p className="text-sm mb-5">
                    <b>Note:</b> <b><i>{project.description.note}</i></b>
                  </p>
                </>
              ) : (
                <p className="text-gray-600 text-sm mb-5">{project.description as string}</p>
              )}

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-500 text-white text-sm py-2 rounded-lg text-center hover:bg-blue-600 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-gray-300 text-gray-700 text-sm py-2 rounded-lg text-center hover:bg-gray-100 transition"
                >
                  View Code
                </a>
              </div>
            </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;
