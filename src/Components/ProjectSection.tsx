import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const featuredProjects = [
    {
      image: "/project-1.webp",
      title: "E-Commerce Platform",
      features: [
        "Full-featured online store with secure payments",
        "User authentication and product management",
        "Real-time inventory tracking",
      ],
      description:
        "A comprehensive e-commerce solution built with React and Node.js, featuring secure payment integration, user authentication, and real-time inventory management.",
    },
    {
      image: "/project-2.webp",
      title: "Real-Time Chat App",
      features: [
        "Instant messaging with WebSocket technology",
        "Multi-device messaging support",
        "File sharing and group chats",
      ],
      description:
        "A sophisticated messaging platform with real-time communication, file sharing capabilities, and cross-device synchronization using modern web technologies.",
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-16 px-6">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs font-extrabold uppercase mb-2">Featured Work</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          My Latest Projects
        </h2>
        <p className="text-gray-600">
          Take a look at some of my recent work. These projects showcase my skills in
          full-stack development and modern web technologies.
        </p>
      </div>

      {/* Featured Project Cards */}
      <div className="max-w-7xl mx-auto mb-12">
        {featuredProjects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>

      {/* View All Projects CTA */}
      <div className="text-center">
        <p className="text-gray-600 mb-6">Want to see more of my work?</p>
        <a
          href="/projects"
          className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          View All Projects →
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
