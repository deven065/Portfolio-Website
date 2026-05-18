import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Check,
    Calendar,
    ShieldCheck,
    Stethoscope,
    Users,
    Smartphone,
    Sparkles
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function NicheDentalClinic() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Dental Practice Web Development & SEO",
        "provider": {
            "@type": "Organization",
            "name": "Deven Digital Labs"
        },
        "description": "HIPAA-compliant, high-converting websites for dental clinics and orthodontists. Online booking, patient portal development, and local SEO for dentists.",
        "areaServed": "Global"
    };

    const benefits = [
        {
            title: "Self-Service Booking",
            description: "Reduce front-desk workload with a custom patient booking system that syncs directly with your practice software.",
            icon: <Calendar className="w-6 h-6" />
        },
        {
            title: "Patient Management Hub",
            description: "Secure, GDPR/HIPAA compliant portals for patients to access forms, prescriptions, and follow-up care instructions.",
            icon: <ShieldCheck className="w-6 h-6" />
        },
        {
            title: "Local Search Domination",
            description: "We optimize your clinic for 'Dentist near me' searches to ensure a steady stream of local patients.",
            icon: <Users className="w-6 h-6" />
        },
        {
            title: "Virtual Consultation Engine",
            description: "Let patients upload photos for a preliminary smile assessment—increasing high-ticket orthodontic leads.",
            icon: <Sparkles className="w-6 h-6" />
        }
    ];

    return (
        <>
            <SEO
                title="Dental Practice Web Design & Patient Lead Gen"
                description="We build high-converting, professional websites for dental clinics and medical practices. Integrated booking, HIPAA compliance, and local SEO."
                keywords="dental web development, dentist SEO agency, medical practice website builder, dental lead generation, orthodontic marketing, patient portal development"
                canonical="https://devendigitallabs.com/services/dental-clinic-web-development"
                schema={schema}
            />
            <Layout>
                <Breadcrumbs />

                {/* Hero */}
                <section className="relative pt-12 pb-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
                    <div className="absolute inset-0 -z-10 bg-[#F8FAFC] bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-all duration-1000 opacity-[0.03]"></div>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F8FAFC]/90 via-[#F8FAFC]/80 to-[#F8FAFC]"></div>

                    <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
                        <div className="inline-block px-4 py-1.5 bg-[#2563EB]/10 border border-[#2563EB]/30 rounded-full text-[#2563EB] text-sm font-bold shadow-sm">
                            Digital Excellence for Modern Practices 🦷
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] text-[#0F172A]">
                            Attract & Retain More Patients for <span className="text-[#2563EB]">Your Dental Clinic</span>
                        </h1>
                        <p className="text-xl text-[#64748B] max-w-2xl mx-auto leading-relaxed">
                            We don't just build websites; we build **automated patient acquisition machines**. From local SEO to seamless online booking, we help your clinic grow on autopilot.
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/contact">
                                <Button size="cta" className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-bold px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-all group">
                                    Request a Free Audit for My Clinic
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
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#2563EB]">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#0F172A] mb-2">{benefit.title}</h3>
                                    <p className="text-[#64748B] leading-relaxed">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="py-20 px-6 sm:px-8 lg:px-12 bg-[#F8FAFC] border-y border-[#E2E8F0]">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center text-[#0F172A]">Standard Site vs. Deven Digital Medical Solution</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E2E8F0] rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm">
                            <div className="bg-white p-8 space-y-6">
                                <h3 className="text-xl font-bold text-red-600">Basic Clinic Site</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-[#64748B] line-through">Online appointment request</li>
                                    <li className="flex items-center gap-3 text-[#64748B] line-through">Mobile app sync</li>
                                    <li className="flex items-center gap-3 text-[#64748B] line-through">Local SEO setup</li>
                                    <li className="flex items-center gap-3 text-[#64748B] line-through">Automated SMS reminders</li>
                                </ul>
                            </div>
                            <div className="bg-[#F8FAFC] p-8 space-y-6">
                                <h3 className="text-xl font-bold text-green-700">Growth-Focused Clinic Site</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-[#0F172A]"><Check className="text-green-600 w-5 h-5" /> Instant Direct Booking</li>
                                    <li className="flex items-center gap-3 text-[#0F172A]"><Check className="text-green-600 w-5 h-5" /> PWA Support (Save to Home)</li>
                                    <li className="flex items-center gap-3 text-[#0F172A]"><Check className="text-green-600 w-5 h-5" /> GMB & Local SEO Domination</li>
                                    <li className="flex items-center gap-3 text-[#0F172A]"><Check className="text-green-600 w-5 h-5" /> Automated Reminder Engine</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 px-6 sm:px-8 lg:px-12 text-center max-w-4xl mx-auto">
                    <div className="bg-[#2563EB] rounded-3xl p-10 sm:p-16 shadow-lg relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">Let's grow your patient list.</h2>
                            <p className="text-white/90 text-lg mb-10">
                                We'll build a professional presence that builds trust and makes booking an appointment easier than ever.
                            </p>
                            <Link to="/contact">
                                <Button size="cta" variant="secondary" className="bg-white text-[#2563EB] hover:bg-gray-100 font-black px-10 py-6 rounded-xl shadow-md">
                                    Get My Clinical Audit
                                </Button>
                            </Link>
                        </div>
                        {/* Decorative icon */}
                        <div className="absolute -bottom-10 -right-10 opacity-20 transform rotate-12">
                            <Stethoscope className="w-64 h-64 text-white" />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
