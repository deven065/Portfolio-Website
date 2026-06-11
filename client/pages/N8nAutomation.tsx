import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Zap,
    Check,
    X,
    Settings,
    Database,
    Mail,
    MessageCircle,
    BarChart,
    Globe,
    Plus
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function N8nAutomation() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "n8n Automation & AI Workflows",
        "provider": {
            "@type": "Organization",
            "name": "Deven Digital Labs"
        },
        "description": "Professional n8n automation services for AI-powered workflows, application integrations, lead generation, CRM, and internal operations.",
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "price": "1500.00",
            "priceCurrency": "USD"
        }
    };

    const useCases = [
        {
            title: "Automated Lead Generation",
            description: "Trigger workflows from LinkedIn, forms, or ads. Automatically enrich data, score leads, and push them directly to your CRM.",
            icon: <Zap className="w-6 h-6" />
        },
        {
            title: "CRM & Database Sync",
            description: "Keep HubSpot, Salesforce, and Airtable in perfect sync. No more manual data entry or duplicate customer records.",
            icon: <Database className="w-6 h-6" />
        },
        {
            title: "AI-Powered Outreach",
            description: "Use ChatGPT + n8n to generate personalized outbound emails based on a prospect's website and LinkedIn profile.",
            icon: <Mail className="w-6 h-6" />
        },
        {
            title: "Workflow Notifications",
            description: "Get real-time Slack or Discord alerts for big wins, new leads, or system errors that need your attention.",
            icon: <MessageCircle className="w-6 h-6" />
        }
    ];

    const steps = [
        {
            title: "Workflow Audit",
            description: "We map out your manual processes and identify the biggest time-wasters in your business."
        },
        {
            title: "Workflow Design",
            description: "We build custom n8n nodes and logic to handle your specific business rules and edge cases."
        },
        {
            title: "Integration & Testing",
            description: "We connect your API keys, test for reliability, and ensure data flows perfectly between apps."
        },
        {
            title: "Handoff & Support",
            description: "We host it for you or deploy to your server. 30 days of free support included to ensure smooth operation."
        }
    ];

    return (
        <>
            <SEO
                title="Hire n8n Expert & Automation Agency | n8n Workflows"
                description="Professional n8n automation services for custom AI workflows, CRM integrations, lead handling, notifications, and internal operations."
                keywords="n8n expert, n8n agency, n8n freelancer, hire n8n developer, automation agency, business automation workflows, custom n8n nodes, AI automation services"
                canonical="https://devendigitallabs.com/services/n8n-automation"
                schema={schema}
            />
            <Layout>
                <Breadcrumbs />

                {/* Hero */}
                <section className="relative pt-12 pb-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 right-0 w-full h-full bg-[#F8FAFC]">
                            <img
                                src="/n8n-hero.png"
                                alt="n8n Automation Hero"
                                className="w-full h-full object-cover opacity-[0.03]"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/90 via-[#F8FAFC]/80 to-[#F8FAFC]"></div>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                    </div>

                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-block px-4 py-1.5 bg-[#2563EB]/10 border border-[#2563EB]/30 rounded-full text-[#2563EB] text-sm font-bold animate-fade-in shadow-sm">
                            Lead Generation & Automation Services
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] text-[#0F172A]">
                            Automate Your Business with <span className="text-[#2563EB]">n8n Power</span>
                        </h1>
                        <p className="text-xl text-[#64748B] max-w-2xl mx-auto leading-relaxed">
                            We build AI-powered workflows for lead capture, CRM updates, notifications, data processing, and custom internal tools.
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/contact">
                                <Button size="cta" className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-bold px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-all group">
                                    Get My Free Automation Audit
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <div className="flex items-center gap-6 text-sm text-[#64748B]">
                                <div className="flex items-center gap-1.5">
                                    <Check className="w-4 h-4 text-green-600" />
                                    No Code Logic
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Check className="w-4 h-4 text-green-600" />
                                    API-First
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Cases Grid */}
                <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#0F172A]">What We Build with n8n</h2>
                        <p className="text-[#64748B] max-w-xl mx-auto italic">If it has an API, we can automate it.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {useCases.map((useCase, idx) => (
                            <div key={idx} className="bg-white border border-[#E2E8F0] shadow-sm rounded-2xl p-8 hover:shadow-md transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#2563EB] mb-6 group-hover:scale-110 transition-transform">
                                    {useCase.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">{useCase.title}</h3>
                                <p className="text-[#64748B] leading-relaxed">{useCase.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 px-6 sm:px-8 lg:px-12 border-y border-[#E2E8F0] bg-[#F8FAFC]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#0F172A]">How We Ship Your Automations</h2>
                            <p className="text-[#64748B]">From workflow discovery to a tested, documented automation.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {steps.map((step, idx) => (
                                <div key={idx} className="relative bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
                                    <div className="text-5xl font-black text-[#E2E8F0] absolute -top-4 -left-2 z-0">{idx + 1}</div>
                                    <div className="relative z-10 pt-4">
                                        <h3 className="text-xl font-bold text-[#0F172A] mb-3">{step.title}</h3>
                                        <p className="text-sm text-[#64748B] leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ROI Focus */}
                <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A]">
                                Automation should solve<br />
                                <span className="text-[#2563EB]">a measurable workflow problem.</span>
                            </h2>
                            <p className="text-lg text-[#64748B] leading-relaxed">
                                Repetitive data entry, copy-pasting, and inbox checks can create delays and avoidable errors. With n8n, we can:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Reduce repetitive operational work",
                                    "Respond to leads in seconds, not hours",
                                    "Add validation and error handling to data flows",
                                    "Make workflows easier to monitor and maintain"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-green-600" />
                                        </div>
                                        <span className="text-[#0F172A]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm rounded-3xl p-8 sm:p-12 relative overflow-hidden">
                            <div className="relative z-10 space-y-6">
                                <div className="text-4xl font-black text-[#0F172A]">Workflow baseline</div>
                                <p className="text-[#64748B] uppercase tracking-widest text-sm font-bold">Current process documented</p>
                                <div className="h-px bg-[#E2E8F0]"></div>
                                <div className="text-4xl font-black text-[#2563EB]">Measured impact</div>
                                <p className="text-[#64748B] uppercase tracking-widest text-sm font-bold">Compared with your baseline</p>
                            </div>
                            <div className="absolute top-0 right-0 p-4">
                                <Zap className="w-12 h-12 text-[#2563EB]/10" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* n8n vs Zapier */}
                <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
                    <div className="bg-white border border-[#E2E8F0] shadow-sm rounded-3xl p-8 sm:p-12">
                        <h2 className="text-3xl font-bold mb-8 text-center text-[#0F172A]">Why n8n Over Zapier?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-red-600">Zapier / Make</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-[#64748B]">
                                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                                        High monthly costs that scale with volume
                                    </li>
                                    <li className="flex items-start gap-3 text-[#64748B]">
                                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                                        Limited branching and complex logic
                                    </li>
                                    <li className="flex items-start gap-3 text-[#64748B]">
                                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                                        Data lives on their servers (security risk)
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-green-700 underline underline-offset-4 decoration-2">n8n Power</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-[#0F172A]">
                                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                        Cost structure you can inspect and control
                                    </li>
                                    <li className="flex items-start gap-3 text-[#0F172A]">
                                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                        Infinite logic, loops, and custom JS nodes
                                    </li>
                                    <li className="flex items-start gap-3 text-[#0F172A]">
                                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                        Self-hostable for greater data control
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto text-center">
                    <div className="space-y-8 bg-[#2563EB] rounded-3xl p-10 sm:p-16 shadow-lg">
                        <h2 className="text-3xl sm:text-5xl font-black text-white">Ready to reclaim your time?</h2>
                        <p className="text-lg text-white/90">
                            We'll review your current manual tasks, identify automation candidates, and explain how impact could be measured.
                        </p>
                        <Link to="/contact">
                            <Button size="cta" className="bg-white text-[#2563EB] hover:bg-gray-100 font-black px-10 py-6 rounded-xl transition-all shadow-md mt-6">
                                Book My Free Automation Audit
                                <ArrowRight className="ml-2 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </section>
            </Layout>
        </>
    );
}
