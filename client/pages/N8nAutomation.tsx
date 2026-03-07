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
        "description": "Professional n8n automation services. We build custom AI-powered workflows, connect 400+ apps, and automate your lead generation, CRM, and internal operations.",
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
                description="Professional n8n automation services. We build custom AI workflows, CRM integrations, and lead gen systems that save 20+ hours/week. Free automation audit."
                keywords="n8n expert, n8n agency, n8n freelancer, hire n8n developer, automation agency, business automation workflows, custom n8n nodes, AI automation services"
                canonical="https://devendigitallabs.com/services/n8n-automation"
                schema={schema}
            />
            <Layout>
                <Breadcrumbs />

                {/* Hero */}
                <section className="relative pt-12 pb-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 right-0 w-full h-full bg-slate-950">
                            <img
                                src="/n8n-hero.png"
                                alt="n8n Automation Hero"
                                className="w-full h-full object-cover opacity-20"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                    </div>

                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-bold animate-fade-in">
                            Official Lead Generation & Automation Partner ⚡
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                            Automate Your Business with <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">n8n Power</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            We build complex AI-powered workflows that save your team 20+ hours every single week. From lead capture to custom internal tools—we automate it all.
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/contact">
                                <Button size="cta" className="cta-primary cta-contrast group shadow-xl">
                                    Get My Free Automation Audit
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <div className="flex items-center gap-6 text-sm text-slate-400">
                                <div className="flex items-center gap-1.5">
                                    <Check className="w-4 h-4 text-green-400" />
                                    No Code Logic
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Check className="w-4 h-4 text-green-400" />
                                    API-First
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Cases Grid */}
                <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">What We Build with n8n</h2>
                        <p className="text-slate-400 max-w-xl mx-auto italic">If it has an API, we can automate it.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {useCases.map((useCase, idx) => (
                            <div key={idx} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/60 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                                    {useCase.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{useCase.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 px-6 sm:px-8 lg:px-12 border-y border-slate-800/50 bg-slate-900/20">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How We Ship Your Automations</h2>
                            <p className="text-slate-400">From manual pain to automated profit in 14 days.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {steps.map((step, idx) => (
                                <div key={idx} className="relative">
                                    <div className="text-5xl font-black text-slate-800 absolute -top-4 -left-2 z-0 opacity-50">{idx + 1}</div>
                                    <div className="relative z-10 pt-4">
                                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                        <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
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
                            <h2 className="text-3xl sm:text-5xl font-black">
                                Automation isn't just "cool"—<br />
                                <span className="text-blue-400">It's Profitable.</span>
                            </h2>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Most businesses waste <span className="text-white font-bold">20-40% of their team's time</span> on repetitive data entry, copy-pasting, and checking for emails. By automating these with n8n, you:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Cut operational costs by up to 30%",
                                    "Respond to leads in seconds, not hours",
                                    "Eliminate 100% of manual data entry errors",
                                    "Scale your business without hiring more staff"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-green-400" />
                                        </div>
                                        <span className="text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
                            <div className="relative z-10 space-y-6">
                                <div className="text-4xl font-black text-white">15+ hours/week</div>
                                <p className="text-slate-400 uppercase tracking-widest text-sm font-bold">Average time saved per automation</p>
                                <div className="h-px bg-slate-700/50"></div>
                                <div className="text-4xl font-black text-blue-400">90 Day Break-Even</div>
                                <p className="text-slate-400 uppercase tracking-widest text-sm font-bold">Typical ROI timeline for custom flows</p>
                            </div>
                            <div className="absolute top-0 right-0 p-4">
                                <Zap className="w-12 h-12 text-blue-500/20" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* n8n vs Zapier */}
                <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
                    <div className="bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8 sm:p-12">
                        <h2 className="text-3xl font-bold mb-8 text-center">Why n8n Over Zapier?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-blue-400">Zapier / Make</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-slate-400">
                                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                                        High monthly costs that scale with volume
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-400">
                                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                                        Limited branching and complex logic
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-400">
                                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                                        Data lives on their servers (security risk)
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-green-400 underline underline-offset-4 decoration-2">n8n Power</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-slate-200">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                                        10x cheaper at high volumes
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-200">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                                        Infinite logic, loops, and custom JS nodes
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-200">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                                        Self-hostable for 100% data privacy
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto text-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl sm:text-5xl font-black">Ready to reclaim your time?</h2>
                        <p className="text-lg text-slate-300">
                            We'll audit your current manual tasks and show you exactly what can be automated—and how much it will save you.
                        </p>
                        <Link to="/contact">
                            <Button size="cta" className="cta-primary cta-contrast group shadow-2xl scale-110">
                                Book My Free Automation Audit
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <p className="text-sm text-slate-500">Only 2 audit slots remaining for this month.</p>
                    </div>
                </section>
            </Layout>
        </>
    );
}
