import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  image?: string;
}

export default function Blog() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Deven Digital Labs Blog",
    "description": "Insights on web development, automation, lead generation, and business growth strategies.",
    "url": "https://devendigitallabs.com/blog"
  };

  // Sample blog posts - replace with real content later
  const posts: BlogPost[] = [
    {
      id: "1",
      title: "How to Automate Lead Generation with n8n: A Complete Guide",
      excerpt: "Learn how to set up powerful lead generation workflows using n8n that capture, qualify, and nurture leads automatically—saving 15+ hours per week.",
      date: "2026-02-01",
      readTime: "8 min read",
      category: "Automation",
      slug: "automate-lead-generation-n8n-guide",
      image: "/blog/automation-guide.jpg"
    },
    {
      id: "2",
      title: "5 Website Performance Optimizations That Increased Our Client's Conversions by 47%",
      excerpt: "Discover the exact performance optimization strategies we used to boost a client's conversion rate from 2.3% to 3.4% in just 30 days.",
      date: "2026-01-28",
      readTime: "6 min read",
      category: "Performance",
      slug: "website-performance-optimization-case-study",
      image: "/blog/performance.jpg"
    },
    {
      id: "3",
      title: "The ROI of Business Automation: Real Numbers from 10 Clients",
      excerpt: "Hard data on how business automation delivers measurable ROI. See actual time savings, cost reductions, and revenue impact from real projects.",
      date: "2026-01-25",
      readTime: "10 min read",
      category: "Business Growth",
      slug: "roi-business-automation-real-data",
      image: "/blog/roi-data.jpg"
    }
  ];

  const categories = ["All", "Automation", "Performance", "Business Growth", "Web Development", "Lead Generation"];

  return (
    <>
      <SEO 
        title="Blog | Web Development & Automation Insights"
        description="Expert insights on web development, n8n automation, lead generation strategies, and business growth. Practical guides and case studies from real projects."
        keywords="web development blog, automation guides, n8n tutorials, lead generation strategies, business growth tips, performance optimization"
        canonical="https://devendigitallabs.com/blog"
        schema={schema}
      />
      <Layout>
        {/* Hero */}
        <section className="relative py-16 sm:py-20 md:py-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Growth & Automation Insights
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Practical guides on automation, lead generation, and building systems that drive business growth.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === "All"
                    ? "bg-blue-500 text-white"
                    : "bg-slate-800/50 text-slate-300 hover:bg-slate-800 border border-slate-700/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group block h-full"
              >
                <article
                  className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 animate-fade-up h-full"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-slate-400 text-sm">Featured Image</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/30">
                    {post.category}
                  </span>

                  <h2 className="text-xl font-bold group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-slate-400 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div
                    className="inline-flex items-center gap-2 text-blue-400 group-hover:text-blue-300 font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
              </Link>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="mt-16 text-center">
            <div className="inline-block px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg">
              <p className="text-slate-300">
                📝 More articles coming soon! Subscribe to stay updated.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Automate Your Growth?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Stop reading about it—start implementing. Get your free website + automation audit.
            </p>
            <Link to="/contact">
              <Button
                size="cta"
                className="cta-primary cta-contrast group shadow-xl hover:shadow-2xl"
              >
                Get Your Free Audit
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}
