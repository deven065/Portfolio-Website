"use client";
import Image from "next/image";
import React from "react";

const projects = [
  {
    id: 1,
    title: "FlatMate",
    description:
      "FlatMate is a modern society maintenance web app with role‑based access, real‑time data, and secure Firebase authentication, enabling admins to manage records, expenses, and payments while members track announcements and dues. It features protected routes and dark mode for seamless, accessible community management.",
    image: "/FlatMate.png",
    tech: ["React", "Node.js", "TailwindCSS", "Firebase", "Authentication"],
    featured: true,
    tag: "Full Stack",
    liveLink: "https://your-live-demo-link.com",
    codeLink: "https://github.com/deven065/FlatMate.git",
  },
  {
    id: 2,
    title: "Chef Claude",
    description:
      "Developed an AI-powered recipe app using Mistral AI and Hugging Face APIs to generate personalized recipes from available ingredients in real-time. Built with React for a dynamic, seamless user experience showcasing practical AI-driven solutions.",
    image: "/Chef-claude.jpeg",
    tech: ["React", "JavaScript", "CSS", "Mistral AI", "Hugging Face API"],
    featured: true,
    tag: "Full Stack",
    liveLink: "https://chef-ai-sigma.vercel.app/",
    codeLink: "https://github.com/deven065/chef-ai.git",
  },
];

const FeaturedProjects: React.FC = () => {
  return (
    <section className="bg-gray-50 pt-20 pb-20 min-h-screen px-6">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
        Featured Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition relative"
          >
            {/* Image with Badges */}
            <div className="relative group overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className="w-full h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
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
              <p className="text-gray-600 text-sm mb-5">{project.description}</p>

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
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
