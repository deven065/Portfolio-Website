import ProjectCard from "./ProjectCard";

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
      image: "/project-2.webp",
      title: "Project Highlights",
      features: [
        "E-Commerce Platform: React & Node.js, secure payments",
        "Real-Time Chat App: WebSocket, multi-device messaging",
        "Portfolio Website: Modern design, seamless navigation",
      ],
      description:
        "Explore my portfolio to see detailed descriptions, images, and links to each project, demonstrating my technical skills and dedication to creating innovative web solutions.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs font-extrabold uppercase mb-2">My Projects</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          Showcasing My Work
        </h2>
        <p className="text-gray-600">
          Explore a selection of my completed projects, built with modern
          technologies like React and Node.js, demonstrating my full stack
          expertise and passion for innovative development.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
