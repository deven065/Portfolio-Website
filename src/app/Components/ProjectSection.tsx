"use client";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95 },
};

const ProjectsSection = () => {
  const projects = [
    {
      image: "/project-1.webp",
      title: "Featured Project",
      features: [
        "E-Commerce Platform: Full-featured online store with secure payments",
        "Real-Time Chat App: Instant messaging with WebSocket technology",
        "Portfolio Website: Showcasing my skills",
      ],
      description:
        "Discover my diverse projects, including an e-commerce platform, real-time chat app, and this portfolio website, all designed with a sleek dark mode and modern aesthetic.",
    },
    {
      image: "/AccentLogin.png",
      title: "Accent Techno Solutions CRM",
      features: [
        "Client Management: Centralized customer database and profiles",
        "Sales Tracking: Lead, opportunity, and pipeline management",
        "Workflow Automation: Task assignment and progress tracking",
        "Analytics Dashboard: Real-time sales and activity insights",
        "Role-Based Access: Secure authentication and permissions",
        "Integrated Communication: Email and notifications",
        "Data Import/Export: Seamless migration and reporting"
      ],
      description:
        "Developed a robust CRM platform for Accent Techno Solutions Private Limited, streamlining client management, sales tracking, and workflow automation. The solution is optimized for scalability, security, and user experience, empowering teams to drive growth and efficiency. Built with React, Node.js, MongoDB, and TailwindCSS.\n\nNote: The repository for this project is private, so the code cannot be shared publicly. You can access the login page, but login credentials are not provided as this system is not for public use.",
      cta: "View Login Page",
      ctaLink: "https://accent-lime.vercel.app/signin?from=%2Fdashboard",
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-24 px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm md:text-base text-blue-600 dark-mode-text-secondary font-mono tracking-wider mb-4"
        >
          My Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Showcasing My Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark-mode-text-secondary"
        >
          Explore a selection of my completed projects, built with modern
          technologies like React and Node.js, demonstrating my full stack
          expertise and passion for innovative development.
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        layout
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <AnimatePresence>
          {projects.map((project) => (
            <motion.div
              key={project.title}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="[transform-origin:center]"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
