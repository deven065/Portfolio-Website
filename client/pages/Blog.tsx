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
      image: "/automation-guide.png"
    },
    {
      id: "2",
      title: "5 Website Performance Optimizations That Increased Our Client's Conversions by 47%",
      excerpt: "Discover the exact performance optimization strategies we used to boost a client's conversion rate from 2.3% to 3.4% in just 30 days.",
      date: "2026-01-28",
      readTime: "6 min read",
      category: "Performance",
      slug: "website-performance-optimization-case-study",
      image: "/performance.png"
    },
    {
      id: "3",
      title: "The ROI of Business Automation: Real Numbers from 10 Clients",
      excerpt: "Hard data on how business automation delivers measurable ROI. See actual time savings, cost reductions, and revenue impact from real projects.",
      date: "2026-01-25",
      readTime: "10 min read",
      category: "Business Growth",
      slug: "roi-business-automation-real-data",
      image: "/roi-data.png"
    },
    {
      id: "4",
      title: "Why Your Dental Clinic is Losing Patients to Competitors with Better Websites",
      excerpt: "Expert analysis on why dental practices fail to convert online traffic and how a high-performance website can increase appointments by 150%.",
      date: "2026-03-05",
      readTime: "7 min read",
      category: "Healthcare",
      slug: "dental-clinic-losing-patients-website-audit",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "5",
      title: "5 Luxury Features Every Interior Design Portfolio Needs in 2026",
      excerpt: "Examine the essential high-end features that distinguish a luxury interior design portfolio from a basic showcase.",
      date: "2026-03-06",
      readTime: "6 min read",
      category: "Design",
      slug: "luxury-interior-design-portfolio-features",
      image: "/interior-design.png"
    }
  ];

  const categories = ["All", "Automation", "Performance", "Business Growth", "Healthcare", "Design"];

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
          <div className="absolute inset-0 -z-10 bg-[#F8FAFC]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0F172A]">
              Growth & Automation Insights
            </h1>
            <p className="text-lg sm:text-xl text-[#64748B] max-w-2xl mx-auto">
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm ${category === "All"
                  ? "bg-[#2563EB] text-white"
                  : "bg-white text-[#64748B] hover:bg-gray-50 border border-[#E2E8F0]"
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
                  className="bg-white border border-[#E2E8F0] shadow-sm rounded-xl overflow-hidden hover:shadow-md hover:border-[#2563EB]/30 transition-all duration-300 animate-fade-up h-full flex flex-col"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={post.image || "/blog/default.jpg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col space-y-4">
                    <div className="flex items-center gap-4 text-sm text-[#64748B]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>

                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-[#2563EB]/10 text-[#2563EB] rounded-full border border-[#2563EB]/20">
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-[#64748B] line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div
                      className="inline-flex items-center gap-2 text-[#2563EB] font-bold transition-colors mt-auto"
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
            <div className="inline-block px-6 py-3 bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm rounded-lg">
              <p className="text-[#64748B]">
                📝 More articles coming soon! Subscribe to stay updated.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
          <div className="bg-[#2563EB] rounded-3xl p-8 sm:p-12 text-center shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Ready to Automate Your Growth?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Stop reading about it—start implementing. Get your free website + automation audit.
            </p>
            <Link to="/contact">
              <Button
                size="cta"
                className="bg-white text-[#2563EB] hover:bg-gray-100 font-bold shadow-md hover:shadow-lg transition-all px-8 py-6 rounded-xl group"
              >
                Get Your Free Audit
                <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}
