import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
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
        { name: "Business Websites That Convert", price: "50,000+", description: "Professional websites with 40% higher conversion rates. Includes lead capture, SEO, and mobile optimization.", roi: "5-7x ROI in first year", breakeven: "2-3 months" },
        { name: "E-commerce That Sells", price: "1,20,000+", description: "Complete online stores with 30-50% higher conversion rates. Automated order processing saves 15 hours/week.", roi: "6-8x ROI in first year", breakeven: "3-4 months" },
        { name: "Revenue-Driving Startups", price: "80,000+", description: "High-impact websites that capture 3x more leads. Built to scale from day one with your business.", roi: "7-10x ROI in first year", breakeven: "2-3 months" },
        { name: "Enterprise Solutions", price: "1,50,000+", description: "Complex platforms handling thousands of daily users. Automation saves 50+ hours monthly.", roi: "8-12x ROI in first year", breakeven: "4-6 months" },
      ],
      software: [
        { name: "Business Automation Systems", price: "1,50,000+", description: "Custom tools that save 20+ hours weekly and eliminate manual errors. Automate your workflows.", roi: "10-15x ROI in first year", breakeven: "3-4 months" },
        { name: "Scalable SaaS Platforms", price: "2,50,000+", description: "Software that serves unlimited customers without hiring. Recurring revenue model potential.", roi: "8-12x ROI in first year", breakeven: "4-6 months" },
        { name: "Custom CRM & Tools", price: "1,20,000+", description: "Tailored systems that improve team efficiency by 40%. Better customer management = more sales.", roi: "6-9x ROI in first year", breakeven: "3-5 months" },
        { name: "API & Integrations", price: "60,000+", description: "Connect your systems and automate data flow. Eliminate duplicate work and human errors.", roi: "5-8x ROI in first year", breakeven: "2-3 months" },
      ],
      other: [
        { name: "Conversion Optimization", price: "40,000+", description: "Increase sales by 30-50% without more traffic. Optimize user experience and checkout flows.", roi: "8-12x ROI" },
        { name: "Performance & Speed", price: "50,000+", description: "1-second delay = 7% less conversions. We make your site blazing fast to increase sales.", roi: "6-10x ROI" },
        { name: "Growth Partnership", price: "15,000+/month", description: "Ongoing optimization, support, and strategic guidance. We track ROI and continuously improve.", roi: "Continuous growth" },
      ],
    },
    international: {
      currency: "$",
      webDevelopment: [
        { name: "Business Websites That Convert", price: "1,500+", description: "Professional websites with 40% higher conversion rates. Includes lead capture, SEO, and mobile optimization.", roi: "5-7x ROI in first year", breakeven: "2-3 months" },
        { name: "E-commerce That Sells", price: "3,500+", description: "Complete online stores with 30-50% higher conversion rates. Automated order processing saves 15 hours/week.", roi: "6-8x ROI in first year", breakeven: "3-4 months" },
        { name: "Revenue-Driving Startups", price: "2,500+", description: "High-impact websites that capture 3x more leads. Built to scale from day one with your business.", roi: "7-10x ROI in first year", breakeven: "2-3 months" },
        { name: "Enterprise Solutions", price: "5,000+", description: "Complex platforms handling thousands of daily users. Automation saves 50+ hours monthly.", roi: "8-12x ROI in first year", breakeven: "4-6 months" },
      ],
      software: [
        { name: "Business Automation Systems", price: "5,000+", description: "Custom tools that save 20+ hours weekly and eliminate manual errors. Automate your workflows.", roi: "10-15x ROI in first year", breakeven: "3-4 months" },
        { name: "Scalable SaaS Platforms", price: "10,000+", description: "Software that serves unlimited customers without hiring. Recurring revenue model potential.", roi: "8-12x ROI in first year", breakeven: "4-6 months" },
        { name: "Custom CRM & Tools", price: "3,500+", description: "Tailored systems that improve team efficiency by 40%. Better customer management = more sales.", roi: "6-9x ROI in first year", breakeven: "3-5 months" },
        { name: "API & Integrations", price: "2,000+", description: "Connect your systems and automate data flow. Eliminate duplicate work and human errors.", roi: "5-8x ROI in first year", breakeven: "2-3 months" },
      ],
      other: [
        { name: "Conversion Optimization", price: "1,500+", description: "Increase sales by 30-50% without more traffic. Optimize user experience and checkout flows.", roi: "8-12x ROI" },
        { name: "Performance & Speed", price: "2,000+", description: "1-second delay = 7% less conversions. We make your site blazing fast to increase sales.", roi: "6-10x ROI" },
        { name: "Growth Partnership", price: "500+/month", description: "Ongoing optimization, support, and strategic guidance. We track ROI and continuously improve.", roi: "Continuous growth" },
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
            Investment That Pays for Itself
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Transparent pricing with clear ROI. Most clients see 5x return and break even within 3-4 months.
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Revenue-Generating Websites</h2>
          <p className="text-slate-300">Websites engineered to convert visitors into customers and drive measurable business growth.</p>
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
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-slate-400">Investment:</span>
                  <span className="text-2xl font-bold text-blue-400">
                    {current.currency}{service.price}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-xs font-semibold">
                    {service.roi}
                  </span>
                  <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-semibold">
                    Break-even: {service.breakeven}
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Business Automation & Software</h2>
          <p className="text-slate-300">Custom solutions that save time, eliminate errors, and scale your operations profitably.</p>
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
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-slate-400">Investment:</span>
                  <span className="text-2xl font-bold text-blue-400">
                    {current.currency}{service.price}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-xs font-semibold">
                    {service.roi}
                  </span>
                  <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-semibold">
                    Break-even: {service.breakeven}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Packages Comparison */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Choose Your Package</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Flexible packages designed to meet your needs at every stage of growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Package */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Starter Growth</h3>
              <p className="text-slate-400 mb-4">Perfect for new businesses ready to scale</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-white">{current.currency}{region === "india" ? "50,000" : "1,500"}</span>
                <span className="text-slate-400">starting</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-xs font-semibold">
                  5-7x ROI
                </span>
                <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-semibold">
                  2-3 month break-even
                </span>
              </div>
            </div>
            
            <ul className="space-y-3 mb-8">
              {[
                "Conversion-optimized design",
                "Lead capture system",
                "Mobile responsive (65% of buyers)",
                "SEO foundation (get found on Google)",
                "Fast loading (reduce bounce rate)",
                "1 month support & optimization",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact">
              <Button className="w-full border border-blue-500/50 bg-transparent hover:bg-blue-500/10">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Professional Package - Most Popular */}
          <div className="bg-gradient-to-b from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/50 rounded-2xl p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              <Star className="w-4 h-4" />
              Most Popular
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Professional Revenue</h3>
              <p className="text-slate-400 mb-4">For businesses serious about growth</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-white">{current.currency}{region === "india" ? "1,50,000" : "5,000"}</span>
                <span className="text-slate-400">starting</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-xs font-semibold">
                  6-9x ROI
                </span>
                <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-semibold">
                  3-4 month break-even
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
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact">
              <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Enterprise Package */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl font-bold">Enterprise Scale</h3>
                <Sparkles className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="text-slate-400 mb-4">Maximum revenue & automation</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-white">{current.currency}{region === "india" ? "2,50,000" : "10,000"}</span>
                <span className="text-slate-400">starting</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-xs font-semibold">
                  8-15x ROI
                </span>
                <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-semibold">
                  4-6 month break-even
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
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact">
              <Button className="w-full border border-blue-500/50 bg-transparent hover:bg-blue-500/10">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>

        <div className="text-center mt-12 p-6 bg-blue-500/5 border border-blue-500/20 rounded-xl">
          <p className="text-slate-300">
            Need a custom solution? <Link to="/contact" className="text-blue-400 hover:text-blue-300 font-semibold">Contact us</Link> for a tailored proposal.
          </p>
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
            <h2 className="text-3xl font-bold mb-4">Our Success Guarantee</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              We're not just building websites—we're building revenue-generating assets. Your success is our success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="space-y-2">
                <div className="text-blue-400 text-4xl font-bold">✓</div>
                <h3 className="font-semibold text-white">Performance Tracking</h3>
                <p className="text-sm text-slate-400">We monitor your website's business impact and ROI</p>
              </div>
              <div className="space-y-2">
                <div className="text-blue-400 text-4xl font-bold">✓</div>
                <h3 className="font-semibold text-white">90-Day Reviews</h3>
                <p className="text-sm text-slate-400">Free performance optimization sessions included</p>
              </div>
              <div className="space-y-2">
                <div className="text-blue-400 text-4xl font-bold">✓</div>
                <h3 className="font-semibold text-white">Growth Partnership</h3>
                <p className="text-sm text-slate-400">We optimize until you see real results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-8">Why Invest With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Every feature designed to increase your revenue and conversions",
              "We track business metrics, not just website traffic",
              "Average client sees 5x ROI in first year",
              "Most clients break even within 3-4 months",
              "Free quarterly performance reviews and optimization",
              "You get a growth partner invested in your long-term success",
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
        <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Revenue?</h2>
        <p className="text-xl text-slate-300 mb-8">
          Let's discuss your business goals and create a solution that delivers measurable ROI within months.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg">
            Get Your Custom Quote
            <ArrowRight size={18} />
          </Button>
        </Link>
      </section>
    </Layout>
    </>
  );
}
