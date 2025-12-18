import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Check } from "lucide-react";
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
  const [region, setRegion] = useState<"india" | "international">("india");

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
        { name: "Business Websites", price: "50,000+", description: "Professional corporate and business websites" },
        { name: "Startup Websites", price: "80,000+", description: "High-impact landing pages and portals for startups" },
        { name: "Enterprise Websites", price: "1,50,000+", description: "Large-scale corporate websites with complex requirements" },
        { name: "E-commerce Platforms", price: "1,20,000+", description: "Complete e-commerce solutions with payment integration" },
      ],
      software: [
        { name: "Custom Web Applications", price: "1,50,000+", description: "Tailored web apps for business workflows and automation" },
        { name: "SaaS Platforms", price: "2,50,000+", description: "Scalable software-as-a-service solutions with multi-tenancy" },
        { name: "CRM & Internal Tools", price: "1,20,000+", description: "Custom internal tools, dashboards, and CRM systems" },
        { name: "API Development & Integrations", price: "60,000+", description: "REST APIs, webhooks, and third-party integrations" },
      ],
      other: [
        { name: "UI/UX Engineering", price: "40,000+", description: "Design systems, user experience optimization, and accessibility" },
        { name: "Performance Optimization", price: "50,000+", description: "Speed, scalability, and efficiency improvements" },
        { name: "Maintenance & Support", price: "15,000+/month", description: "Ongoing support, updates, and feature enhancements" },
      ],
    },
    international: {
      currency: "$",
      webDevelopment: [
        { name: "Business Websites", price: "1,500+", description: "Professional corporate and business websites" },
        { name: "Startup Websites", price: "2,500+", description: "High-impact landing pages and portals for startups" },
        { name: "Enterprise Websites", price: "5,000+", description: "Large-scale corporate websites with complex requirements" },
        { name: "E-commerce Platforms", price: "3,500+", description: "Complete e-commerce solutions with payment integration" },
      ],
      software: [
        { name: "Custom Web Applications", price: "5,000+", description: "Tailored web apps for business workflows and automation" },
        { name: "SaaS Platforms", price: "10,000+", description: "Scalable software-as-a-service solutions with multi-tenancy" },
        { name: "CRM & Internal Tools", price: "3,500+", description: "Custom internal tools, dashboards, and CRM systems" },
        { name: "API Development & Integrations", price: "2,000+", description: "REST APIs, webhooks, and third-party integrations" },
      ],
      other: [
        { name: "UI/UX Engineering", price: "1,500+", description: "Design systems, user experience optimization, and accessibility" },
        { name: "Performance Optimization", price: "2,000+", description: "Speed, scalability, and efficiency improvements" },
        { name: "Maintenance & Support", price: "500+/month", description: "Ongoing support, updates, and feature enhancements" },
      ],
    },
  };

  const current = services[region];

  return (
    <>
      <SEO 
        title="Web Development Services & Pricing"
        description="Professional web development, custom software, and technology consulting services. Transparent pricing for businesses and startups. Starting from ₹50,000. Get a free quote today."
        keywords="web development services, custom software development, software development pricing, web design services, full-stack development, React development services, Node.js development, API development, mobile app development, e-commerce development, startup web development, enterprise software solutions"
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
            Services Built for Growth
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive technology services tailored to help your business scale.
          </p>

          {/* Region Toggle */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setRegion("india")}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                region === "india"
                  ? "bg-blue-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:text-white"
              }`}
            >
              India (INR)
            </button>
            <button
              onClick={() => setRegion("international")}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                region === "international"
                  ? "bg-blue-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:text-white"
              }`}
            >
              <Globe size={18} />
              International (USD)
            </button>
          </div>
        </div>
      </section>

      {/* Web Development Services */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Web Development Services</h2>
          <p className="text-slate-300">Professional websites that drive business growth and user engagement.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {current.webDevelopment.map((service, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/80 hover:border-slate-600/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
              </div>
              <p className="text-slate-400 mb-4">{service.description}</p>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-slate-400">Starting from</span>
                  <span className="text-2xl font-bold text-blue-400">
                    {current.currency}{service.price}
                  </span>
                </div>
                <p className="text-sm text-slate-500 italic">Final pricing depends on features & scale</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Software Development Services */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Software Development Services</h2>
          <p className="text-slate-300">Custom applications and platforms engineered for scalability and performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {current.software.map((service, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/80 hover:border-slate-600/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
              </div>
              <p className="text-slate-400 mb-4">{service.description}</p>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-slate-400">Starting from</span>
                  <span className="text-2xl font-bold text-blue-400">
                    {current.currency}{service.price}
                  </span>
                </div>
                <p className="text-sm text-slate-500 italic">Final pricing depends on features & scale</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Additional Services</h2>
          <p className="text-slate-300">Specialized services to enhance and optimize your digital products.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {current.other.map((service, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/80 hover:border-slate-600/50 transition-all duration-300 group"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-4">
                {service.name}
              </h3>
              <p className="text-slate-400 mb-4">{service.description}</p>
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-slate-400">Starting from</span>
                  <span className="text-xl font-bold text-blue-400">
                    {current.currency}{service.price}
                  </span>
                </div>
                {!service.price.includes("month") && (
                  <p className="text-xs text-slate-500 italic">Pricing based on scope</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Philosophy Section */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold mb-4">Our Pricing Philosophy</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Every project is unique. The prices shown are starting points — we provide custom quotes based on your specific requirements, features, and timeline.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="space-y-2">
                <div className="text-blue-400 text-4xl font-bold">✓</div>
                <h3 className="font-semibold text-white">No Hidden Costs</h3>
                <p className="text-sm text-slate-400">Transparent pricing with detailed breakdowns</p>
              </div>
              <div className="space-y-2">
                <div className="text-blue-400 text-4xl font-bold">✓</div>
                <h3 className="font-semibold text-white">Flexible Packages</h3>
                <p className="text-sm text-slate-400">Tailored solutions that fit your budget</p>
              </div>
              <div className="space-y-2">
                <div className="text-blue-400 text-4xl font-bold">✓</div>
                <h3 className="font-semibold text-white">Long-term Value</h3>
                <p className="text-sm text-slate-400">Built for growth, not just launch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-8">Why Clients Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Business-first approach focused on your ROI",
              "Scalable architecture built for long-term growth",
              "Clean, maintainable code following best practices",
              "Reliable delivery with transparent communication",
              "Partnership mentality, not just vendor relationship",
              "Performance, security, and reliability at the core",
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-slate-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Build Something Great?</h2>
        <p className="text-xl text-slate-300 mb-8">
          Let's discuss your project requirements and create a custom solution that drives real results.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg">
            Get a Custom Quote
            <ArrowRight size={18} />
          </Button>
        </Link>
      </section>
    </Layout>
    </>
  );
}
