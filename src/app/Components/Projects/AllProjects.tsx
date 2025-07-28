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
        tag: "Full Stack",
        liveLink: "https://chef-ai-sigma.vercel.app/",
        codeLink: "https://github.com/deven065/chef-ai.git"
    },
    {
        id: 3,
        title: "Portfolio Website",
        description:
            "A personal portfolio website built with Next.js and Tailwind CSS, showcasing my skills, projects, and experience. The site features a responsive design, smooth animations, and a modern layout to effectively present my work and professional background.",
        image: "/Portfolio-Website.png",
        tech: ["Next.js", "Tailwind CSS", "TypeScript"],
        tag: "Full Stack",
        liveLink: "https://portfolio-website-devens-projects-616976bd.vercel.app/",
        codeLink: "https://github.com/deven065/Portfolio-Website.git"
    },
    {
    id: 4,
        title: "Google Clone",
        description:
            "A clone of Google Search Engine built with HMTL and CSS, featuring a responsive design and basic search functionality. This project demonstrates my ability to replicate complex UI designs and implement fundamental web technologies.",
        image: "/Google.png",
        tech: ["HTML", "CSS"],
        tag: "Frontend",
        liveLink: "https://google-blond-eta.vercel.app/",
        codeLink: "https://github.com/deven065/Google.git",
    },
];

const AllProjects: React.FC = () => {
  return (
    <section className="bg-white pt-20 pb-20 px-6">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
        All Projects
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={project.id}
            // If it's the last project, center it
            className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition relative ${
              index === 3 ? "md:col-span-3 md:w-1/3 mx-auto" : ""
            }`}
          >
            {/* Image + Tag */}
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={250}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-3 right-3 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                {project.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
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

export default AllProjects;