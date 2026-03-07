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
        "headline": "5 Website Performance Optimizations That Increased Conversions by 47%",
        "description": "A deep dive into the technical optimizations we used to transform a slow website into a high-converting revenue machine.",
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
                title="5 Website Performance Optimizations | Case Study"
                description="How we boosted conversions by 47% through technical SEO and speed optimization. Real case study with metrics and implementation details."
                keywords="website performance, conversion rate optimization, core web vitals, speed optimization, technical seo case study, next.js optimization"
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
                            5 Performance Optimizations That Increased Conversions by <span className="text-blue-400">47%</span>
                        </h1>

                        <div className="flex flex-wrap gap-2">
                            <span className="px-4 py-1.5 text-xs font-bold bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 uppercase tracking-wider">
                                Performance
                            </span>
                            <span className="px-4 py-1.5 text-xs font-bold bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 uppercase tracking-wider">
                                Case Study
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
                            "Speed isn't just a technical metric—it's a financial one. For every 1-second delay in mobile load times, conversion rates can drop by up to 20%."
                        </p>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none space-y-8">
                        <p className="text-slate-300">
                            When a prominent SaaS client approached us last year, their website was beautiful but sluggish. Despite driving thousands of visitors via ads, their conversion rate was hovering at a dismal **2.3%**.
                        </p>

                        <p className="text-slate-300">
                            After a deep audit, we discovered their "Time to First Byte" (TTFB) was nearly 3 seconds, and their "Largest Contentful Paint" (LCP) was failing Core Web Vitals. Here are the 5 exact optimizations we implemented to fix it.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">1. Critical CSS Inlining & Resource Preloading</h2>
                        <p className="text-slate-300">
                            The browser was waiting for a massive 400kb CSS file before rendering any text. We extracted the **Critical CSS** (the styles needed for the initial screen) and inlined it directly into the HTML `&lt;head&gt;`.
                        </p>
                        <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50">
                            <div className="text-sm font-mono text-blue-400 mb-2">// The Result</div>
                            <p className="text-slate-300 font-medium">Reduced perceived load time by 60% on mobile devices.</p>
                        </div>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">2. Next-Gen Image Compression (WebP/Avif)</h2>
                        <p className="text-slate-300">
                            High-resolution PNGs were the biggest bottleneck. We implemented an automated pipeline that serves **WebP** versions of images by default and fallbacks to compressed JPEGs.
                        </p>
                        <ul className="list-none space-y-3">
                            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" /> Total page weight reduced from 4.2MB to 1.1MB.</li>
                            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" /> Image load times dropped under 200ms.</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">3. Aggressive Browser Caching & Edge Delivery</h2>
                        <p className="text-slate-300">
                            We moved the site to a Global CDN (Edge Computing) and configured cache-control headers for static assets. This ensures that a returning visitor loads the site **instantly** from their own local storage.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">4. Removing JavaScript "Bloat"</h2>
                        <p className="text-slate-300">
                            3rd-party tracking scripts (Hotjar, GTM, multiple chat widgets) were blocking the main thread. We delayed the execution of non-critical scripts until after the user first scrolled or after 3 seconds of inactivity.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">5. Optimizing Core Web Vitals (LCP & CLS)</h2>
                        <p className="text-slate-300">
                            We fixed Layout Shift (CLS) by adding explicit width/height attributes to all images and reserved space for dynamic elements like ads. This stopped the page from "jumping" while loading.
                        </p>

                        {/* Results Table */}
                        <div className="my-16 overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/50">
                            <div className="p-6 bg-blue-600/10 border-b border-slate-700/50">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <BarChart3 className="w-6 h-6 text-blue-400" />
                                    The Results: Before vs. After
                                </h3>
                            </div>
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-800/50 text-slate-400 text-sm">
                                        <th className="p-4 border-b border-slate-700/50">Metric</th>
                                        <th className="p-4 border-b border-slate-700/50">Before</th>
                                        <th className="p-4 border-b border-slate-700/50">After</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-300">
                                    <tr>
                                        <td className="p-4 border-b border-slate-800/50 font-medium">Mobile Score</td>
                                        <td className="p-4 border-b border-slate-800/50 text-red-400">34 / 100</td>
                                        <td className="p-4 border-b border-slate-800/50 text-emerald-400">92 / 100</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border-b border-slate-800/50 font-medium">LCP (Speed)</td>
                                        <td className="p-4 border-b border-slate-800/50">4.8s</td>
                                        <td className="p-4 border-b border-slate-800/50 text-emerald-400">1.2s</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-bold text-white">Conversion Rate</td>
                                        <td className="p-4 text-slate-400">2.3%</td>
                                        <td className="p-4 text-emerald-400 font-bold">3.4% (+47%)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Final Takeaway</h2>
                        <p className="text-slate-300">
                            Most businesses focus on adding more features, but the biggest growth often comes from **removing friction**. By making the site faster, we improved the user experience, which Google rewarded with higher rankings, subsequently leading to more sales.
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
