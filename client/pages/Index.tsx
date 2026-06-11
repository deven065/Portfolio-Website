import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Braces,
  Check,
  Code2,
  Database,
  Gauge,
  Layers3,
  MonitorSmartphone,
  PanelsTopLeft,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { trackButtonClick, trackEvent } from "@/lib/analytics";

const Testimonials = lazy(() => import("@/components/Testimonials"));

const servicePillars = [
  {
    number: "01",
    icon: PanelsTopLeft,
    title: "Website Development",
    description:
      "Fast, accessible websites for companies that need a sharper brand presence and a clear path from first visit to enquiry.",
    deliverables: ["Marketing websites", "E-commerce", "Portfolio websites", "Landing systems"],
    href: "/services",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Application Development",
    description:
      "Purpose-built web and mobile applications designed around your users, workflows, permissions, and business data.",
    deliverables: ["SaaS products", "iOS applications", "Customer portals", "Internal tools"],
    href: "/services",
  },
];

const capabilities = [
  { icon: Layers3, title: "Product design", detail: "User flows, wireframes, prototypes, and scalable interface systems." },
  { icon: Code2, title: "Full-stack engineering", detail: "Maintainable frontend, backend, API, and integration architecture." },
  { icon: Gauge, title: "Performance", detail: "Responsive interfaces built around speed, accessibility, and Core Web Vitals." },
  { icon: Database, title: "Data and integrations", detail: "Secure data models and reliable connections to the tools you already use." },
  { icon: ShieldCheck, title: "Quality and security", detail: "Testing, permissions, validation, monitoring, and dependable deployment." },
  { icon: Braces, title: "Technical ownership", detail: "Clear scope, source-code ownership, documentation, and handover." },
];

const featuredProjects = [
  {
    name: "Interior Design CRM for iOS",
    type: "iOS application",
    description: "A focused CRM product for interior design teams, available for acquisition and customization.",
    image: "/interior-crm-ios.svg",
    href: "/projects/interior-design-crm-ios",
    accent: "from-violet-500/20 to-fuchsia-500/5",
  },
  {
    name: "Al.Sana Interiors",
    type: "Portfolio website",
    description: "A visual project portfolio with optimized media and a structured enquiry experience.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
    href: "/projects",
    accent: "from-blue-500/20 to-cyan-500/5",
  },
  {
    name: "Space Age Interiors",
    type: "Interactive website",
    description: "A polished digital presence designed to showcase work and guide prospective clients.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200",
    href: "/projects",
    accent: "from-cyan-500/20 to-emerald-500/5",
  },
];

const LazyLoadFallback = () => (
  <div className="mx-auto max-w-7xl px-6 py-20">
    <div className="h-44 animate-pulse rounded-3xl bg-[#F8FAFC]" />
  </div>
);

export default function Index() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Deven Digital Labs",
    url: "https://devendigitallabs.com",
    description:
      "Website and application development studio building custom websites, web applications, SaaS products, and iOS applications.",
    founder: { "@type": "Person", name: "Deven Rikame" },
    areaServed: "Worldwide",
    knowsAbout: [
      "Website Development",
      "Web Application Development",
      "Mobile Application Development",
      "SaaS Development",
      "UI/UX Design",
    ],
  };

  return (
    <>
      <SEO
        title="Website & Application Development Studio"
        description="Deven Digital Labs designs and develops professional websites, web applications, SaaS products, customer portals, and iOS applications."
        keywords="website development company, web application development, custom software development, iOS app development, SaaS development, UI UX design"
        canonical="https://devendigitallabs.com/"
        schema={schema}
      />
      <Layout>
        <section className="studio-grid relative overflow-hidden px-6 pb-24 pt-16 sm:px-8 sm:pt-24 lg:px-12 lg:pb-32">
          <div className="studio-orb studio-orb-blue" />
          <div className="studio-orb studio-orb-cyan" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="reveal-up">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#2563EB]/20 bg-[#2563EB]/10 px-4 py-2 text-sm font-semibold text-[#2563EB]">
                <span className="h-2 w-2 rounded-full bg-[#2563EB] shadow-[0_0_0_5px_rgba(37,99,235,0.12)]" />
                Website and application development studio
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-[#0F172A] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                Digital products built with
                <span className="studio-gradient block">clarity and craft.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#64748B] sm:text-xl">
                We design and engineer high-quality websites and custom applications for businesses that need more than an off-the-shelf template.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact">
                  <Button
                    size="cta"
                    className="group w-full rounded-xl bg-[#2563EB] px-7 font-semibold text-white shadow-lg shadow-blue-500/15 hover:bg-[#2563EB]/90 sm:w-auto"
                    onClick={() => {
                      trackButtonClick("Discuss a project", "hero_primary_cta");
                      trackEvent("cta_click", "homepage", "hero_project");
                    }}
                  >
                    Discuss your project
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button
                    size="cta"
                    variant="outline"
                    className="w-full rounded-xl border-[#E2E8F0] bg-white px-7 font-semibold text-[#0F172A] hover:bg-[#F8FAFC] sm:w-auto"
                  >
                    View selected work
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {["Custom design", "Responsive development", "Source-code ownership"].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-sm font-medium text-[#64748B]">
                    <Check className="h-4 w-4 text-emerald-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="reveal-up relative mx-auto w-full max-w-[620px] lg:mx-0" style={{ animationDelay: "140ms" }}>
              <div className="product-window product-float">
                <div className="flex items-center justify-between border-b border-[#E2E8F0] px-5 py-4">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="rounded-md bg-[#F8FAFC] px-4 py-1.5 font-mono text-[10px] text-[#64748B]">
                    devendigitallabs.com/product
                  </div>
                  <div className="h-6 w-6 rounded-md border border-[#E2E8F0]" />
                </div>
                <div className="grid min-h-[390px] grid-cols-[76px_1fr]">
                  <div className="border-r border-[#E2E8F0] bg-[#F8FAFC] p-4">
                    <div className="mb-8 flex h-9 w-9 items-center justify-center rounded-xl bg-[#2563EB] text-white">
                      <MonitorSmartphone className="h-5 w-5" />
                    </div>
                    <div className="space-y-4">
                      {[0, 1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className={`mx-auto h-8 w-8 rounded-lg ${item === 0 ? "bg-[#2563EB]/15" : "border border-[#E2E8F0] bg-white"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="p-5 sm:p-7">
                    <div className="mb-7 flex items-start justify-between">
                      <div>
                        <div className="mb-2 h-3 w-20 rounded-full bg-[#2563EB]/20" />
                        <div className="h-7 w-44 rounded-lg bg-[#0F172A]" />
                      </div>
                      <div className="h-10 w-28 rounded-xl bg-[#2563EB]" />
                    </div>
                    <div className="mb-5 grid grid-cols-3 gap-3">
                      {[
                        ["Interface", "Designed"],
                        ["API", "Connected"],
                        ["Release", "Ready"],
                      ].map(([label, value], index) => (
                        <div key={label} className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 sm:p-4">
                          <p className="text-[9px] font-bold uppercase tracking-wider text-[#64748B]">{label}</p>
                          <p className={`mt-2 text-xs font-bold sm:text-sm ${index === 2 ? "text-emerald-600" : "text-[#0F172A]"}`}>{value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-2xl border border-[#E2E8F0] p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="h-4 w-28 rounded bg-[#0F172A]" />
                        <div className="h-6 w-16 rounded-full bg-emerald-500/15" />
                      </div>
                      <div className="flex h-32 items-end gap-2 rounded-xl bg-gradient-to-b from-[#2563EB]/5 to-transparent px-3 pb-3">
                        {[36, 58, 44, 76, 62, 91, 72, 100].map((height, index) => (
                          <div
                            key={index}
                            className="chart-bar flex-1 rounded-t bg-gradient-to-t from-[#2563EB] to-cyan-400"
                            style={{ height: `${height}%`, animationDelay: `${300 + index * 70}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-4 rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-xl sm:-left-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#64748B]">Delivery standard</p>
                    <p className="text-sm font-bold text-[#0F172A]">Tested and documented</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#E2E8F0] bg-[#F8FAFC] px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="section-kicker">Focused expertise</p>
                <h2 className="section-title">Two services. One accountable product team.</h2>
              </div>
              <p className="max-w-xl text-lg leading-relaxed text-[#64748B] lg:justify-self-end">
                A tighter offer makes the work better. Every engagement is centred on designing, building, and launching a website or application.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {servicePillars.map((service, index) => (
                <Link
                  key={service.title}
                  to={service.href}
                  className="studio-card group relative overflow-hidden p-8 sm:p-10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute right-6 top-4 font-mono text-6xl font-black text-[#2563EB]/5 transition-colors group-hover:text-[#2563EB]/10">
                    {service.number}
                  </div>
                  <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB] text-white shadow-lg shadow-blue-500/15 transition-transform duration-300 group-hover:-translate-y-1">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-3xl font-black tracking-tight text-[#0F172A]">{service.title}</h3>
                  <p className="mt-4 max-w-xl leading-relaxed text-[#64748B]">{service.description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.deliverables.map((item) => (
                      <span key={item} className="rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1.5 text-xs font-semibold text-[#64748B]">
                        {item}
                      </span>
                    ))}
                  </div>
                  <span className="mt-9 inline-flex items-center gap-2 font-semibold text-[#2563EB]">
                    Explore services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="section-kicker">Engineering capabilities</p>
              <h2 className="section-title">Professional from the interface to the infrastructure.</h2>
              <p className="mt-5 text-lg leading-relaxed text-[#64748B]">
                Design quality matters. So do maintainability, performance, security, and a handover your team can actually use.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-[#E2E8F0] bg-[#E2E8F0] md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => (
                <div key={capability.title} className="group bg-white p-8 transition-colors hover:bg-[#F8FAFC]">
                  <capability.icon className="mb-8 h-7 w-7 text-[#2563EB] transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-xl font-bold text-[#0F172A]">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#64748B]">{capability.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#E2E8F0] bg-[#F8FAFC] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="section-kicker">Selected work</p>
                <h2 className="section-title">Built for real businesses and real users.</h2>
              </div>
              <Link to="/projects" className="group inline-flex items-center gap-2 font-semibold text-[#2563EB]">
                View all projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <Link key={project.name} to={project.href} className="studio-card group overflow-hidden">
                  <div className={`relative h-60 overflow-hidden bg-gradient-to-br ${project.accent}`}>
                    <img
                      src={project.image}
                      alt={`${project.name} ${project.type}`}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      {project.type}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0F172A]">{project.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#64748B]">{project.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB]">
                      View project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="section-kicker">A clear delivery process</p>
              <h2 className="section-title">Less theatre. More working software.</h2>
              <p className="mt-5 leading-relaxed text-[#64748B]">
                You see the work as it develops, understand the decisions being made, and receive a product your team can own.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["01", "Discover", "Define users, requirements, constraints, and the outcome the product must support."],
                ["02", "Design", "Turn the scope into user flows, interface direction, and a build-ready system."],
                ["03", "Develop", "Build in reviewable stages with regular demonstrations and technical checks."],
                ["04", "Launch", "Test, deploy, document, and establish the next practical iteration."],
              ].map(([number, title, description]) => (
                <div key={number} className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
                  <span className="font-mono text-xs font-bold text-[#2563EB]">{number}</span>
                  <h3 className="mt-5 text-xl font-bold text-[#0F172A]">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#64748B]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Suspense fallback={<LazyLoadFallback />}>
          <Testimonials />
        </Suspense>

        <section className="px-6 py-24 sm:px-8 lg:px-12">
          <div className="studio-cta relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-7 py-14 text-center text-white sm:px-12 sm:py-20">
            <div className="absolute inset-0 studio-grid opacity-20" />
            <div className="relative">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-blue-200">Start a project</p>
              <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
                Have a website or application in mind?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
                Tell us what you are building, who it is for, and where the current challenge sits. We will respond with practical next steps.
              </p>
              <Link to="/contact" className="mt-9 inline-block">
                <Button size="cta" className="group rounded-xl bg-white px-8 font-bold text-slate-950 hover:bg-blue-50">
                  Discuss your project
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
