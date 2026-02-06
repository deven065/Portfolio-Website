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
  Code2,
  Palette,
  TrendingUp,
  Check,
  Users,
  Layers,
  Rocket,
  Shield,
  Award,
  Target,
  Clock,
} from "lucide-react";

// Lazy load heavy below-the-fold components
const Testimonials = lazy(() => import("@/components/Testimonials"));
const ROICalculator = lazy(() => import("@/components/ROICalculator").then(m => ({ default: m.ROICalculator })));
const CostOfInaction = lazy(() => import("@/components/CostOfInaction").then(m => ({ default: m.CostOfInaction })));
const GrowthTimeline = lazy(() => import("@/components/GrowthTimeline").then(m => ({ default: m.GrowthTimeline })));
const FAQ = lazy(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })));

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
        title="Professional Web Development Services | Full-Stack Development Company"
        description="Leading web development company specializing in React, Next.js, Node.js, and full-stack solutions. Custom software development, e-commerce platforms, CRM systems, and technology consulting services for growing businesses. Get your free consultation today and transform your digital presence."
        keywords="web development company, full-stack development, React development, Next.js development, Node.js development, custom software development, e-commerce development, CRM development, technology consulting, web application development, software engineering services, digital transformation, business automation, scalable web solutions, professional web developers, custom web applications, enterprise software development, API development, database design, UI UX design, responsive web design, mobile-first development, cloud integration, DevOps services, software architecture, business intelligence, data analytics, performance optimization, security implementation"
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
                � Clients See Average 275% Revenue Increase
              </div>
              
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  Turn Your Website Into a <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Profit-Generating</span> Asset
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                  We build websites that don't just look good—they drive real business results. Our clients see an average 5x ROI and break even within 3-4 months.
                </p>
              </div>

              {/* Primary CTA - Above the fold, single focus */}
              <div className="pt-4 cta-spacing">
                <Link to="/contact" className="inline-block w-full sm:w-auto">
                  <Button
                    size="cta"
                    className="cta-primary cta-contrast group w-full sm:w-auto shadow-xl hover:shadow-2xl"
                    onClick={() => {
                      trackButtonClick('Get Your Free Consultation', 'hero_primary_cta');
                      trackEvent('cta_click', 'homepage', 'hero_consultation');
                    }}
                  >
                    Get Your Free Consultation
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <p className="text-sm text-slate-400 mt-4 text-center sm:text-left">
                  ✓ Free 30-minute consultation · ✓ Custom strategy session · ✓ No obligation
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8 pt-4 items-center">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  <span className="text-xs sm:text-sm font-medium">99% Client Satisfaction</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  <span className="text-xs sm:text-sm font-medium">On-Time Delivery</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  <span className="text-xs sm:text-sm font-medium">24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Right Side - Tech Illustration */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-96 animate-fade-up" style={{ animationDelay: "200ms" }}>
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

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 pt-8 sm:pt-12 md:pt-16 border-t border-slate-800/50">
            {[
              { icon: <TrendingUp className="w-8 h-8" />, value: 275, suffix: "%", label: "Average Revenue Growth" },
              { icon: <Target className="w-8 h-8" />, value: 5, suffix: "x", label: "Average ROI (Year 1)" },
              { icon: <Clock className="w-8 h-8" />, value: 3, suffix: " Mo", label: "Average Break-Even" },
              { icon: <Award className="w-8 h-8" />, value: 99, suffix: "%", label: "Client Satisfaction" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center group hover-scale animate-fade-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass mb-5 group-hover:glass-strong transition-all">
                  <div className="text-blue-400 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-5xl font-bold text-white mb-3 gradient-text">
                  <StatCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-slate-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost of Inaction */}
      {/* Cost of Inaction */}
      <Suspense fallback={<LazyLoadFallback />}>
        <CostOfInaction />
      </Suspense>

      {/* ROI Calculator */}
      <div id="roi-calculator">
        <Suspense fallback={<LazyLoadFallback />}>
          <ROICalculator />
        </Suspense>
      </div>

      {/* Who We Help */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Who We Help</h2>
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
              className="glass hover:glass-strong rounded-2xl p-8 hover-lift transition-all duration-300 text-center animate-fade-up group"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">How We Drive Your Business Growth</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Every solution we build is designed to increase your revenue and deliver measurable ROI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="glass hover:glass-strong rounded-2xl p-8 hover-lift transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="text-blue-400 group-hover:scale-110 group-hover:text-cyan-400 transition-all mb-5">
                {service.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:gradient-text transition-all">
                {service.title}
              </h3>
              <p className="text-slate-300 mb-4 leading-relaxed">{service.description}</p>
              <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm font-semibold">
                {service.impact}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/services">
            <Button
              size="lg"
              className="glass hover:glass-strong border-slate-600/50 text-white rounded-xl font-semibold text-lg px-8 py-6 group hover-lift"
            >
              View All Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">How We Work</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A proven process designed for success and transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2">
          {process.map((item, idx) => (
            <div key={idx} className="relative animate-fade-up group" style={{ animationDelay: `${idx * 50}ms` }}>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/80 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-4xl font-bold text-blue-400/50 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300 mb-4 inline-block group-hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">{item.step}</div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-white transition-colors duration-300">{item.title}</h3>
                  <p className="text-slate-400 text-sm flex-grow group-hover:text-slate-300 transition-colors duration-300">{item.description}</p>
                </div>
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">We're Obsessed with Your ROI</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Your profit is our success metric. We're not just developers—we're your growth partners.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12">
          <div className="space-y-4">
            {[
              "Every feature designed to drive revenue, not just look pretty",
              "We track conversions and sales, not vanity metrics",
              "Free 90-day performance reviews to optimize results",
              "Most clients break even in 3-4 months",
              "Average 5x ROI in the first year",
              "You get a business partner who's invested in your success",
            ].map((reason, idx) => (
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A selection of successful projects we've delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
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
                  alt={`${project.name} - ${project.category} showing ${project.outcome}`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
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

      {/* Testimonials Section */}
      <Suspense fallback={<LazyLoadFallback />}>
        <Testimonials />
      </Suspense>

      {/* Growth Timeline */}
      <Suspense fallback={<LazyLoadFallback />}>
        <GrowthTimeline />
      </Suspense>

      {/* FAQ Section */}
      <Suspense fallback={<LazyLoadFallback />}>
        <FAQ />
      </Suspense>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to See Real Business Growth?</h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can increase your revenue, automate your processes, and deliver a 5x ROI on your investment.
          </p>
          <Link to="/contact" className="inline-block">
            <Button
              size="cta"
              onClick={() => {
                trackButtonClick('Start Your Project Today', 'final_cta');
                trackEvent('cta_click', 'homepage', 'final_cta');
              }}
              className="cta-primary cta-contrast group shadow-xl hover:shadow-2xl"
            >
              Start Your Project Today
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="text-sm text-slate-400 mt-6">
            Average 5x ROI in first year · 3-4 month break-even · Free consultation
          </p>
        </div>
      </section>
    </Layout>
    </>
  );
}
