import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { ArrowRight, Globe, Check, X, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development & Technology Consulting",
    "provider": {
      "@type": "Organization",
      "name": "Deven Digital Labs"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Software Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design"
          }
        }
      ]
    }
  };
  const [region, setRegion] = useState<"india" | "international">("international");

  useEffect(() => {
    // Simple region detection based on browser locale
    const locale = navigator.language;
    if (locale.includes("en-IN") || locale.includes("hi")) {
      setRegion("india");
    }
  }, []);

  const services = {
    india: {
      currency: "₹",
      webDevelopment: [
        { name: "Business Websites", price: "50,000+", description: "Professional websites with lead capture, search foundations, analytics, and mobile optimization.", roi: "Lead generation", breakeven: "Scope-based" },
        { name: "E-commerce Platforms", price: "1,20,000+", description: "Online stores with product management, payments, order workflows, and operational integrations.", roi: "Online sales", breakeven: "Scope-based" },
        { name: "Startup Product Sites", price: "80,000+", description: "Flexible marketing websites designed for clear product communication and iterative growth.", roi: "Product launch", breakeven: "Scope-based" },
        { name: "Enterprise Solutions", price: "1,50,000+", description: "Custom platforms with integrations, permissions, reporting, and scalable architecture.", roi: "Operations", breakeven: "Scope-based" },
      ],
      software: [
        { name: "Business Automation Systems", price: "1,50,000+", description: "Custom tools for repetitive workflows, approvals, notifications, and data movement.", roi: "Process automation", breakeven: "Scope-based" },
        { name: "Scalable SaaS Platforms", price: "2,50,000+", description: "Subscription products with authentication, billing, administration, and maintainable architecture.", roi: "SaaS delivery", breakeven: "Scope-based" },
        { name: "Custom CRM & Tools", price: "1,20,000+", description: "Tailored systems for customer records, pipeline stages, tasks, reporting, and team access.", roi: "Sales operations", breakeven: "Scope-based" },
        { name: "API & Integrations", price: "60,000+", description: "Connect systems and automate reliable data flow between the tools your business already uses.", roi: "Connected systems", breakeven: "Scope-based" },
      ],
      other: [
        { name: "Conversion Optimization", price: "40,000+", description: "Research and improve important landing, enquiry, and checkout journeys using measured user behaviour.", roi: "Experimentation" },
        { name: "Performance & Speed", price: "50,000+", description: "Audit and improve Core Web Vitals, asset delivery, rendering, and runtime bottlenecks.", roi: "Performance" },
        { name: "Growth Partnership", price: "15,000+/month", description: "Ongoing measurement, maintenance, experimentation, and strategic technical guidance.", roi: "Ongoing support" },
      ],
      digitalMarketing: [
        { name: "SEO Strategy & Implementation", price: "25,000+/month", description: "Technical SEO, search research, content planning, on-page improvements, and reporting.", roi: "Organic discovery", breakeven: "Measured monthly" },
        { name: "Social Media Management", price: "20,000+/month", description: "Content planning, publishing, and community management aligned with your positioning.", roi: "Audience building", breakeven: "Measured monthly" },
        { name: "Google Ads & PPC", price: "30,000+/month", description: "Campaign setup, landing-page alignment, testing, optimization, and ad-spend reporting.", roi: "Paid acquisition", breakeven: "Measured monthly" },
        { name: "Content Marketing", price: "15,000+/month", description: "Useful articles, newsletters, and lead magnets built around customer questions and search intent.", roi: "Content system", breakeven: "Measured monthly" },
        { name: "Email Marketing Campaigns", price: "12,000+/month", description: "Consent-based newsletters, lifecycle sequences, segmentation, and performance reporting.", roi: "Lead nurture", breakeven: "Measured monthly" },
        { name: "Full Digital Marketing Suite", price: "75,000+/month", description: "Coordinated SEO, social, paid media, content, and email operations with shared reporting.", roi: "Integrated marketing", breakeven: "Measured monthly" },
      ],
    },
    international: {
      currency: "$",
      webDevelopment: [
        { name: "Business Websites", price: "1,500+", description: "Professional websites with lead capture, search foundations, analytics, and mobile optimization.", roi: "Lead generation", breakeven: "Scope-based" },
        { name: "E-commerce Platforms", price: "3,500+", description: "Online stores with product management, payments, order workflows, and operational integrations.", roi: "Online sales", breakeven: "Scope-based" },
        { name: "Startup Product Sites", price: "2,500+", description: "Flexible marketing websites designed for clear product communication and iterative growth.", roi: "Product launch", breakeven: "Scope-based" },
        { name: "Enterprise Solutions", price: "5,000+", description: "Custom platforms with integrations, permissions, reporting, and scalable architecture.", roi: "Operations", breakeven: "Scope-based" },
      ],
      software: [
        { name: "Business Automation Systems", price: "5,000+", description: "Custom tools for repetitive workflows, approvals, notifications, and data movement.", roi: "Process automation", breakeven: "Scope-based" },
        { name: "Scalable SaaS Platforms", price: "10,000+", description: "Subscription products with authentication, billing, administration, and maintainable architecture.", roi: "SaaS delivery", breakeven: "Scope-based" },
        { name: "Custom CRM & Tools", price: "3,500+", description: "Tailored systems for customer records, pipeline stages, tasks, reporting, and team access.", roi: "Sales operations", breakeven: "Scope-based" },
        { name: "API & Integrations", price: "2,000+", description: "Connect systems and automate reliable data flow between the tools your business already uses.", roi: "Connected systems", breakeven: "Scope-based" },
      ],
      other: [
        { name: "Conversion Optimization", price: "1,500+", description: "Research and improve important landing, enquiry, and checkout journeys using measured user behaviour.", roi: "Experimentation" },
        { name: "Performance & Speed", price: "2,000+", description: "Audit and improve Core Web Vitals, asset delivery, rendering, and runtime bottlenecks.", roi: "Performance" },
        { name: "Growth Partnership", price: "500+/month", description: "Ongoing measurement, maintenance, experimentation, and strategic technical guidance.", roi: "Ongoing support" },
      ],
      digitalMarketing: [
        { name: "SEO Strategy & Implementation", price: "800+/month", description: "Technical SEO, search research, content planning, on-page improvements, and reporting.", roi: "Organic discovery", breakeven: "Measured monthly" },
        { name: "Social Media Management", price: "600+/month", description: "Content planning, publishing, and community management aligned with your positioning.", roi: "Audience building", breakeven: "Measured monthly" },
        { name: "Google Ads & PPC", price: "1,000+/month", description: "Campaign setup, landing-page alignment, testing, optimization, and ad-spend reporting.", roi: "Paid acquisition", breakeven: "Measured monthly" },
        { name: "Content Marketing", price: "500+/month", description: "Useful articles, newsletters, and lead magnets built around customer questions and search intent.", roi: "Content system", breakeven: "Measured monthly" },
        { name: "Email Marketing Campaigns", price: "400+/month", description: "Consent-based newsletters, lifecycle sequences, segmentation, and performance reporting.", roi: "Lead nurture", breakeven: "Measured monthly" },
        { name: "Full Digital Marketing Suite", price: "2,500+/month", description: "Coordinated SEO, social, paid media, content, and email operations with shared reporting.", roi: "Integrated marketing", breakeven: "Measured monthly" },
      ],
    },
  };

  const current = services[region];

  return (
    <>
      <SEO
        title="Services & Pricing | Deven Digital Labs"
        description="Web development and automation services with transparent starting prices. Explore custom software, n8n workflows, CRM systems, and lead-generation websites."
        keywords="web development services, automation services, n8n workflows, custom software development, lead generation systems, business automation, conversion optimization"
        canonical="https://devendigitallabs.com/services"
        schema={schema}
      />
      <Layout>
        {/* Hero */}
        <section className="relative py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A]">
                Investment That Pays for Itself
              </h1>
              <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
                Transparent starting prices, clear scopes, and measurement plans tailored to each engagement.
              </p>
            </div>

            {/* Primary CTA */}
            <div className="pt-4 cta-spacing">
              <Link to="/contact" className="inline-block">
                <Button
                  size="cta"
                  className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-bold px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-all group"
                >
                  Get Your Free Growth + Automation Audit
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#64748B] justify-center">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Performance analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#64748B] justify-center">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Automation opportunities</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#64748B] justify-center">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Custom action plan</span>
                </div>
              </div>
            </div>

            {/* Region Toggle */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setRegion("india")}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 border ${region === "india"
                    ? "bg-[#2563EB] text-white border-[#2563EB]"
                    : "bg-white text-[#64748B] border-[#E2E8F0] hover:bg-[#F8FAFC]"
                  }`}
              >
                India (INR)
              </button>
              <button
                onClick={() => setRegion("international")}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 border ${region === "international"
                    ? "bg-[#2563EB] text-white border-[#2563EB]"
                    : "bg-white text-[#64748B] border-[#E2E8F0] hover:bg-[#F8FAFC]"
                  }`}
              >
                <Globe size={18} />
                International (USD)
              </button>
            </div>
          </div>
        </section>

        {/* Niche Industry Solutions */}
        <section className="py-12 bg-[#F8FAFC] border-y border-[#E2E8F0] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-md">
                <span className="text-[#2563EB] font-bold uppercase tracking-widest text-xs mb-2 block">Industry Specialists</span>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Tailored Niche Solutions</h2>
                <p className="text-[#64748B] text-sm italic underline decoration-[#2563EB]/30 underline-offset-4">We've built specialized systems for your industry's unique pain points.</p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                {[
                  { name: "Real Estate", path: "/services/real-estate-web-development", icon: "🏠" },
                  { name: "Dental Clinics", path: "/services/dental-clinic-web-development", icon: "🦷" },
                  { name: "Interior Design", path: "/services/interior-design-web-development", icon: "✨" }
                ].map((niche, idx) => (
                  <Link
                    key={idx}
                    to={niche.path}
                    className="px-6 py-4 bg-white border border-[#E2E8F0] shadow-sm rounded-2xl hover:border-[#2563EB]/50 hover:shadow-md transition-all group flex flex-col items-center gap-2"
                  >
                    <span className="text-2xl">{niche.icon}</span>
                    <span className="text-sm font-bold text-[#64748B] group-hover:text-[#2563EB]">{niche.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Web Development Services */}
        <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">Revenue-Generating Websites</h2>
            <p className="text-[#64748B]">Websites engineered to convert visitors into customers and drive measurable business growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {current.webDevelopment.map((service, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] shadow-sm rounded-xl p-6 hover:shadow-md hover:border-[#2563EB]/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                    {service.name}
                  </h3>
                </div>
                <p className="text-[#64748B] mb-4">{service.description}</p>
                <div className="space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-[#64748B]">Investment:</span>
                    <span className="text-2xl font-bold text-[#2563EB]">
                      {current.currency}{service.price}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block px-3 py-1 bg-green-50 border border-green-200 rounded-full text-green-700 text-xs font-semibold">
                      Focus: {service.roi}
                    </span>
                    <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-semibold">
                      Planning: {service.breakeven}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Software Development Services */}
        <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">Business Automation & Software</h2>
            <p className="text-[#64748B]">Custom solutions that save time, eliminate errors, and scale your operations profitably.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {current.software.map((service, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] shadow-sm rounded-xl p-6 hover:shadow-md hover:border-[#2563EB]/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                    {service.name}
                  </h3>
                </div>
                <p className="text-[#64748B] mb-4">{service.description}</p>
                <div className="space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-[#64748B]">Investment:</span>
                    <span className="text-2xl font-bold text-[#2563EB]">
                      {current.currency}{service.price}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block px-3 py-1 bg-green-50 border border-green-200 rounded-full text-green-700 text-xs font-semibold">
                      Focus: {service.roi}
                    </span>
                    <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-semibold">
                      Planning: {service.breakeven}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Digital Marketing Services */}
        <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">Digital Marketing Solutions</h2>
            <p className="text-[#64748B]">Strategic marketing campaigns that drive traffic, generate leads, and boost revenue consistently.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {current.digitalMarketing.map((service, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] shadow-sm rounded-xl p-6 hover:shadow-md hover:border-[#2563EB]/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                    {service.name}
                  </h3>
                </div>
                <p className="text-[#64748B] mb-4">{service.description}</p>
                <div className="space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-[#64748B]">Investment:</span>
                    <span className="text-2xl font-bold text-[#2563EB]">
                      {current.currency}{service.price}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block px-3 py-1 bg-green-50 border border-green-200 rounded-full text-green-700 text-xs font-semibold">
                      Focus: {service.roi}
                    </span>
                    {service.breakeven && (
                      <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-semibold">
                        Review: {service.breakeven}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Packages Comparison */}
        <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Choose Your Package</h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Flexible packages designed to meet your needs at every stage of growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="bg-white border border-[#E2E8F0] shadow-sm rounded-2xl p-8 hover:shadow-md transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Starter Growth</h3>
                <p className="text-[#64748B] mb-4">Perfect for new businesses ready to scale</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-[#0F172A]">{current.currency}{region === "india" ? "50,000" : "1,500"}</span>
                  <span className="text-[#64748B]">starting</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="inline-block px-3 py-1 bg-green-50 border border-green-200 rounded-full text-green-700 text-xs font-semibold">
                    Website foundation
                  </span>
                  <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-semibold">
                    Scope-based timeline
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Conversion-optimized design",
                  "Lead capture system",
                  "Mobile-responsive implementation",
                  "SEO foundation (get found on Google)",
                  "Fast loading (reduce bounce rate)",
                  "1 month support & optimization",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[#64748B]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <Button className="w-full border border-[#2563EB]/50 text-[#2563EB] bg-white hover:bg-[#F8FAFC]">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Professional Package - Most Popular */}
            <div className="bg-[#F8FAFC] border-2 border-[#2563EB] rounded-2xl p-8 relative shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#2563EB] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-300" />
                Most Popular
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Professional Revenue</h3>
                <p className="text-[#64748B] mb-4">For businesses serious about growth</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-[#0F172A]">{current.currency}{region === "india" ? "1,50,000" : "5,000"}</span>
                  <span className="text-[#64748B]">starting</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="inline-block px-3 py-1 bg-green-50 border border-green-200 rounded-full text-green-700 text-xs font-semibold">
                    Website + automation
                  </span>
                  <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-semibold">
                    Scope-based timeline
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Starter Growth",
                  "Advanced conversion optimization",
                  "Marketing automation integration",
                  "Analytics & tracking setup",
                  "A/B testing capabilities",
                  "CMS for easy updates",
                  "Performance optimization",
                  "3 months support & optimization",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[#0F172A]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <Button className="w-full bg-[#2563EB] hover:bg-[#2563EB]/90 text-white shadow-md">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Enterprise Package */}
            <div className="bg-white border border-[#E2E8F0] shadow-sm rounded-2xl p-8 hover:shadow-md transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-[#0F172A]">Enterprise Scale</h3>
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                </div>
                <p className="text-[#64748B] mb-4">Maximum revenue & automation</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-[#0F172A]">{current.currency}{region === "india" ? "2,50,000" : "10,000"}</span>
                  <span className="text-[#64748B]">starting</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="inline-block px-3 py-1 bg-green-50 border border-green-200 rounded-full text-green-700 text-xs font-semibold">
                    Custom platform
                  </span>
                  <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-semibold">
                    Scope-based timeline
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Professional Revenue",
                  "Full business automation",
                  "Advanced analytics & insights",
                  "Custom API integrations",
                  "Dedicated account manager",
                  "Priority 24/7 support",
                  "Quarterly strategy sessions",
                  "6 months optimization included",
                  "Scalability consulting",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[#64748B]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <Button className="w-full border border-[#2563EB]/50 text-[#2563EB] bg-white hover:bg-[#F8FAFC]">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12 p-6 bg-[#2563EB]/5 border border-[#2563EB]/20 rounded-xl">
            <p className="text-[#0F172A]">
              Need a custom solution? <Link to="/contact" className="text-[#2563EB] hover:text-[#2563EB]/80 font-semibold">Contact us</Link> for a tailored proposal.
            </p>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">Additional Services</h2>
            <p className="text-[#64748B]">Specialized services to enhance and optimize your digital products.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {current.other.map((service, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] shadow-sm rounded-xl p-6 hover:shadow-md hover:border-[#2563EB]/30 transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-4">
                  {service.name}
                </h3>
                <p className="text-[#64748B] mb-4">{service.description}</p>
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-[#64748B]">Starting from</span>
                    <span className="text-xl font-bold text-[#2563EB]">
                      {current.currency}{service.price}
                    </span>
                  </div>
                  {!service.price.includes("month") && (
                    <p className="text-xs text-[#64748B] italic">Pricing based on scope</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Philosophy Section */}
        <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Our Measurement Approach</h2>
              <p className="text-[#64748B] text-lg leading-relaxed">
                We define measurable goals before development and report what the available data shows after launch.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <div className="space-y-2">
                  <div className="text-[#2563EB] text-4xl font-bold">✓</div>
                  <h3 className="font-semibold text-[#0F172A]">Performance Tracking</h3>
                  <p className="text-sm text-[#64748B]">We configure analytics around agreed business events</p>
                </div>
                <div className="space-y-2">
                  <div className="text-[#2563EB] text-4xl font-bold">✓</div>
                  <h3 className="font-semibold text-[#0F172A]">Post-Launch Reviews</h3>
                  <p className="text-sm text-[#64748B]">Review timing and support are defined in the proposal</p>
                </div>
                <div className="space-y-2">
                  <div className="text-[#2563EB] text-4xl font-bold">✓</div>
                  <h3 className="font-semibold text-[#0F172A]">Growth Partnership</h3>
                  <p className="text-sm text-[#64748B]">Ongoing optimization is available as a separate engagement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="bg-[#2563EB]/5 border border-[#2563EB]/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Why Invest With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Every feature designed to increase your revenue and conversions",
                "We track business metrics, not just website traffic",
                "Business goals and measurement events are agreed before launch",
                "Performance is reviewed against your actual analytics and sales data",
                "Free quarterly performance reviews and optimization",
                "You get a growth partner invested in your long-term success",
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <Check className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-1" />
                  <p className="text-[#0F172A] font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* CTA */}
        <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto text-center">
          <div className="bg-white border border-[#E2E8F0] shadow-xl rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/5 to-cyan-500/5 z-0 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-6">Ready to Automate Growth & Capture More Leads?</h2>
              <p className="text-lg sm:text-xl text-[#64748B] mb-8">
                Get a website and automation review with practical recommendations based on your current setup.
              </p>
              <Link to="/contact" className="inline-block">
                <Button
                  size="cta"
                  className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-bold px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-all group"
                >
                  Get My Free Audit + Action Plan
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <div className="mt-6 space-y-2">
                <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
                  <div className="flex items-center gap-2 text-sm text-[#64748B]">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Performance analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#64748B]">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Automation opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
