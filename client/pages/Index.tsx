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
                  <p className="text-xs text-slate-500 text-center sm:text-left">⏳ Limited availability this month — claim your free spot</p>
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

              {/* Right Side - Featured Work Preview */}
              <div className="relative animate-fade-up" style={{ animationDelay: "200ms" }}>
                <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-2xl space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Recent Work</span>
                    <span className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
                      20+ Clients
                    </span>
                  </div>
                  {/* Project cards */}
                  {[
                    { name: "Accent Techno CRM", tag: "Enterprise CRM", desc: "Role-based access & pipeline management" },
                    { name: "Premiums4U", tag: "E-commerce", desc: "Gaming subscriptions with secure checkout" },
                    { name: "Only4Premiums", tag: "Subscription SaaS", desc: "Instant delivery & access control system" },
                  ].map((p, i) => (
                    <div key={i} className="flex items-center justify-between bg-slate-900/40 rounded-xl px-4 py-3">
                      <div>
                        <span className="text-sm font-semibold text-white">{p.name}</span>
                        <p className="text-xs text-slate-400 mt-0.5">{p.desc}</p>
                      </div>
                      <span className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded px-2 py-0.5 font-semibold whitespace-nowrap ml-2">{p.tag}</span>
                    </div>
                  ))}
                  {/* CTA */}
                  <div className="bg-slate-900/40 rounded-xl px-4 py-3 border-l-2 border-blue-400">
                    <p className="text-sm text-slate-300 italic">"Built exactly what we needed, on time and without cutting corners."</p>
                    <p className="text-xs text-slate-500 mt-1 font-semibold">— Client, Only4Premiums</p>
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
        <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">What we deliver</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              6 Ways We Add <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Revenue</span> To Your Business
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Every service is built around one goal: measurable, provable ROI for you.
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
                Get My Custom Growth Plan
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-700/50 group">
                See full services
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
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
