import React from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with secure payment integration, user authentication, product management, and real-time inventory tracking. Built with modern technologies for optimal performance.",
    image: "/project-1.webp",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
    featured: true
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description: "A sophisticated messaging platform with real-time communication, file sharing, group chats, and message encryption. Supports multiple devices and offline message sync.",
    image: "/project-2.webp",
    technologies: ["React", "Socket.io", "Express", "Redis", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Real-time",
    featured: true
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    description: "A comprehensive project management tool with drag-and-drop functionality, team collaboration features, time tracking, and detailed analytics.",
    image: "/project-1.webp",
    technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Dashboard",
    featured: false
  },
  {
    id: 4,
    title: "Weather Analytics App",
    description: "A weather forecasting application with detailed analytics, historical data visualization, and location-based predictions using machine learning.",
    image: "/project-2.webp",
    technologies: ["React Native", "Python", "FastAPI", "TensorFlow"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Mobile",
    featured: false
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "A unified dashboard for managing multiple social media accounts with scheduling, analytics, and engagement tracking features.",
    image: "/project-1.webp",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Dashboard",
    featured: false
  },
  {
    id: 6,
    title: "AI-Powered Code Review Tool",
    description: "An intelligent code review platform that uses AI to identify bugs, suggest improvements, and enforce coding standards across development teams.",
    image: "/project-2.webp",
    technologies: ["Python", "Django", "OpenAI API", "PostgreSQL", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    category: "AI/ML",
    featured: false
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.featured && (
          <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
        <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          {project.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a
            href={project.liveUrl}
            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition-colors duration-200 font-medium"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-center hover:bg-gray-50 transition-colors duration-200 font-medium"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            My <span className="text-blue-500">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A collection of projects I've built over the years, showcasing my skills in 
            full-stack development, modern frameworks, and emerging technologies.
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-500">
            <span className="bg-gray-100 px-4 py-2 rounded-full">{projects.length} Projects</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">Full Stack Development</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">Modern Technologies</span>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            All Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Like what you see?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to bring your ideas to life
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
