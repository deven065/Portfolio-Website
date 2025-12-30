import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Web Development Portfolio - Successful Projects",
    "description": "Explore our portfolio of successful web development projects including CRM systems, e-commerce platforms, and custom software solutions."
  };
  const projects = [
    {
      id: 1,
      name: "MeatCountry",
      description: "A premium meat delivery platform revolutionizing how customers access high-quality meat products online.",
      problem: "Local meat businesses struggled with online presence and customers needed a reliable, user-friendly platform to order fresh, high-quality meat with transparent pricing and delivery tracking.",
      solution: "Built a comprehensive e-commerce platform with modern UI/UX, featuring product catalogs, secure payment processing, real-time order tracking, inventory management, and customer reviews. The platform includes admin dashboards for business owners to manage products, orders, and customer relationships efficiently.",
      stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Node.js", "MongoDB", "Stripe", "JWT", "Cloudinary", "Email Integration"],
      outcome: "Currently in active development with advanced features including product filtering, cart management, user authentication, order history, and responsive design optimized for mobile commerce.",
      image: "/MeatCountry.png",
    },
    {
      id: 2,
      name: "Accent Techno Solutions CRM",
      description: "A robust, enterprise-grade CRM platform built for Accent Techno Solutions Private Limited.",
      problem: "The company needed a scalable CRM system to streamline client management, sales tracking, and internal workflows with secure authentication and role-based access control.",
      solution: "This system streamlines client management, sales tracking, and internal workflows with secure authentication, role-based access, and real-time analytics. Designed for scalability and efficiency, it empowers teams to manage leads, automate follow-ups, and generate insightful reports.",
      stack: ["Next.js", "TailwindCSS", "MariaDB", "Custom API", "Sales Dashboard", "CRM", "Authentication"],
      outcome: "Successfully deployed enterprise-grade CRM system resulting in 40% improvement in sales pipeline visibility, 60% reduction in manual data entry, and enhanced team productivity through automated lead management and real-time reporting capabilities. The platform now manages 500+ active client records with role-based access control ensuring data security.",
      image: "/AccentLogin.png",
    },
    {
      id: 3,
      name: "FlatMate",
      description: "FlatMate is a modern society maintenance web app with role-based access and Firebase authentication.",
      problem: "Society management needed a digital solution to manage records, track payments, and communicate with residents efficiently.",
      solution: "It enables admins to manage records, generate invoices, and send payment reminders and dues. Features include protected routes, scalable architecture, and accessible community management.",
      stack: ["React", "Node.js", "TailwindCSS", "Firebase", "Authentication"],
      outcome: "Developed comprehensive society management platform enabling 75% faster maintenance record processing, automated invoice generation for 200+ residential units, and streamlined payment tracking system. The solution reduced administrative overhead by 50% and improved resident communication through digital notice boards and payment reminders.",
      image: "/FlatMate.png",
    },
    {
      id: 4,
      name: "Premiums4U",
      description: "A modern e-commerce platform specializing in gaming subscriptions at competitive prices.",
      problem: "Gamers needed an affordable and reliable platform to purchase gaming subscriptions with secure payment processing.",
      solution: "The site offers a seamless shopping experience with secure payment processing, user authentication, and an admin interface. Customers can browse various gaming subscriptions including PlayStation Plus, Xbox Game Pass, Nintendo Switch Online, and more at discounted rates.",
      stack: ["Next.js", "React", "TailwindCSS", "E-commerce", "Payment Gateway", "Authentication", "Responsive Design"],
      outcome: "Built with modern web technologies and secure transactions to provide affordable gaming subscriptions worldwide.",
      image: "/Premiums4U.png",
    },
    {
      id: 5,
      name: "Only4Premiums",
      description: "An innovative e-commerce platform offering premium tool subscriptions at affordable prices.",
      problem: "Professionals and traders needed access to expensive premium tools without breaking the bank.",
      solution: "The site provides access to professional tools including TradingView, TradingHub, and other premium software solutions. Features include instant subscription management, secure checkout, automated license delivery, and user-friendly dashboards for real-time updates.",
      stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "E-commerce", "Subscription Management", "Payment Integration", "API Integration"],
      outcome: "Designed to help professionals and traders access essential premium tools with instant delivery and reliable customer support.",
      image: "/Only4Premiums.png",
    },
    {
      id: 6,
      name: "DevOps Portfolio Website",
      description: "A personal portfolio website showcasing clients DevOps skills and projects.",
      problem: "Client needed a professional online presence to showcase DevOps practices, CI/CD pipelines, and cloud infrastructure projects.",
      solution: "Built with Next.js and Tailwind CSS, the site features a responsive design, smooth animations, and a professional layout to present DevOps practices, CI/CD pipelines, cloud infrastructure projects, and experience.",
      stack: ["Next.js", "TailwindCSS", "TypeScript", "Framer Motion", "Responsive Design"],
      outcome: "Professional portfolio showcasing DevOps expertise with smooth animations and responsive design.",
      image: "/devops-portfolio.png",
    },
    {
      id: 7,
      name: "Portfolio Website",
      description: "A personal portfolio website built with Next.js and Tailwind CSS.",
      problem: "Needed a modern, responsive portfolio to showcase skills and experience to potential clients and employers.",
      solution: "The site features a responsive design, smooth animations, and a professional layout to present professional background and skills effectively.",
      stack: ["Next.js", "Tailwind CSS", "TypeScript"],
      outcome: "Clean, professional portfolio with modern design and smooth user experience.",
      image: "/Portfolio-Website.png",
    },
    {
      id: 8,
      name: "Data Analyst Portfolio - Ashok Choudhary",
      description: "Designed and developed a comprehensive portfolio website for Ashok Choudhary, a skilled Data Analyst with 1+ years of experience.",
      problem: "Client needed a portfolio to showcase expertise in business intelligence, data visualization, and ability to transform raw data into meaningful insights.",
      solution: "The site effectively showcases expertise in transforming raw data into meaningful insights through compelling visualizations and interactive dashboards. Features include a professional about section, skills showcase with proficiency indicators, project gallery highlighting 10+ data analysis projects, experience timeline, and integrated contact system with resume download functionality.",
      stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion", "Responsive Design"],
      outcome: "Built with modern web technologies to reflect the client's professional expertise in data analysis and business intelligence.",
      image: "/Ashok-Portfolio.png",
    },
    {
      id: 9,
      name: "Chef Claude",
      description: "Developed an AI-powered recipe app using Mistral AI and Hugging Face APIs.",
      problem: "Users needed a way to generate personalized recipes based on available ingredients in real-time.",
      solution: "Built with React for a dynamic, seamless user experience showcasing the power of AI-driven culinary solutions. The app generates personalized recipes instantly based on ingredients users have on hand.",
      stack: ["React", "JavaScript", "CSS", "Mistral AI", "Hugging Face API"],
      outcome: "AI-powered recipe generation providing personalized cooking solutions in real-time.",
      image: "/Chef-claude.jpeg",
    },
    {
      id: 10,
      name: "Jira Automation",
      description: "Configured and implemented Jira automation workflows to streamline project management processes.",
      problem: "Teams needed to reduce manual tasks and improve productivity in project management workflows.",
      solution: "Developed custom automation rules to reduce manual tasks and improve team productivity. Provided training and documentation for efficient use of automated workflows.",
      stack: ["Jira", "Jira API", "Automation", "Zapier"],
      outcome: "Streamlined project management processes with automated workflows and reduced manual overhead.",
      image: "/jira-automation.webp",
    },
  ];

  return (
    <>
      <SEO 
        title="Our Projects - Web Development Portfolio"
        description="Explore our portfolio of successful web development projects including enterprise CRM systems, e-commerce platforms, SaaS applications, and custom software solutions. Real results for real businesses."
        keywords="web development portfolio, software development projects, CRM development, e-commerce website, SaaS platform, custom software, React projects, full-stack projects, enterprise applications, business automation, web application examples"
        schema={schema}
      />
      <Layout>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Our Work Speaks for Itself
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Case studies of successful projects delivered for innovative companies across industries.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-12 border-b border-slate-800/50 last:border-b-0 last:pb-0 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              } animate-fade-up`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image */}
              <div className={`relative aspect-video bg-slate-800/50 rounded-xl overflow-hidden ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{project.name}</h2>
                  <p className="text-slate-300">{project.description}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-blue-400 mb-2">THE CHALLENGE</h3>
                    <p className="text-slate-300">{project.problem}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-cyan-400 mb-2">OUR SOLUTION</h3>
                    <p className="text-slate-300">{project.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-400 mb-3">TECH STACK</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm text-slate-300 hover:border-slate-600 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-blue-400 mb-2">BUSINESS OUTCOME</h3>
                    <p className="text-slate-300 font-medium">{project.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Build Something Great Together</h2>
        <p className="text-xl text-slate-300 mb-8">
          See how we can help your business scale with our proven expertise and partnership approach.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg">
            Start Your Project
            <ArrowRight size={18} />
          </Button>
        </Link>
      </section>
    </Layout>
    </>
  );
}
