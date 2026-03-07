import { Link } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { trackButtonClick, trackEvent } from "@/lib/analytics";
import FloatingCTA from "@/components/FloatingCTA";
import { StatCounter } from "@/components/StatsCounter";
import {
  ArrowRight,
  Zap,
  TrendingUp,
  Check,
  Users,
  Rocket,
  Shield,
  Award,
  Target,
  Clock,
  Star,
  Calendar,
} from "lucide-react";

// Lazy load heavy below-the-fold components
const Testimonials = lazy(() => import("@/components/Testimonials"));

// Loading skeleton component
const LazyLoadFallback = () => (
  <div className="py-16 animate-pulse">
    <div className="max-w-7xl mx-auto px-6">
      <div className="h-8 bg-slate-700/50 rounded w-1/3 mx-auto mb-4"></div>
      <div className="h-4 bg-slate-700/30 rounded w-1/2 mx-auto"></div>
    </div>
  </div>
);

export default function Index() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Professional Web Development Services | Full-Stack Development Company | Deven Digital Labs",
    "description": "Leading web development company specializing in React, Next.js, Node.js, and full-stack solutions. Custom software development, e-commerce platforms, CRM systems, and technology consulting services for growing businesses.",
    "keywords": "web development company, full-stack development, React development, Next.js development, Node.js development, custom software development, e-commerce development, CRM development, technology consulting, web application development, software engineering services, digital transformation, business automation, scalable web solutions",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://devendigitallabs.com/"
      }]
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Deven Digital Labs",
      "@id": "https://devendigitallabs.com/#organization",
      "url": "https://devendigitallabs.com",
      "description": "Professional web development and technology consulting company",
      "founder": {
        "@type": "Person",
        "name": "Deven Rikame"
      }
    }
  };
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Revenue-Driving Websites",
      description: "Websites that convert 40% more visitors into customers and generate consistent sales",
      impact: "40% Higher Conversions",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Acquisition Systems",
      description: "Capture 3x more qualified leads with automated booking and lead generation",
      impact: "3x More Leads",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Business Automation",
      description: "Save 20+ hours per week by automating workflows and manual processes",
      impact: "20+ Hours Saved Weekly",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Always-On Sales Machine",
      description: "Your website works 24/7 to generate revenue while you focus on growth",
      impact: "24/7 Revenue Generation",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Fast ROI Delivery",
      description: "Most clients break even within 3-4 months and see 5x ROI in year one",
      impact: "5x ROI Average",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Competitive Advantage",
      description: "Outperform competitors and capture market share with superior digital presence",
      impact: "Beat Your Competition",
    },
  ];

  const featuredProjects = [
    {
      name: "Accent Techno Solutions CRM",
      category: "Enterprise CRM Platform",
      outcome: "Streamlined client management with role-based access",
      color: "from-blue-500 to-cyan-500",
      image: "/project-1.webp",
    },
    {
      name: "Premiums4U",
      category: "E-commerce Platform",
      outcome: "Gaming subscriptions with secure payment processing",
      color: "from-cyan-500 to-teal-500",
      image: "/project-2.webp",
    },
    {
      name: "Only4Premiums",
      category: "Subscription Platform",
      outcome: "Premium tools with instant delivery system",
      color: "from-indigo-500 to-blue-500",
      image: "/1st-image.webp",
    },
  ];

  return (
    <>
      <SEO
        title="Full-Stack Web Development & n8n Automation Agency"
        description="Growth-focused web development + n8n automation. We build systems that capture leads, automate workflows, and drive 5x ROI. Free audit available."
        keywords="web development automation, n8n expert, n8n agency, lead generation systems, business automation agency, custom web development, React Next.js development, conversion optimization"
        canonical="https://devendigitallabs.com/"
        schema={schema}
      />
      <Layout>
        <FloatingCTA />

        {/* Hero Section */}
        <section className="relative pt-8 pb-12 sm:pt-10 sm:pb-16 md:pt-12 md:pb-20 lg:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Hidden on mobile to avoid heavy paint cost in First Contentful Paint */}
            <div className="absolute top-0 right-[-10%] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-blue-500/10 rounded-full blur-3xl hidden lg:block lg:animate-pulse" style={{ animationDuration: '4s' }}></div>
            <div className="absolute bottom-0 left-[-10%] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-cyan-500/10 rounded-full blur-3xl hidden lg:block lg:animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full sm:w-[800px] sm:h-[800px] bg-purple-500/5 rounded-full blur-3xl hidden lg:block"></div>
          </div>


          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
              {/* Left Content */}
              <div className="space-y-8 animate-fade-up">
                <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-4">
                  ⚡ Clients automate 15-20 hours/week + capture 3-5x more leads
                </div>

                <div className="space-y-6">
                  <h1 className="font-black tracking-tight">
                    <span className="block text-xl sm:text-2xl md:text-3xl text-slate-300 font-semibold leading-tight mb-2">
                      A Specialist Digital Agency for Higher
                    </span>
                    <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.85] bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent py-2">
                      Business Revenue & Growth
                    </span>
                    <span className="block text-2xl sm:text-3xl md:text-4xl text-white font-semibold leading-snug mt-4">
                      Via Performance Web & n8n Automation.
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                    We specialize in high-conversion web development and **revenue-focused business automation**. From Dental Clinics to Real Estate firms, we build the digital infrastructure that captures, qualifies, and nurtures leads 24/7.
                  </p>
                </div>

                {/* Vertical Niche Badges - New Internal Linking Section */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {[
                    { label: "Dental Clinics", href: "/services/dental-clinic-web-development" },
                    { label: "Interior Designers", href: "/services/interior-design-web-development" },
                    { label: "Real Estate Brokers", href: "/services/real-estate-web-development" },
                    { label: "Agency Automation", href: "/services/n8n-automation" },
                  ].map((niche) => (
                    <Link
                      key={niche.label}
                      to={niche.href}
                      className="px-4 py-2 bg-slate-800/60 border border-slate-700/50 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:border-blue-500/50 transition-all hover:-translate-y-0.5"
                    >
                      {niche.label} &rarr;
                    </Link>
                  ))}
                </div>

                {/* Primary CTA */}
                <div className="pt-2 space-y-4">
                  <Link to="/contact" className="inline-block w-full sm:w-auto">
                    <Button
                      size="cta"
                      className="cta-primary cta-contrast group w-full sm:w-auto shadow-xl hover:shadow-2xl text-base sm:text-lg"
                      onClick={() => {
                        trackButtonClick('Claim My Free Audit', 'hero_primary_cta');
                        trackEvent('cta_click', 'homepage', 'hero_audit');
                      }}
                    >
                      Get My Free Growth + Automation Audit
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <p className="text-xs text-slate-500 text-center sm:text-left">⏳ Currently accepting 3 more clients for mid-2026</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
                    {["No credit card", "Detailed report in 48 hrs", "Industry specialist insights"].map((t) => (
                      <div key={t} className="flex items-center gap-1.5 text-sm text-slate-400">
                        <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social proof row */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex -space-x-2">
                    {["bg-blue-500", "bg-cyan-500", "bg-teal-500", "bg-indigo-500"].map((c, i) => (
                      <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-slate-900 flex items-center justify-center text-white text-xs font-bold`}>
                        {["A", "R", "P", "K"][i]}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <p className="text-xs text-slate-400">Trusted by Dental Clinics & Luxury Firms Globally</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Featured Work Preview - Optional on small mobile for LCP */}
              <div className="relative animate-fade-up hidden md:block" style={{ animationDelay: "200ms" }}>
                <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-2xl space-y-4">

                  {/* Header */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Growth Case Studies</span>
                    <span className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
                      5x ROI Avg.
                    </span>
                  </div>
                  {/* Project cards */}
                  {[
                    { name: "Medical/Dental Suite", tag: "Revenue Engine", desc: "Automated booking & patient lead gen" },
                    { name: "Design Firm Portfolio", tag: "Luxury Brand", desc: "Visual storytelling & client qualification" },
                    { name: "SaaS CRM Integration", tag: "Automation", desc: "System sync & workflow optimization" },
                  ].map((p, i) => (
                    <div key={i} className="flex items-center justify-between bg-slate-900/40 rounded-xl px-4 py-3 border border-slate-700/30">
                      <div>
                        <span className="text-sm font-semibold text-white">{p.name}</span>
                        <p className="text-xs text-slate-400 mt-0.5">{p.desc}</p>
                      </div>
                      <span className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded px-2 py-0.5 font-semibold whitespace-nowrap ml-2">{p.tag}</span>
                    </div>
                  ))}
                  {/* CTA */}
                  <div className="bg-slate-900/40 rounded-xl px-4 py-3 border-l-2 border-blue-400">
                    <p className="text-sm text-slate-300 italic">"Our Dental clinic saw a 40% increase in bookings within 2 months of launch."</p>
                    <p className="text-xs text-slate-500 mt-1 font-semibold">— Dr. Chaudhary, Healthcare Specialist</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Strip */}
            <div className="pt-12 pb-8 border-t border-slate-800/50">
              <h3 className="text-2xl sm:text-3xl font-bold text-center mb-2">
                Why Industry Leaders Choose <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Deven Digital Labs</span>
              </h3>
              <p className="text-slate-400 text-center mb-8">Specialists in high-ticket industries where every conversion matters.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 leading-relaxed">
                      <span className="text-white font-semibold">Niche Mastery:</span> We build **automated lead gen** that is pre-configured for Healthcare, Design, and Real Estate needs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 leading-relaxed">
                      <span className="text-white font-semibold">SEO Domination:</span> Every site is delivered with **JSON-LD Schema**, semantic markup, and &lt;1.5s load speeds for #1 ranking potential.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 leading-relaxed">
                      <span className="text-white font-semibold">Measurable ROI:</span> We don't track metrics; we track revenue. 250%+ avg growth within first year of implementation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-800/50 rounded-2xl overflow-hidden mt-12 border border-slate-700/50">
              {[
                { value: 275, suffix: "%", label: "Avg. Revenue Growth", sub: "Dental & Design Niche" },
                { value: 5, suffix: "x", label: "Average ROI", sub: "within 12 months" },
                { value: 48, suffix: " hr", label: "Rapid Delivery", sub: "for core automation" },
                { value: 99, suffix: "%", label: "Uptime Guaranteed", sub: "for all custom builds" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center py-8 px-4 bg-slate-900/60 hover:bg-slate-800/60 transition-colors animate-fade-up"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div className="text-4xl sm:text-5xl font-black gradient-text mb-1">
                    <StatCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-white font-semibold text-sm">{stat.label}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* What We Do */}
        <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Our Core Solutions</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              Turn Your Website Into A <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Profit Center</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We specialize in the high-ticket industries where digital specialization is the key to market domination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="relative glass hover:glass-strong rounded-2xl p-7 hover-lift transition-all duration-300 group animate-fade-up border border-slate-700/30 hover:border-blue-500/30"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <span className="absolute top-5 right-5 text-xs font-black text-slate-700 group-hover:text-slate-600 transition-colors tabular-nums">{String(idx + 1).padStart(2, '0')}</span>
                <div className="text-blue-400 group-hover:text-cyan-400 transition-all mb-4">
                  {service.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-xs font-bold">
                  <Check className="w-3 h-3" />{service.impact}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="cta-primary cta-contrast group shadow-lg"
                onClick={() => trackButtonClick('Get My Growth Plan', 'services_mid_cta')}
              >
                Start My Growth Assessment
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-700/50 group">
                Review My Audit Options
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>



        {/* Tech Stack Marquee */}
        <section className="py-12 border-y border-slate-800/50 bg-slate-900/20 overflow-hidden">
          <div className="flex flex-col items-center gap-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Industry-Leading Integration Stack</span>
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {[
                "n8n Expert Agency", "React Specialist", "Node.js Excellence", "TypeScript Architecture", "Vector Search SEO",
                "Conversion Optimization", "Dental Booking APIs", "Real Estate IDX Sync", "Stripe Subscription Logic"
              ].map((tech, idx) => (
                <div key={idx} className="text-xl sm:text-2xl font-black text-slate-700 hover:text-blue-400 transition-colors cursor-default">
                  {tech}
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                "n8n Expert Agency", "React Specialist", "Node.js Excellence", "TypeScript Architecture", "Vector Search SEO",
                "Conversion Optimization", "Dental Booking APIs", "Real Estate IDX Sync", "Stripe Subscription Logic"
              ].map((tech, idx) => (
                <div key={`dup-${idx}`} className="text-xl sm:text-2xl font-black text-slate-700 hover:text-blue-400 transition-colors cursor-default">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Vertical Specialization</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              Results For <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Niche Dominance.</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              We specialize in your industry, meaning we don't guess — we know exactly what works for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {featuredProjects.map((project, idx) => (
              <Link
                to="/projects"
                key={idx}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-700/50 hover:border-blue-500/40 transition-all duration-300 bg-slate-800/30 hover:bg-slate-800/60 animate-fade-up"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={`${project.name} - ${project.category} Portfolio`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <span className="absolute top-3 left-3 z-20 inline-block px-2.5 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                    {project.category}
                  </span>
                </div>
                {/* Card body — always visible */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-base text-white mb-1">{project.name}</h3>
                  <p className="text-slate-400 text-sm flex-1">{project.outcome}</p>
                  <div className="flex items-center gap-1.5 mt-4 text-blue-400 text-sm font-semibold group-hover:gap-2.5 transition-all">
                    View performance data <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button size="lg" className="border border-blue-500/40 text-white bg-transparent hover:bg-blue-500/10 hover:border-blue-400 rounded-xl font-semibold transition-all duration-300 group">
                View Specialized Portfolio
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Recent Insights Section */}
        <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Industrial Insights</span>
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                Dominate Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Digital Market</span>
              </h2>
              <p className="text-lg text-slate-400">
                Data-driven strategies to outrank competitors and capture market share in Healthcare, Design, and Lead-Gen niches.
              </p>
            </div>
            <Link to="/blog">
              <Button variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/5 group">
                Explore knowledge base
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Dental Practice Growth: Why Clinics Lose Patients to Competitors Online",
                excerpt: "Patient behavior has changed. We reveal the 3 conversion traps dental websites fall into and how the #1 ranking firms avoid them.",
                date: "March 6, 2026",
                slug: "dental-clinic-losing-patients-website-audit",
                category: "Healthcare SEO",
                image: "/project-1.webp"
              },
              {
                title: "5 Luxury Features Every Interior Design Portfolio Needs in 2026",
                excerpt: "High-net-worth clients expect visual excellence. Learn how to optimize your portfolio for luxury search intent and visual discovery.",
                date: "March 5, 2026",
                slug: "luxury-interior-design-portfolio-features",
                category: "Luxury Design",
                image: "/1st-image.webp"
              },
              {
                title: "Automating The Real Estate Lifecycle: From Cold Lead to Closed Deal",
                excerpt: "The exact n8n workflows top real estate brokers use to manage listings and qualification on autopilot.",
                date: "March 4, 2026",
                slug: "automate-lead-generation-n8n-guide",
                category: "Real Estate Tech",
                image: "/project-2.webp"
              }
            ].map((post, idx) => (
              <Link key={idx} to={`/blog/${post.slug}`} className="group flex flex-col bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300 hover:bg-slate-800/60 h-full">
                {/* Blog Card Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={`${post.title} - Search Intent Article`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-0.5 bg-blue-500/20 backdrop-blur-md text-blue-400 text-xs font-bold rounded-full border border-blue-500/30">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-slate-400 line-clamp-3 mb-6 flex-1">{post.excerpt}</p>
                  <div className="flex items-center gap-1.5 text-blue-400 text-sm font-semibold group-hover:gap-2.5 transition-all">
                    Master this strategy <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <Suspense fallback={<LazyLoadFallback />}>
          <Testimonials />
        </Suspense>

        {/* FAQ Section */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Answers</span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Common Questions</h2>
            <p className="text-slate-400">Everything you need to know about working with us.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How long does a typical project take?",
                a: "A standard high-converting landing page or direct n8n automation takes 1-2 weeks. More complex SaaS platforms typically range from 4-8 weeks."
              },
              {
                q: "Do you offer post-launch support?",
                a: "Yes, all our projects include 30 days of free technical support and a dedicated 'Grow' maintenance package for long-term updates."
              },
              {
                q: "Can you automate my existing business apps?",
                a: "Absolutely. We specialize in connecting over 400+ apps (Gmail, Slack, CRM, Shopify, etc.) via n8n and custom API integrations."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-800/20 border border-slate-700/30 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition-all">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                  <span className="text-blue-500">Q.</span> {faq.q}
                </h3>
                <p className="text-slate-400 leading-relaxed pl-8 border-l border-slate-700">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl -z-10"></div>
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/30 rounded-3xl p-8 sm:p-14 backdrop-blur-sm">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">Free audit — limited spots</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
                Stop Leaving Revenue<br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">On The Table.</span>
              </h2>
              <p className="text-lg text-slate-300 mb-3 max-w-xl mx-auto">
                We'll audit your website and show you — for free — exactly where you're losing leads and money, and how to fix it.
              </p>
              <p className="text-sm text-amber-400 font-semibold mb-8">⏳ Limited availability — claim your free audit spot today.</p>
              <Link to="/contact" className="inline-block">
                <Button
                  size="cta"
                  onClick={() => {
                    trackButtonClick('Claim My Free Audit', 'final_cta');
                    trackEvent('cta_click', 'homepage', 'final_audit_cta');
                  }}
                  className="cta-primary cta-contrast group shadow-2xl text-base sm:text-lg"
                >
                  Claim My Free Audit Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 justify-center">
                {["No credit card", "Results in 48 hrs", "Worth $500 — 100% free", "No obligation"].map((t) => (
                  <div key={t} className="flex items-center gap-1.5 text-sm text-slate-400">
                    <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
