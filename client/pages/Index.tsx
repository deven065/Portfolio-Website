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
      emoji: "⚡",
      bgClass: "bg-amber-50/70",
      title: "React & Next.js Development",
      description: "Fast, SEO-optimized web apps built on the stack trusted by the world's top companies. Server-side rendering, edge caching, and clean code architecture.",
      tags: ["React", "Next.js", "TypeScript", "Tailwind"]
    },
    {
      emoji: "🤖",
      bgClass: "bg-emerald-50/70",
      title: "Business Automation",
      description: "Eliminate manual, repetitive workflows. Connect your tools, automate your ops, and reclaim 20+ hours per week — with measurable ROI in weeks, not months.",
      tags: ["n8n", "Zapier", "APIs", "CRM"]
    },
    {
      emoji: "🛒",
      bgClass: "bg-orange-50/70",
      title: "E-commerce Development",
      description: "High-converting online stores built for performance. Shopify, WooCommerce, or fully custom — with optimized checkout flows and payment gateway integration.",
      tags: ["Shopify", "WooCommerce", "Payments", "Analytics"]
    },
    {
      emoji: "🚀",
      bgClass: "bg-purple-50/70",
      title: "SaaS & Web Applications",
      description: "Launch your SaaS idea with user auth, dashboards, billing, and a scalable API backend. We've built production SaaS products from zero to paying customers.",
      tags: ["Node.js", "PostgreSQL", "Stripe", "Auth"]
    },
    {
      emoji: "🎨",
      bgClass: "bg-rose-50/70",
      title: "UI/UX Design",
      description: "Conversion-focused design that guides users to action. Wireframes, prototypes, and design systems built in Figma before a single line of code is written.",
      tags: ["Figma", "Prototyping", "UX Research", "Design Systems"]
    },
    {
      emoji: "📊",
      bgClass: "bg-blue-50/70",
      title: "SEO & Performance",
      description: "Technical SEO, Core Web Vitals optimization, and performance audits that push you up the rankings and convert the traffic you're already getting.",
      tags: ["Core Web Vitals", "Technical SEO", "Page Speed", "GA4"]
    }
  ];

  const featuredProjects = [
    {
      name: "Al.Sana Interiors",
      category: "Interior Design",
      outcome: "Luxury portfolio driving $45k in new contracts",
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000",
    },
    {
      name: "Space Age Interiors",
      category: "Interior Design",
      outcome: "85% automation of client consultations",
      color: "from-cyan-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000",
    },
    {
      name: "Accent Techno CRM",
      category: "Enterprise CRM",
      outcome: "20+ hours/week saved for sales teams",
      color: "from-indigo-500 to-blue-500",
      image: "/AccentLogin.png",
    },
  ];

  return (
    <>
      <SEO
        title="Web Development & Automation | Deven Digital Labs"
        description="Growth-focused web development + n8n automation. We build systems that capture leads, automate workflows, and drive 5x ROI. Free audit available."
        keywords="web development automation, n8n workflows, lead generation systems, business automation, custom web development, React Next.js development, conversion optimization, performance optimization, scalable web solutions"
        canonical="https://devendigitallabs.com/"
        schema={schema}
      />
      <Layout>
        <FloatingCTA />

        {/* Hero Section */}
        <section className="relative pt-8 pb-12 sm:pt-10 sm:pb-16 md:pt-12 md:pb-20 lg:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl"></div>
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
                    <span className="block text-2xl sm:text-3xl md:text-4xl text-slate-300 font-semibold leading-snug">
                      We Turn Slow Websites Into
                    </span>
                    <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] leading-[0.95] bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent py-2">
                      Revenue Machines
                    </span>
                    <span className="block text-2xl sm:text-3xl md:text-4xl text-white font-semibold leading-snug">
                      With AI &amp; Automation.
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                    Full-stack development + n8n automation + performance optimization. We don't just build websites—we build systems that capture leads, nurture prospects, and drive revenue while you sleep.
                  </p>
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
                      Claim My Free Audit — No Sales Pitch
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <p className="text-xs text-slate-500 text-center sm:text-left">⏳ Only 3 free audits available this month — 1 remaining</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
                    {["No credit card", "Done in 48 hrs", "$500 value — free"].map((t) => (
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
                    <p className="text-xs text-slate-400">Trusted by 20+ businesses</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Results Dashboard */}
              <div className="relative animate-fade-up" style={{ animationDelay: "200ms" }}>
                <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-2xl space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Client Results</span>
                    <span className="flex items-center gap-1.5 text-xs text-green-400 font-semibold bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>Live
                    </span>
                  </div>
                  {/* Metric rows */}
                  {[
                    { label: "Leads captured this month", value: "247", delta: "+38%", color: "text-cyan-400" },
                    { label: "Hours automated / week", value: "18h", delta: "saved", color: "text-blue-400" },
                    { label: "Conversion rate", value: "6.4%", delta: "+41%", color: "text-teal-400" },
                    { label: "ROI (12 months)", value: "5.2x", delta: "↑ avg", color: "text-cyan-300" },
                  ].map((m, i) => (
                    <div key={i} className="flex items-center justify-between bg-slate-900/40 rounded-xl px-4 py-3">
                      <span className="text-sm text-slate-400">{m.label}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-lg font-bold ${m.color}`}>{m.value}</span>
                        <span className="text-xs text-green-400 bg-green-500/10 border border-green-500/20 rounded px-1.5 py-0.5 font-semibold">{m.delta}</span>
                      </div>
                    </div>
                  ))}
                  {/* Testimonial snippet */}
                  <div className="bg-slate-900/40 rounded-xl px-4 py-3 border-l-2 border-blue-400">
                    <p className="text-sm text-slate-300 italic">"Hit breakeven in 11 weeks. Now running 24/7 on autopilot."</p>
                    <p className="text-xs text-slate-500 mt-1 font-semibold">— Founder, SaaS Startup</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Strip */}
            <div className="pt-12 pb-8 border-t border-slate-800/50">
              <h3 className="text-2xl sm:text-3xl font-bold text-center mb-2">
                Why fast-growing businesses choose <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Deven Digital Labs</span>
              </h3>
              <p className="text-slate-400 text-center mb-8">Not just a dev shop — a revenue growth partner.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 leading-relaxed">
                      We build <span className="text-white font-semibold">lead-capturing automation workflows</span> (n8n, Zapier, custom APIs) that generate qualified prospects 24/7—not just pretty websites
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 leading-relaxed">
                      <span className="text-white font-semibold">Performance-obsessed:</span> Your site loads in &lt;2s, ranks on Google, and converts at 40%+ higher rates than industry average
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 leading-relaxed">
                      <span className="text-white font-semibold">ROI-driven partnership:</span> We track revenue impact, not deliverables. Most clients break even in 90 days and see 5x ROI in year one
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-800/50 rounded-2xl overflow-hidden mt-12 border border-slate-700/50">
              {[
                { value: 275, suffix: "%", label: "Avg. Revenue Growth", sub: "across all clients" },
                { value: 5, suffix: "x", label: "Average ROI", sub: "in year one" },
                { value: 3, suffix: " mo", label: "Break-Even", sub: "average timeline" },
                { value: 99, suffix: "%", label: "Client Satisfaction", sub: "zero project failures" },
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
        <section className="bg-slate-50 py-20 sm:py-28 px-6 sm:px-8 lg:px-12 text-slate-900 border-y border-slate-200/50">
          <div className="max-w-7xl mx-auto">
            {/* Header Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-16">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-200/60 rounded-full text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
                  What We Do
                </span>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
                  End-to-end digital<br />services that <span className="text-blue-600 font-extrabold">convert</span>
                </h2>
              </div>
              <div className="lg:max-w-md lg:justify-self-end">
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  From MVP to enterprise — we handle design, development, and automation so you can focus on growth.
                </p>
              </div>
            </div>

            {/* Grid Container */}
            <div className="border border-slate-200 rounded-3xl bg-white shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-3">
              {services.map((service, idx) => {
                const borderClass = 
                  idx === 5 ? "" : 
                  idx === 0 || idx === 1 ? "border-b md:border-b md:border-r border-slate-200/60" :
                  idx === 2 ? "border-b md:border-b border-slate-200/60" :
                  idx === 3 || idx === 4 ? "border-b md:border-b-0 md:border-r border-slate-200/60" :
                  "";
                return (
                  <div
                    key={idx}
                    className={`p-8 md:p-10 flex flex-col justify-between hover:bg-slate-50/30 transition-all duration-300 ${borderClass}`}
                  >
                    <div className="space-y-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${service.bgClass} shadow-sm`}>
                        {service.emoji}
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-bold text-xl text-slate-900 tracking-tight">{service.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {service.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 bg-slate-50 border border-slate-100/80 text-slate-600 text-xs font-semibold rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl px-8 py-6 shadow-lg shadow-blue-500/20 group transition-all"
                  onClick={() => trackButtonClick('Get My Growth Plan', 'services_mid_cta')}
                >
                  Get My Custom Growth Plan
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="ghost" className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 group rounded-xl px-6">
                  See full services
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>



        {/* Featured Projects */}
        <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Proof of work</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              Real Projects. <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Real Results.</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              Every project is measured by the revenue it drives — not just how it looks.
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
                    alt={`${project.name} - ${project.category}`}
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
                    View case study <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button size="lg" className="border border-blue-500/40 text-white bg-transparent hover:bg-blue-500/10 hover:border-blue-400 rounded-xl font-semibold transition-all duration-300 group">
                View All Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Founder & Trust Section */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-slate-800/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual / Image Side */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/60 rounded-[2rem] p-8 sm:p-10 relative overflow-hidden">
                <div className="flex flex-col gap-6 mb-8">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border border-slate-700/50 overflow-hidden bg-slate-800 flex-shrink-0 relative shadow-xl">
                    <img 
                      src="https://media.licdn.com/dms/image/v2/D4D03AQE-O-G2xYkR4w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709403847774?e=1748476800&v=beta&t=L6g6E9vG_BfXG_vT8_BvW_Qo9T_Qo9T_Qo9T" 
                      alt="Deven Rikame - Founder"
                      className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://ui-avatars.com/api/?name=Deven+Rikame&background=0f172a&color=fff&size=256";
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-100 mb-1 tracking-tight">Deven Rikame</h3>
                    <p className="text-slate-400 font-medium text-sm">Founder & Technical Lead</p>
                  </div>
                </div>

                <blockquote className="text-lg text-slate-300 font-medium leading-relaxed mb-8">
                  "I engineer scalable digital infrastructure that captures leads, automates operations, and generates reliable revenue for B2B growth."
                </blockquote>

                <div className="bg-slate-950/40 rounded-xl p-5 border border-slate-800/50 flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div className="text-center sm:text-left">
                    <div className="flex items-center gap-1 justify-center sm:justify-start text-slate-400 mb-1.5">
                      {Array(5).fill(0).map((_, i) => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                    </div>
                    <p className="text-sm font-medium text-slate-300">Trusted by <span className="text-white font-semibold">50+</span> founders</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text / CTA Side */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800/40 border border-slate-700/50 rounded-full text-slate-300 text-xs font-semibold tracking-wide mb-6">
                Active Outreach & Community
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight text-slate-100">
                Let's build a relationship first.
              </h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed max-w-2xl">
                I understand that you don't hire an engineering partner by stumbling on a random website. You hire based on trust, proof of work, and community reputation.
              </p>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl">
                I share weekly insights on software engineering, business automation, and revenue growth with an active community on LinkedIn. Review my case studies and see the exact architectural systems I build for my clients before you ever commit.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <a 
                  href="https://www.linkedin.com/in/deven-rikame" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-semibold rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5 fill-[#0A66C2]" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  Connect on LinkedIn
                </a>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-sm text-slate-400 font-medium">Over 2,000+ connections</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Suspense fallback={<LazyLoadFallback />}>
          <Testimonials />
        </Suspense>

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
              <p className="text-sm text-amber-400 font-semibold mb-8">⏳ Only 3 audits per month. 1 slot remaining for March.</p>
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
