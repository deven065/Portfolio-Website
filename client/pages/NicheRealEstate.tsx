import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    MapPin,
    Check,
    Home,
    Users,
    Calendar,
    Zap,
    Building
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function NicheRealEstate() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Real Estate Web Development & Lead Automation",
        "provider": {
            "@type": "Organization",
            "name": "Deven Digital Labs"
        },
        "description": "Custom web development and marketing automation for real estate agencies. High-converting IDX websites, automated property alerts, and lead nurturing systems.",
        "areaServed": "Global"
    };

    const benefits = [
        {
            title: "IDX/MLS Integration",
            description: "Direct sync with regional property databases. Show the latest listings automatically without lifting a finger.",
            icon: <Home className="w-6 h-6" />
        },
        {
            title: "Automated Lead Nurturing",
            description: "When a lead views a 3-bedroom house, our system automatically sends them similar listings via email and WhatsApp.",
            icon: <Zap className="w-6 h-6" />
        },
        {
            title: "Agent Performance Dashboards",
            description: "Track which agents are closing leads and which ones are letting them go cold with custom internal CRMs.",
            icon: <Building className="w-6 h-6" />
        },
        {
            title: "Virtual Tour Integration",
            description: "Seamless Matterport and video walkthrough embeds that decrease site bounce rates by 40%.",
            icon: <MapPin className="w-6 h-6" />
        }
    ];

    return (
        <>
            <SEO
                title="Real Estate Web Development & Lead Gen Automation"
                description="We build high-converting websites for real estate agencies and independent brokers. Integrated property search, automated lead nurturing, and CRM sync."
                keywords="real estate web development, IDX website builder, real estate lead generation, property portal development, real estate CRM automation, realtor website agency"
                canonical="https://devendigitallabs.com/services/real-estate-web-development"
                schema={schema}
            />
            <Layout>
                <Breadcrumbs />

                {/* Hero */}
                <section className="relative pt-12 pb-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
                    <div className="absolute inset-0 -z-10">
                        <img
                            src="/real-estate.png"
                            alt="Luxury Real Estate Web Development"
                            className="w-full h-full object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
                    </div>

                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-bold">
                            Specialized Solutions for Real Estate Agencies 🏠
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                            Capture More Leads for Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Real Estate Business</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Most real estate websites are just digital brochures. We build **Revenue Machines** that capture leads, automate property alerts, and help you close deals faster.
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/contact">
                                <Button size="cta" className="cta-primary cta-contrast group shadow-xl">
                                    Get My Free Real Estate Site Audit
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Industry Specific Benefits */}
                <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="py-20 px-6 sm:px-8 lg:px-12 bg-slate-900/40 border-y border-slate-800/50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center">Standard Site vs. Deven Digital Solution</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-700/50 rounded-2xl overflow-hidden border border-slate-700/50">
                            <div className="bg-slate-900 p-8 space-y-6">
                                <h3 className="text-xl font-bold text-red-400">Standard Real Estate Site</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-slate-500 line-through">Property alerts</li>
                                    <li className="flex items-center gap-3 text-slate-500 line-through">Automated SMS nurture</li>
                                    <li className="flex items-center gap-3 text-slate-500 line-through">CRM Integration</li>
                                    <li className="flex items-center gap-3 text-slate-500 line-through">SEO-ranked listings</li>
                                </ul>
                            </div>
                            <div className="bg-slate-800 p-8 space-y-6">
                                <h3 className="text-xl font-bold text-green-400">Our Growth-Focused Solution</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-slate-300"><Check className="text-green-500 w-5 h-5" /> Instant Property Alerts</li>
                                    <li className="flex items-center gap-3 text-slate-300"><Check className="text-green-500 w-5 h-5" /> WhatsApp Lead Nurture</li>
                                    <li className="flex items-center gap-3 text-slate-300"><Check className="text-green-500 w-5 h-5" /> 2-Way CRM Sync</li>
                                    <li className="flex items-center gap-3 text-slate-300"><Check className="text-green-500 w-5 h-5" /> Google-First Indexing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 px-6 sm:px-8 lg:px-12 text-center max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-10 sm:p-16 shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">Stop losing property leads to generic portals.</h2>
                            <p className="text-white/90 text-lg mb-10">
                                We'll help you build an owned asset that generates your own leads without relying on Zillow or Rightmove.
                            </p>
                            <Link to="/contact">
                                <Button size="cta" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-100 font-black px-10">
                                    Claim Your Real Estate Audit
                                </Button>
                            </Link>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-10 -right-10 opacity-20 transform rotate-12">
                            <Home className="w-64 h-64 text-white" />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
