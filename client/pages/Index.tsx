import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Zap,
  Code2,
  Palette,
  TrendingUp,
  Check,
  Users,
  Layers,
  Rocket,
  Shield,
} from "lucide-react";

export default function Index() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Full-Stack Web Development & Technology Consulting Services",
    "description": "Expert full-stack web development, custom software solutions, UI/UX design, and technology consulting. Transform your business with cutting-edge digital solutions.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://devendigitallabs.com/"
      }]
    }
  };
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      description: "High-performance websites and applications built with modern tech",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Software Development",
      description: "Custom software solutions architected for scalability",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Engineering",
      description: "Beautiful, intuitive interfaces backed by solid engineering",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Speed, reliability, and efficiency improvements",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "API Development",
      description: "Robust APIs and system integrations for seamless data flow",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Long-term Support",
      description: "Maintenance, updates, and strategic guidance after launch",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Deep dive into your business goals, market, and technical requirements. We align on vision and scope.",
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Craft detailed design systems and scalable architecture that supports long-term growth.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build with clean code and modern practices. Rigorous testing ensures quality and reliability.",
    },
    {
      step: "04",
      title: "Deployment & Scaling",
      description: "Launch with confidence. We handle deployment, optimization, and scale the system as you grow.",
    },
    {
      step: "05",
      title: "Long-term Partnership",
      description: "Post-launch support, continuous improvements, and strategic guidance for sustained success.",
    },
  ];

  const reasons = [
    "Business-first approach focused on your growth and outcomes",
    "Scalable architecture built for the long term, not quick fixes",
    "Clean, maintainable code following industry best practices",
    "Reliable delivery with transparent communication and timelines",
    "Partnership mentality—your success is our success",
  ];

  const featuredProjects = [
    {
      name: "Accent Techno Solutions CRM",
      category: "Enterprise CRM Platform",
      outcome: "Streamlined client management with role-based access",
      color: "from-blue-500 to-cyan-500",
      image: "/AccentLogin.png",
    },
    {
      name: "Premiums4U",
      category: "E-commerce Platform",
      outcome: "Gaming subscriptions with secure payment processing",
      color: "from-cyan-500 to-teal-500",
      image: "/Premiums4U.png",
    },
    {
      name: "Only4Premiums",
      category: "Subscription Platform",
      outcome: "Premium tools with instant delivery system",
      color: "from-indigo-500 to-blue-500",
      image: "/Only4Premiums.png",
    },
  ];

  return (
    <>
      <SEO 
        title="Full-Stack Web Development & Technology Consulting Services"
        description="Expert full-stack web development, custom software solutions, UI/UX design, and technology consulting. Transform your business with cutting-edge digital solutions. Get a free consultation today."
        keywords="web development services, full-stack developer, custom software development, UI/UX design agency, technology consulting, React development, Node.js experts, API development, digital transformation, business automation, CRM development, mobile app development, cloud solutions, scalable web applications, enterprise software"
        schema={schema}
      />
      <Layout>
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Helping businesses grow through scalable digital solutions
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                We partner with founders and growing companies to design, build, and scale high-performance web and software solutions that support long-term business growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
                >
                  Request Proposal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button
                  size="lg"
                  className="border border-blue-500/50 text-white bg-transparent hover:bg-blue-500/10 hover:border-blue-400 rounded-lg font-semibold transition-all duration-300 group"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Trust Element */}
            <div className="pt-4 border-t border-slate-700">
              <p className="text-sm text-slate-400">
                Trusted by startups and growing businesses
              </p>
            </div>
          </div>

          {/* Right Side - Tech Illustration */}
          <div className="relative h-96 sm:h-96 lg:h-full lg:min-h-96 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

              <div className="relative z-10 w-full max-w-sm mx-auto">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-300">
                  <div className="bg-slate-900/80 border-b border-slate-700/50 px-4 py-3 flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                    <span className="text-xs text-slate-400 ml-4 font-mono">
                      scalable-solution.tsx
                    </span>
                  </div>

                  <div className="px-6 py-6 bg-slate-900/30">
                    <pre className="text-sm text-slate-300 font-mono space-y-2 overflow-hidden">
                      <code>{`const buildSuccess = () => {
  return scalable(
    performance,
    reliability,
    growth
  )
}`}</code>
                    </pre>
                  </div>
                </div>

                <div className="absolute -top-8 -right-8 w-20 h-20 border border-blue-500/30 rounded-lg transform rotate-45 animate-float opacity-60"></div>
                <div
                  className="absolute -bottom-8 -left-8 w-16 h-16 border border-cyan-500/30 rounded-full opacity-60 animate-float"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Who We Help</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We partner with ambitious companies at every stage of growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🚀", title: "Startups", desc: "Get to market fast with scalable foundations" },
            { icon: "📈", title: "Growing Businesses", desc: "Scale systems that handle rapid growth" },
            { icon: "🏢", title: "Enterprises", desc: "Complex solutions with reliability at scale" },
            { icon: "👥", title: "Product Teams", desc: "Technical expertise to build great products" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/80 hover:border-slate-600/50 transition-all duration-300 text-center animate-fade-up"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">What We Do</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive services to support your digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/80 hover:border-slate-600/50 transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="text-blue-400 group-hover:text-cyan-400 transition-colors mb-4">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button
              size="lg"
              className="border border-blue-500/50 text-white bg-transparent hover:bg-blue-500/10 hover:border-blue-400 rounded-lg font-semibold transition-all duration-300 group"
            >
              View All Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">How We Work</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A proven process designed for success and transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2">
          {process.map((item, idx) => (
            <div key={idx} className="relative animate-fade-up" style={{ animationDelay: `${idx * 50}ms` }}>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/80 transition-all duration-300 h-full flex flex-col">
                <div className="text-4xl font-bold text-blue-400/50 mb-4">{item.step}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm flex-grow">{item.description}</p>
              </div>

              {idx < process.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="text-slate-700/50" size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Why Deven Digital Labs */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Deven Digital Labs</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            What sets us apart from other agencies.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12">
          <div className="space-y-4">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="flex gap-4 animate-fade-up"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-slate-300 text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A selection of successful projects we've delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, idx) => (
            <Link
              to="/projects"
              key={idx}
              className="group relative overflow-hidden rounded-xl animate-fade-up border border-slate-700/50 hover:border-slate-600/50 transition-all"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Project Image Background */}
              <div className="relative h-72 overflow-hidden">
                {/* Dark overlay - hidden by default, visible on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/70 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Content - hidden by default, visible on hover */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-sm font-semibold text-white">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {project.name}
                    </h3>
                  </div>

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white/90 font-semibold mb-2">{project.outcome}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-white/70 text-sm">Learn more</span>
                      <ArrowRight className="w-4 h-4 text-white/70" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/projects">
            <Button
              size="lg"
              className="border border-blue-500/50 text-white bg-transparent hover:bg-blue-500/10 hover:border-blue-400 rounded-lg font-semibold transition-all duration-300 group"
            >
              View All Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Scale Your Business?</h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Let's discuss your project and how we can help your company grow with reliable, scalable technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              Request Proposal
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/about">
            <Button
              size="lg"
              className="border border-blue-500/50 text-white bg-transparent hover:bg-blue-500/10 hover:border-blue-400 rounded-lg font-semibold transition-all duration-300"
            >
              Learn About Us
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
    </>
  );
}
