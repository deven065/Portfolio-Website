import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Check,
    LayoutDashboard,
    Image as ImageIcon,
    PenTool,
    Sparkles,
    Camera
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function NicheInteriorDesign() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Interior Design Portfolio & Lead Automation",
        "provider": {
            "@type": "Organization",
            "name": "Deven Digital Labs"
        },
        "description": "Premium web design and marketing automation for interior designers. High-end portfolios, automated client inquiries, and project management integrations.",
        "areaServed": "Global"
    };

    const features = [
        {
            title: "Luxury Visual Portfolios",
            description: "High-performance galleries that load 4K project photos instantly without slowing down your site.",
            icon: <ImageIcon className="w-6 h-6" />
        },
        {
            title: "Automated Inquiry Filters",
            description: "Stop wasting time on low-budget leads. Our system qualifies clients based on project scope and budget automatically.",
            icon: <Sparkles className="w-6 h-6" />
        },
        {
            title: "Instagram-to-Site Sync",
            description: "Automatically update your website's portfolio whenever you post a new project on Instagram.",
            icon: <Camera className="w-6 h-6" />
        },
        {
            title: "Project Management Sync",
            description: "Connect your website directly to Ivy, CoConstruct, or Houzz Pro for seamless client onboarding.",
            icon: <LayoutDashboard className="w-6 h-6" />
        }
    ];

    return (
        <>
            <SEO
                title="Web Design for Interior Designers | Portfolio & Lead Gen"
                description="We build high-end, luxury websites for interior designers and decor firms. Stunning portfolios, automated client onboarding, and Instagram integration."
                keywords="interior design web design, luxury interior design agency, portfolio builder for designers, interior design marketing, lead generation for decorators"
                canonical="https://devendigitallabs.com/services/interior-design-web-development"
                schema={schema}
            />
            <Layout>
                <Breadcrumbs />

                {/* Hero */}
                <section className="relative pt-12 pb-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
                    <div className="absolute inset-0 -z-10">
                        <img
                            src="/interior-design.png"
                            alt="Luxury Interior Design Portfolio"
                            className="w-full h-full object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
                    </div>

                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-bold">
                            Premium Web Design for Creative Firms ✨
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                            A Website as Stunning as Your <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">Design Projects</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Generic templates don't sell luxury. We build **bespoke digital experiences** that attract high-ticket clients and automate your inquiry-to-onboarding process.
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/contact">
                                <Button size="cta" className="cta-primary bg-amber-500 hover:bg-amber-600 border-none text-white font-black group shadow-xl shadow-amber-500/10">
                                    Request My Design Portfolio Audit
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Industry Specific Features */}
                <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* The ROI of a Better Portfolio */}
                <section className="py-20 px-6 sm:px-8 lg:px-12 bg-slate-900/40 border-y border-slate-800/50">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12">Built for Conversion</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            <div className="space-y-2">
                                <div className="text-4xl font-black text-amber-500">2.4s</div>
                                <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Image Load Speed</p>
                            </div>
                            <div className="space-y-2">
                                <div className="text-4xl font-black text-amber-500">+45%</div>
                                <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Inquiry Quality</p>
                            </div>
                            <div className="space-y-2">
                                <div className="text-4xl font-black text-amber-500">100%</div>
                                <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Mobile Responsive</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 px-6 sm:px-8 lg:px-12 text-center max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-950 rounded-3xl p-10 sm:p-16 border border-slate-700/50 relative overflow-hidden group">
                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">Let's build your dream portfolio.</h2>
                            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
                                Showcase your work to the right people. We combine aesthetic excellence with technical performance to help you land bigger projects.
                            </p>
                            <Link to="/contact">
                                <Button size="cta" className="bg-amber-500 hover:bg-amber-600 text-white font-black px-10 rounded-xl transition-all hover:px-12">
                                    Start Your Project
                                </Button>
                            </Link>
                        </div>
                        {/* Decorative icon */}
                        <div className="absolute -top-10 -right-10 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform duration-1000">
                            <PenTool className="w-64 h-64 text-white" />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
