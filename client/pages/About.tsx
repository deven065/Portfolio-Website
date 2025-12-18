import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { ArrowRight, Zap, Target, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function About() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Deven Digital Labs",
    "description": "Learn about Deven Digital Labs, our mission, values, and the technology consulting services we provide to help businesses grow."
  };
  return (
    <>
      <SEO 
        title="About Us - Technology Consulting Agency"
        description="Learn about Deven Digital Labs - a technology consulting agency helping businesses grow through scalable, reliable digital solutions. Our mission, values, and approach to software development."
        keywords="technology consulting, web development agency, software development company, about us, our team, company values, digital agency, tech consulting firm"
        schema={schema}
      />
      <Layout>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            About Deven Digital Labs
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We're a technology consulting agency helping businesses grow through scalable, reliable digital solutions.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
              <p>
                Deven Digital Labs was founded with a clear mission: to help businesses leverage technology as a strategic asset for long-term growth. We saw a gap in the market for agencies that prioritize business outcomes over quick wins, scalability over short-term projects, and partnership over transactional relationships.
              </p>
              <p>
                Over the years, we've partnered with startups, growing companies, and enterprises across industries—from fintech and healthcare to e-commerce and edtech. Every project taught us something new about building reliable, scalable solutions that actually move the needle for our clients.
              </p>
              <p>
                Today, we're trusted by founders and companies who are serious about their digital transformation. We approach every engagement as a long-term partnership, not just a project delivery. Your success is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Mission & Core Values</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="md:col-span-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              To empower businesses with scalable, reliable technology solutions that drive growth, improve efficiency, and create lasting competitive advantage. We partner with founders and companies who are serious about building long-term digital success.
            </p>
          </div>

          {/* Values */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/80 transition-all duration-300">
            <Target className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Business-First</h3>
            <p className="text-slate-300">
              We measure success by business outcomes, not lines of code. Every decision is made with your growth and objectives in mind.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/80 transition-all duration-300">
            <Zap className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Scalable by Design</h3>
            <p className="text-slate-300">
              We build systems that grow with you. From day one, we architect for scalability, reliability, and long-term maintainability.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/80 transition-all duration-300">
            <Shield className="w-10 h-10 text-indigo-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Reliable Partner</h3>
            <p className="text-slate-300">
              Trust and transparency are foundational. We communicate clearly, deliver consistently, and stand behind our work.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Companies Choose Deven Digital Labs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">Proven Track Record</h3>
              <p className="text-slate-300">
                We've delivered solutions for startups that scaled to unicorn status, enterprises managing billions in transactions, and everything in between.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">Technical Excellence</h3>
              <p className="text-slate-300">
                We don't just build; we architect. Clean code, best practices, and modern technology stacks are non-negotiable.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">Long-Term Partnership</h3>
              <p className="text-slate-300">
                We're invested in your success. After launch, we provide ongoing support, optimization, and strategic guidance.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Transparent Communication</h3>
              <p className="text-slate-300">
                No jargon, no surprises. We keep you informed at every stage and explain technical decisions in business terms.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Business Acumen</h3>
              <p className="text-slate-300">
                We understand your business challenges. Technology is the tool; your business growth is the goal.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Performance & Reliability</h3>
              <p className="text-slate-300">
                Systems built to run 24/7 with 99.9% uptime, optimized for performance, and designed to handle growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
        <p className="text-xl text-slate-300 mb-8">
          Let's discuss how we can help your business scale and succeed with reliable technology.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg">
            Start a Conversation
            <ArrowRight size={18} />
          </Button>
        </Link>
      </section>
    </Layout>
    </>
  );
}
