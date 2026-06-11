import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Code2,
  Globe,
  Layers3,
  MonitorSmartphone,
  PanelsTopLeft,
  Smartphone,
} from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";

type Region = "india" | "international";

const catalog = {
  india: {
    currency: "₹",
    websites: [
      { name: "Business Website", price: "50,000+", detail: "A custom company website with responsive development, content management, enquiry paths, analytics, and technical SEO foundations." },
      { name: "E-commerce Website", price: "1,20,000+", detail: "A tailored storefront with product management, payments, customer journeys, order workflows, and operational integrations." },
      { name: "Portfolio Website", price: "80,000+", detail: "A visually-led portfolio for architecture, interiors, creative studios, and professional service firms." },
      { name: "Web Platform", price: "1,50,000+", detail: "A content-rich or transactional platform with custom features, integrations, permissions, and scalable architecture." },
    ],
    applications: [
      { name: "Web Application", price: "1,50,000+", detail: "A secure browser-based product built around your workflows, data, user roles, and reporting requirements." },
      { name: "SaaS Product", price: "2,50,000+", detail: "A subscription-ready application with authentication, billing, administration, and maintainable product architecture." },
      { name: "Mobile / iOS Application", price: "2,50,000+", detail: "A focused mobile product designed for the device, with backend services and App Store release support." },
      { name: "CRM or Internal Tool", price: "1,20,000+", detail: "A custom operational application for customer records, tasks, pipeline stages, dashboards, and team access." },
    ],
  },
  international: {
    currency: "$",
    websites: [
      { name: "Business Website", price: "1,500+", detail: "A custom company website with responsive development, content management, enquiry paths, analytics, and technical SEO foundations." },
      { name: "E-commerce Website", price: "3,500+", detail: "A tailored storefront with product management, payments, customer journeys, order workflows, and operational integrations." },
      { name: "Portfolio Website", price: "2,500+", detail: "A visually-led portfolio for architecture, interiors, creative studios, and professional service firms." },
      { name: "Web Platform", price: "5,000+", detail: "A content-rich or transactional platform with custom features, integrations, permissions, and scalable architecture." },
    ],
    applications: [
      { name: "Web Application", price: "5,000+", detail: "A secure browser-based product built around your workflows, data, user roles, and reporting requirements." },
      { name: "SaaS Product", price: "10,000+", detail: "A subscription-ready application with authentication, billing, administration, and maintainable product architecture." },
      { name: "Mobile / iOS Application", price: "10,000+", detail: "A focused mobile product designed for the device, with backend services and App Store release support." },
      { name: "CRM or Internal Tool", price: "3,500+", detail: "A custom operational application for customer records, tasks, pipeline stages, dashboards, and team access." },
    ],
  },
};

const included = [
  { icon: Layers3, title: "Product and UX design", detail: "Flows, wireframes, visual direction, interface states, and responsive behaviour." },
  { icon: Code2, title: "Full-stack development", detail: "Frontend, backend, APIs, database design, integrations, and deployment." },
  { icon: MonitorSmartphone, title: "Responsive quality", detail: "Careful implementation across mobile, tablet, desktop, and supported browsers." },
  { icon: Check, title: "Launch and handover", detail: "Testing, production deployment, documentation, and source-code ownership." },
];

export default function Services() {
  const [region, setRegion] = useState<Region>("international");

  useEffect(() => {
    const locale = navigator.language;
    if (locale.includes("en-IN") || locale.includes("hi")) setRegion("india");
  }, []);

  const current = catalog[region];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Website and Application Development",
    provider: { "@type": "Organization", name: "Deven Digital Labs" },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Development Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Application Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile Application Development" } },
      ],
    },
  };

  const ServiceGrid = ({
    title,
    description,
    icon: Icon,
    services,
  }: {
    title: string;
    description: string;
    icon: typeof PanelsTopLeft;
    services: { name: string; price: string; detail: string }[];
  }) => (
    <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563EB] text-white shadow-lg shadow-blue-500/15">
              <Icon className="h-6 w-6" />
            </div>
            <h2 className="section-title">{title}</h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-[#64748B] lg:justify-self-end">{description}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.name} className="studio-card group p-7 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <span className="font-mono text-xs font-bold text-[#2563EB]">0{index + 1}</span>
                  <h3 className="mt-4 text-2xl font-bold text-[#0F172A] transition-colors group-hover:text-[#2563EB]">
                    {service.name}
                  </h3>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">From</p>
                  <p className="mt-1 text-xl font-black text-[#0F172A]">{current.currency}{service.price}</p>
                </div>
              </div>
              <p className="mt-5 leading-relaxed text-[#64748B]">{service.detail}</p>
              <Link to="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB]">
                Request a scope <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <>
      <SEO
        title="Website & Application Development Services"
        description="Explore custom website, e-commerce, web application, SaaS, CRM, internal tool, and iOS application development services."
        keywords="website development services, web application development, SaaS development, iOS app development, ecommerce development, custom CRM development"
        canonical="https://devendigitallabs.com/services"
        schema={schema}
      />
      <Layout>
        <section className="studio-grid relative overflow-hidden px-6 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="studio-orb studio-orb-blue" />
          <div className="relative mx-auto max-w-5xl text-center reveal-up">
            <p className="section-kicker">Development services</p>
            <h1 className="text-5xl font-black tracking-[-0.045em] text-[#0F172A] sm:text-6xl lg:text-7xl">
              Websites and applications,
              <span className="studio-gradient block">designed to do their job well.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-[#64748B] sm:text-xl">
              From a focused company website to a custom SaaS product, we handle product design, engineering, testing, and launch as one connected engagement.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact">
                <Button size="cta" className="group w-full rounded-xl bg-[#2563EB] px-8 font-bold text-white hover:bg-[#2563EB]/90 sm:w-auto">
                  Request a project scope
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="cta" variant="outline" className="w-full rounded-xl border-[#E2E8F0] bg-white px-8 font-bold text-[#0F172A] hover:bg-[#F8FAFC] sm:w-auto">
                  Review our work
                </Button>
              </Link>
            </div>
            <div className="mt-10 inline-flex rounded-xl border border-[#E2E8F0] bg-white p-1.5 shadow-sm">
              <button
                onClick={() => setRegion("india")}
                className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${region === "india" ? "bg-[#2563EB] text-white" : "text-[#64748B] hover:text-[#0F172A]"}`}
              >
                India (INR)
              </button>
              <button
                onClick={() => setRegion("international")}
                className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${region === "international" ? "bg-[#2563EB] text-white" : "text-[#64748B] hover:text-[#0F172A]"}`}
              >
                <Globe className="h-4 w-4" />
                International (USD)
              </button>
            </div>
            <p className="mt-3 text-xs text-[#64748B]">Starting estimates only. Final pricing is based on confirmed scope and requirements.</p>
          </div>
        </section>

        <div className="border-y border-[#E2E8F0] bg-[#F8FAFC]">
          <ServiceGrid
            title="Website Development"
            description="Professional websites that communicate clearly, load quickly, work across devices, and give your team a maintainable publishing foundation."
            icon={PanelsTopLeft}
            services={current.websites}
          />
        </div>

        <ServiceGrid
          title="Application Development"
          description="Custom web and mobile products for businesses whose requirements go beyond a standard website or packaged tool."
          icon={Smartphone}
          services={current.applications}
        />

        <section className="border-y border-[#E2E8F0] bg-[#F8FAFC] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="section-kicker">Included in the engagement</p>
              <h2 className="section-title">One team from first screen to production.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {included.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
                  <item.icon className="mb-6 h-6 w-6 text-[#2563EB]" />
                  <h3 className="font-bold text-[#0F172A]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#64748B]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div className="lg:sticky lg:top-32">
                <p className="section-kicker">How projects run</p>
                <h2 className="section-title">A transparent path from idea to launch.</h2>
                <p className="mt-5 leading-relaxed text-[#64748B]">
                  Scope and communication are kept explicit, with reviewable progress throughout the build.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  ["01", "Discovery and scope", "We clarify users, business requirements, content, integrations, constraints, and success criteria."],
                  ["02", "UX and interface design", "We establish the product flow and visual system before expensive implementation decisions are locked in."],
                  ["03", "Development in stages", "Features are built in reviewable increments, with demonstrations and feedback at agreed checkpoints."],
                  ["04", "Testing and release", "We test important journeys, resolve release issues, deploy, and provide the agreed documentation."],
                  ["05", "Support and iteration", "Post-launch support and future product iterations can be scoped according to the product's needs."],
                ].map(([number, title, detail]) => (
                  <div key={number} className="grid gap-5 rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:grid-cols-[54px_1fr] sm:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/10 font-mono text-sm font-black text-[#2563EB]">
                      {number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A]">{title}</h3>
                      <p className="mt-2 leading-relaxed text-[#64748B]">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FAQ />

        <section className="px-6 py-20 sm:px-8 lg:px-12">
          <div className="studio-cta relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-7 py-14 text-center text-white sm:px-12 sm:py-20">
            <div className="absolute inset-0 studio-grid opacity-20" />
            <div className="relative">
              <MonitorSmartphone className="mx-auto mb-6 h-10 w-10 text-blue-300" />
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Tell us what you want to build.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
                Share your goals, required features, existing systems, and preferred launch window. We will help turn it into a practical development scope.
              </p>
              <Link to="/contact" className="mt-9 inline-block">
                <Button size="cta" className="group rounded-xl bg-white px-8 font-bold text-slate-950 hover:bg-blue-50">
                  Start a project conversation
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
