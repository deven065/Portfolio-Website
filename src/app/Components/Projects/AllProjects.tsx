"use client";
import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

type Project = {
  id: number;
  title: string;
  description: string | { main: string; note?: string };
  image: string;
  tech: string[];
  tag: string;
  liveLink: string;
  codeLink?: string;
  tooltipMessage?: string; // optional tooltip
};

const projects: Project[] = [
  {
    id: 1,
    title: "Accent Techno Solutions CRM",
    description: {
      main: "A robust, enterprise-grade CRM platform built for Accent Techno Solutions Private Limited. This system streamlines client management, sales tracking, and internal workflows with secure authentication, role-based access, and real-time analytics. Designed for scalability and efficiency, it empowers teams to manage leads, automate follow-ups, and generate insightful reports.",
      note: "The repository is private due to company policy. You can access the login page, but credentials are not provided as this system is not for public use."
    },
    image: "/CRM.png",
    tech: ["Next.js", "TailwindCSS", "MariaDB", "Deployment", "Custom API", "Sales Dashboard", "CRM", "Authentication"],
    tag: "Full Stack",
    liveLink: "https://accent-lime.vercel.app/signin?from=%2Fdashboard",
    codeLink: "Sorry, the repository is private",
    tooltipMessage: "Repository is private",
  },
  {
    id: 2,
    title: "FlatMate",
    description: {
      main: "FlatMate is a modern society maintenance web app with role-based access, real-time data, and secure Firebase authentication. It enables admins to manage records, expenses, and payments while members track announcements and dues. Features include protected routes and dark mode for seamless, accessible community management.",
      note: "That project is still a work in progress and because of that link is not active yet."
    },
    image: "/FlatMate.png",
    tech: ["React", "Node.js", "TailwindCSS", "Firebase", "Authentication"],
    tag: "Full Stack - WIP",
    liveLink: "https://your-live-demo-link.com",
    codeLink: "https://github.com/deven065/FlatMate.git",
    tooltipMessage: "Work in progress",
  },
  {
    id: 3,
    title: "Chef Claude",
    description:
      "Developed an AI-powered recipe app using Mistral AI and Hugging Face APIs to generate personalized recipes from available ingredients in real-time. Built with React for a dynamic, seamless user experience showcasing practical AI-driven solutions.",
    image: "/Chef-claude.jpeg",
    tech: ["React", "JavaScript", "CSS", "Mistral AI", "Hugging Face API"],
    tag: "Full Stack",
    liveLink: "https://chef-ai-sigma.vercel.app/",
    codeLink: "https://github.com/deven065/chef-ai.git",
    tooltipMessage:
      "Sorry, this project will not work as expected (API is deprecated)",
  },
  {
    id: 4,
    title: "Jira Automation",
    description:
      "Configured and implemented Jira automation workflows to streamline project management processes. Developed custom automation rules to reduce manual tasks and improve team productivity. Provided training and documentation for seamless adoption of automated workflows.",
    image: "/jira-automation.webp",
    tech: ["Java", "Jira API", "Automation", "Zapier"],
    tag: "Backend",
    liveLink: "https://www.atlassian.com/software/jira",
    codeLink: "",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS, showcasing my skills, projects, and experience. The site features a responsive design, smooth animations, and a modern layout to effectively present my professional background.",
    image: "/Portfolio-Website.png",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    tag: "Full Stack",
    liveLink:
      "https://portfolio-website-devens-projects-616976bd.vercel.app/",
    codeLink: "https://github.com/deven065/Portfolio-Website.git",
  },
  {
    id: 6,
    title: "Google Clone",
    description:
      "A clone of the Google Search Engine built with HTML and CSS. Features include a responsive design and basic search functionality. This project demonstrates my ability to replicate complex UI designs and implement fundamental web technologies.",
    image: "/Google.png",
    tech: ["HTML", "CSS"],
    tag: "Frontend",
    liveLink: "https://google-blond-eta.vercel.app/",
    codeLink: "https://github.com/deven065/Google.git",
  },
];

// Framer Motion Variants (TypeScript fix applied)
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.08,
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for TS compatibility
    },
  }),
};

const AllProjects: React.FC = () => {
  return (
    <section className="bg-white pt-20 pb-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-16"
      >
        All Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariants}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition relative h-full flex flex-col"
          >
            {/* Image */}
            <div className="relative group overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={600}
                className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <span className="absolute top-3 right-3 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                {project.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                {typeof project.description === "object" && project.description !== null ? (
                  <>
                    <p className="text-gray-600 text-sm mb-2">{project.description.main}</p>
                    {project.description.note && (
                      <p className="text-sm mb-4">
                        <b>Note:</b> <b><i>{project.description.note}</i></b>
                      </p>
                    )}
                  </>
                ) : (
                  <p className="text-gray-600 text-sm mb-4">{project.description as string}</p>
                )}

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
              </div>

              {/* Buttons */}
              <div className="mt-auto flex gap-3 relative overflow-visible">
                {/* Live Demo */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-500 text-white text-sm py-2 rounded-lg text-center hover:bg-blue-600 transition"
                  title={project.tooltipMessage} // Tooltip without changing styling
                >
                  Live Demo
                </a>

                {project.codeLink ? (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-300 text-gray-700 text-sm py-2 rounded-lg text-center hover:bg-gray-100 transition"
                  >
                    View Code
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex-1 border border-gray-200 text-gray-300 text-sm py-2 rounded-lg text-center cursor-not-allowed"
                  >
                    No Code
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
