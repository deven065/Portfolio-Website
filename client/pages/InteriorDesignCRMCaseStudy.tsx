import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  BriefcaseBusiness,
  Check,
  CircleDollarSign,
  Clock3,
  LayoutDashboard,
  MessageSquareText,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Users,
    title: "Lead and client profiles",
    description: "Keep contact details, requirements, preferences, notes, and communication context together.",
  },
  {
    icon: LayoutDashboard,
    title: "Visual sales pipeline",
    description: "Move opportunities from inquiry and consultation through proposal, approval, and project onboarding.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Project context",
    description: "Connect every customer to their design brief, site details, budget range, and current project stage.",
  },
  {
    icon: Bell,
    title: "Tasks and reminders",
    description: "Schedule calls, site visits, proposal follow-ups, and next actions so opportunities do not go cold.",
  },
  {
    icon: MessageSquareText,
    title: "Centralized notes",
    description: "Give the team one reliable history of decisions and customer conversations.",
  },
  {
    icon: ShieldCheck,
    title: "Controlled access",
    description: "Support secure sign-in and role-aware visibility for owners, managers, and team members.",
  },
];

export default function InteriorDesignCRMCaseStudy() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Interior Design CRM for iOS",
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS",
    description: "A purpose-built iOS CRM for interior design companies, available for acquisition, licensing, or customization.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      description: "Pricing available on request.",
    },
    creator: {
      "@type": "Organization",
      name: "Deven Digital Labs",
    },
  };

  return (
    <>
      <SEO
        title="Interior Design CRM for iOS - For Sale | Case Study"
        description="Explore a purpose-built iOS CRM for interior design companies. Manage leads, clients, projects, tasks, and follow-ups in one mobile workspace. Available for acquisition or customization."
        keywords="interior design CRM, iOS CRM app, CRM for interior designers, interior design software for sale, client management app, mobile CRM"
        canonical="https://devendigitallabs.com/projects/interior-design-crm-ios"
        schema={schema}
      />
      <Layout>
        <section className="relative overflow-hidden px-6 py-16 sm:py-24 lg:px-12">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-50 via-white to-blue-50" />
          <div className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-violet-300/20 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Link to="/projects" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#64748B] hover:text-[#2563EB]">
                <ArrowLeft className="h-4 w-4" />
                Back to all projects
              </Link>
              <div className="mb-5 flex flex-wrap gap-3">
                <span className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                  Available for sale
                </span>
                <span className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-violet-700">
                  iOS application
                </span>
              </div>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
                A CRM built around how interior design firms actually work.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#64748B]">
                This iOS product brings leads, client requirements, design projects, follow-ups, and team activity into one focused mobile workspace. It is available for acquisition, licensing, or customization.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact">
                  <Button size="lg" className="rounded-xl bg-[#2563EB] px-7 py-6 font-bold text-white hover:bg-[#1D4ED8]">
                    Request Demo & Pricing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="#case-study">
                  <Button size="lg" variant="outline" className="rounded-xl border-[#CBD5E1] bg-white px-7 py-6 font-bold text-[#0F172A]">
                    Read the Case Study
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[440px]">
              <div className="absolute inset-8 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="relative mx-auto w-[280px] rounded-[3rem] border-[10px] border-slate-950 bg-slate-950 p-2 shadow-2xl sm:w-[320px]">
                <div className="overflow-hidden rounded-[2.3rem] bg-[#F8FAFC]">
                  <div className="flex items-center justify-between bg-gradient-to-r from-violet-700 to-purple-500 px-5 pb-7 pt-5 text-white">
                    <div>
                      <p className="text-xs text-violet-100">Good morning</p>
                      <p className="mt-1 text-lg font-bold">Design CRM</p>
                    </div>
                    <div className="rounded-full bg-white/15 p-2"><Bell className="h-4 w-4" /></div>
                  </div>
                  <div className="-mt-3 space-y-4 rounded-t-3xl bg-[#F8FAFC] px-4 pb-7 pt-5">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-white p-4 shadow-sm">
                        <Users className="mb-3 h-5 w-5 text-violet-600" />
                        <p className="text-2xl font-black text-[#0F172A]">24</p>
                        <p className="text-xs text-[#64748B]">Active leads</p>
                      </div>
                      <div className="rounded-2xl bg-white p-4 shadow-sm">
                        <BriefcaseBusiness className="mb-3 h-5 w-5 text-blue-600" />
                        <p className="text-2xl font-black text-[#0F172A]">8</p>
                        <p className="text-xs text-[#64748B]">Live projects</p>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="mb-4 flex items-center justify-between">
                        <p className="text-sm font-bold text-[#0F172A]">Pipeline</p>
                        <span className="text-xs font-semibold text-violet-600">View all</span>
                      </div>
                      <div className="space-y-3">
                        {[
                          ["New inquiry", "6", "bg-violet-500"],
                          ["Consultation", "4", "bg-blue-500"],
                          ["Proposal sent", "3", "bg-amber-500"],
                        ].map(([label, value, color]) => (
                          <div key={label} className="flex items-center gap-3">
                            <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
                            <span className="flex-1 text-xs font-medium text-[#475569]">{label}</span>
                            <span className="text-xs font-bold text-[#0F172A]">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-2xl bg-slate-900 p-4 text-white">
                      <div className="flex items-center gap-3">
                        <Clock3 className="h-5 w-5 text-violet-300" />
                        <div>
                          <p className="text-xs text-slate-300">Next follow-up</p>
                          <p className="text-sm font-bold">Villa consultation, 3:30 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="case-study" className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <div className="mb-12 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-widest text-[#2563EB]">The case study</span>
            <h2 className="mt-3 text-3xl font-black text-[#0F172A] sm:text-5xl">From scattered conversations to a structured client journey.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                label: "The challenge",
                text: "Interior design sales are highly consultative. A single opportunity can involve room requirements, style preferences, budgets, site visits, quotations, and several follow-ups. Generic contact tools do not preserve that context.",
              },
              {
                label: "The product strategy",
                text: "The CRM was shaped around a simple mobile journey: capture the inquiry, understand the brief, schedule the next action, advance the opportunity, and retain the full client and project history.",
              },
              {
                label: "The outcome",
                text: "The product creates one operational view for customer acquisition and project handoff. Teams can see what needs attention, who owns the next action, and the context behind every relationship.",
              },
            ].map((item) => (
              <Card key={item.label} className="border-[#E2E8F0] p-7 shadow-sm">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-violet-700">{item.label}</h3>
                <p className="leading-relaxed text-[#64748B]">{item.text}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-[#F8FAFC] px-6 py-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-[#2563EB]">Core capabilities</span>
              <h2 className="mt-3 text-3xl font-black text-[#0F172A] sm:text-5xl">Built for the full client lifecycle.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, description }) => (
                <Card key={title} className="border-[#E2E8F0] bg-white p-6 shadow-sm">
                  <div className="mb-5 inline-flex rounded-xl bg-violet-50 p-3 text-violet-700"><Icon className="h-6 w-6" /></div>
                  <h3 className="text-lg font-bold text-[#0F172A]">{title}</h3>
                  <p className="mt-2 leading-relaxed text-[#64748B]">{description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-12">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#2563EB]">Product value</span>
            <h2 className="mt-3 text-3xl font-black text-[#0F172A] sm:text-4xl">A focused foundation that can become your product.</h2>
            <p className="mt-5 leading-relaxed text-[#64748B]">
              The application is suitable for an interior design firm, software operator, or industry platform that wants to launch with a specialized mobile CRM instead of starting from a blank specification.
            </p>
            <div className="mt-7 space-y-4">
              {[
                "White-label branding and workflow customization",
                "Acquisition or licensing structures available",
                "Feature expansion and integration support",
                "Technical walkthrough available for qualified buyers",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-[#334155]">
                  <span className="mt-0.5 rounded-full bg-green-100 p-1 text-green-700"><Check className="h-4 w-4" /></span>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <Card className="border-violet-200 bg-gradient-to-br from-violet-700 to-indigo-700 p-8 text-white shadow-xl">
            <div className="flex items-center gap-3">
              <Smartphone className="h-7 w-7 text-violet-200" />
              <span className="font-bold uppercase tracking-wider text-violet-100">For sale</span>
            </div>
            <h2 className="mt-6 text-3xl font-black">Interested in owning or licensing this CRM?</h2>
            <p className="mt-4 leading-relaxed text-violet-100">
              Request a private product demo, discuss the available commercial structure, and explore customization for your brand and workflow.
            </p>
            <div className="mt-7 flex items-center gap-3 text-sm text-violet-100">
              <CircleDollarSign className="h-5 w-5" />
              Pricing and scope are shared on request.
            </div>
            <Link to="/contact" className="mt-8 block">
              <Button size="lg" className="w-full rounded-xl bg-white py-6 font-bold text-violet-700 hover:bg-violet-50">
                Enquire About the CRM
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Card>
        </section>
      </Layout>
    </>
  );
}
