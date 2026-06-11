import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, ArrowRight, Activity, Users, ShieldCheck, Search } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function DentalClinicLosingPatients() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Why Your Dental Clinic is Losing Patients to Competitors with Better Websites",
        "description": "A practical review of website speed, local search, trust, and online booking issues that can create friction for dental patients.",
        "author": {
            "@type": "Person",
            "name": "Deven Rikame"
        },
        "datePublished": "2026-03-05",
        "dateModified": "2026-03-05",
        "publisher": {
            "@type": "Organization",
            "name": "Deven Digital Labs"
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://devendigitallabs.com/blog/dental-clinic-losing-patients-website-audit"
        }
    };

    return (
        <>
            <SEO
                title="Why Your Dental Clinic is Losing Patients | Website Audit"
                description="Review common dental website issues involving speed, local search, trust, mobile usability, and online booking."
                keywords="dental website design, dentist patient acquisition, medical website seo, dental clinic online booking, grow dental practice"
                canonical="https://devendigitallabs.com/blog/dental-clinic-losing-patients-website-audit"
                schema={schema}
            />
            <Layout>
                <Breadcrumbs />

                <article className="max-w-4xl mx-auto px-6 sm:px-8 py-12">
                    <header className="mb-12">
                        <div className="flex items-center gap-4 text-sm text-slate-400 mb-6 font-medium">
                            <span className="flex items-center gap-2">
                                <User className="w-4 h-4 text-blue-400" />
                                Deven Rikame
                            </span>
                            <span className="text-slate-700">|</span>
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-blue-400" />
                                Mar 05, 2026
                            </span>
                            <span className="text-slate-700">|</span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-blue-400" />
                                7 min read
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight text-white">
                            Why Your Dental Clinic is <span className="text-red-500">Losing Patients</span> to Competitors with Better Websites
                        </h1>

                        <div className="flex flex-wrap gap-2">
                            <span className="px-4 py-1.5 text-xs font-bold bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 uppercase tracking-wider">
                                Healthcare SEO
                            </span>
                            <span className="px-4 py-1.5 text-xs font-bold bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 uppercase tracking-wider">
                                Lead Generation
                            </span>
                        </div>
                    </header>

                    <div className="mb-12 rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl relative aspect-video">
                        <img
                            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
                            alt="Professional Dental Clinic Technology"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none space-y-8">
                        <p className="text-xl text-slate-300 leading-relaxed font-medium">
                            In 2026, a potential patient's first "visit" to your clinic isn't through your front door—it's through your website. If that experience is slow, confusing, or outdated, you've lost them before they've even seen a dentist.
                        </p>

                        <div className="bg-slate-800/40 p-8 rounded-3xl border border-slate-700/50 my-12">
                            <h3 className="text-white font-bold text-xl mb-4">Performance for Urgent Patient Journeys</h3>
                            <p className="text-slate-300">
                                A slow or unstable mobile page creates unnecessary friction for patients who may be looking for urgent information. Measure real-user performance and make key contact and booking actions easy to find.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">1. The Ghost Town: No Online Booking</h2>
                        <p className="text-slate-300">
                            A website that only offers a phone call can exclude patients who prefer an online option. An integrated booking flow can provide another route while preserving phone support for urgent or complex cases.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">2. Failing the "Local Search" Test</h2>
                        <p className="text-slate-300">
                            Local search visibility depends on accurate business information, relevant content, a well-maintained business profile, reviews, technical accessibility, and appropriate structured data. Schema supports understanding but does not guarantee rankings.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">3. Lack of Trust Signals (HIPAA & Reviews)</h2>
                        <p className="text-slate-300">
                            Healthcare is built on trust. Does your site mention HIPAA compliance? Does it pull in real Google reviews? Does it show "Before & After" cases? If not, patients will find a practice that does.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-16">
                            <Card variant="stat" title="Booking" value="Reduce friction" description="Offer clear phone and online appointment paths." />
                            <Card variant="stat" title="Local Search" value="Improve relevance" description="Maintain accurate information and useful service pages." />
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-20 p-10 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 border border-blue-500/30 rounded-3xl text-center">
                        <h3 className="text-3xl font-black mb-4">Is your current site driving patients away?</h3>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                            Get a free "Dental Growth Audit." We'll check your Local SEO, speed, and booking flow — and show you exactly how to capture more patients.
                        </p>
                        <Link to="/contact">
                            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white font-bold rounded-xl px-10 py-8 text-xl group shadow-2xl transition-all scale-105">
                                Start Your Clinic Audit
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </article>
            </Layout>
        </>
    );
}

function Card({ variant, title, value, description }: any) {
    return (
        <div className="bg-slate-800/60 p-8 rounded-3xl border border-slate-700/50 text-center space-y-2">
            <div className="text-blue-400 font-black text-3xl">{title}</div>
            <div className="text-white font-bold text-xl">{value}</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{description}</div>
        </div>
    );
}
