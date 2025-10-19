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
    <section id="projects" className="bg-gray-50 py-16 px-6">
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
