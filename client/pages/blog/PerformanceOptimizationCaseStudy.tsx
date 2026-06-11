import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, ArrowRight, CheckCircle2, Zap, BarChart3, Globe } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PerformanceOptimizationCaseStudy() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "A Practical Website Performance Optimization Checklist",
        "description": "A technical guide to improving rendering, image delivery, caching, JavaScript execution, and Core Web Vitals.",
        "author": {
            "@type": "Person",
            "name": "Deven Rikame"
        },
        "datePublished": "2026-01-28",
        "dateModified": "2026-01-28",
        "publisher": {
            "@type": "Organization",
            "name": "Deven Digital Labs"
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://devendigitallabs.com/blog/website-performance-optimization-case-study"
        }
    };

    return (
        <>
            <SEO
                title="Website Performance Optimization Checklist"
                description="A practical technical guide to improving website rendering, image delivery, caching, JavaScript execution, and Core Web Vitals."
                keywords="website performance, core web vitals, speed optimization, technical seo, next.js optimization"
                canonical="https://devendigitallabs.com/blog/website-performance-optimization-case-study"
                schema={schema}
            />
            <Layout>
                <Breadcrumbs />

                {/* Article Header */}
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
                                Jan 28, 2026
                            </span>
                            <span className="text-slate-700">|</span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-blue-400" />
                                6 min read
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
                            A Practical Website Performance Optimization Checklist
                        </h1>

                        <div className="flex flex-wrap gap-2">
                            <span className="px-4 py-1.5 text-xs font-bold bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 uppercase tracking-wider">
                                Performance
                            </span>
                            <span className="px-4 py-1.5 text-xs font-bold bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 uppercase tracking-wider">
                                Technical Guide
                            </span>
                            <span className="px-4 py-1.5 text-xs font-bold bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20 uppercase tracking-wider">
                                Technical SEO
                            </span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="mb-12 rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl relative aspect-video group">
                        <img
                            src="/performance.png"
                            alt="Website Performance Optimization Case Study"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                    </div>

                    {/* Intro Summary */}
                    <div className="bg-slate-800/20 border-l-4 border-blue-500 p-8 rounded-r-2xl mb-12">
                        <p className="text-xl text-slate-200 leading-relaxed italic">
                            "Performance work should begin with field data, a reproducible baseline, and a clear understanding of which user journey matters."
                        </p>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none space-y-8">
                        <p className="text-slate-300">
                            Slow websites often combine several smaller problems: render-blocking styles, oversized media, third-party scripts, weak caching, and layout instability.
                        </p>

                        <p className="text-slate-300">
                            The following checks describe the optimization sequence we use. The impact of each change must be measured on the specific website rather than assumed from a universal benchmark.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">1. Critical CSS Inlining & Resource Preloading</h2>
                        <p className="text-slate-300">
                            Large render-blocking stylesheets can delay visible content. Extract critical styles where appropriate, remove unused CSS, and preload only resources needed for the initial view.
                        </p>
                        <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50">
                            <div className="text-sm font-mono text-blue-400 mb-2">// Verify</div>
                            <p className="text-slate-300 font-medium">Compare field and lab measurements before and after deployment.</p>
                        </div>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">2. Next-Gen Image Compression (WebP/Avif)</h2>
                        <p className="text-slate-300">
                            High-resolution source images are a common bottleneck. Use responsive dimensions, modern formats, meaningful compression, and lazy loading below the fold.
                        </p>
                        <ul className="list-none space-y-3">
                            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" /> Generate appropriately sized variants instead of serving one large source.</li>
                            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" /> Use a poster and click-to-play behaviour for large videos.</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">3. Aggressive Browser Caching & Edge Delivery</h2>
                        <p className="text-slate-300">
                            A CDN and appropriate cache-control headers can reduce repeated network work for static assets. Verify cache behaviour and real-user performance after deployment.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">4. Removing JavaScript "Bloat"</h2>
                        <p className="text-slate-300">
                            Third-party tracking scripts and widgets can block the main thread. Load non-critical tools after consent or meaningful interaction and remove integrations that do not support a measured business need.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">5. Optimizing Core Web Vitals (LCP & CLS)</h2>
                        <p className="text-slate-300">
                            We fixed Layout Shift (CLS) by adding explicit width/height attributes to all images and reserved space for dynamic elements like ads. This stopped the page from "jumping" while loading.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Final Takeaway</h2>
                        <p className="text-slate-300">
                            Most teams focus on adding features, but removing friction can be equally valuable. Measure speed, user behaviour, search visibility, and conversion separately so performance work is not credited for outcomes the data cannot establish.
                        </p>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-20 p-10 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-3xl text-center">
                        <h3 className="text-3xl font-black mb-4">Is your website losing sales due to speed?</h3>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                            We offer a free performance audit to identify the bottlenecks that are killing your conversions.
                        </p>
                        <Link to="/contact">
                            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl px-8 py-6 text-lg group shadow-xl transition-all">
                                Get Your Free Audit
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </article>
            </Layout>
        </>
    );
}
