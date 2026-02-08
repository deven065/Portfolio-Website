import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";

export default function AutomateLeadGenerationN8n() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How to Automate Lead Generation with n8n: A Complete Guide",
    "description": "Automating lead generation with n8n means turning scattered tools into one system that captures, enriches, scores, and nurtures leads on autopilot.",
    "author": {
      "@type": "Person",
      "name": "Deven Rikame"
    },
    "datePublished": "2026-02-08",
    "dateModified": "2026-02-08",
    "publisher": {
      "@type": "Organization",
      "name": "Deven Digital Labs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://devendigitallabs.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://devendigitallabs.com/blog/automate-lead-generation-n8n-guide"
    }
  };

  return (
    <>
      <SEO 
        title="Automate Lead Generation with n8n | Complete Guide"
        description="Learn how to automate lead generation with n8n. Connect forms, CRMs, and email tools to capture, enrich, score, and nurture leads automatically. Step-by-step workflows included."
        keywords="n8n automation, lead generation automation, n8n workflows, automate lead capture, CRM automation, lead scoring, email automation, business automation"
        canonical="https://devendigitallabs.com/blog/automate-lead-generation-n8n-guide"
        schema={schema}
      />
      <Layout>
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-6 sm:px-8 pt-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-6 sm:px-8 py-12">
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Deven Rikame
              </span>
              <span>·</span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Feb 8, 2026
              </span>
              <span>·</span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 min read
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              How to Automate Lead Generation with n8n: A Complete Guide
            </h1>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/30">
                Automation
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-green-500/10 text-green-400 rounded-full border border-green-500/30">
                N8n
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/30">
                Lead Generation
              </span>
            </div>
          </header>

          {/* Featured Image Placeholder */}
          <div className="mb-12 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20 aspect-video flex items-center justify-center border border-slate-700/50">
            <div className="text-center">
              <p className="text-slate-400 text-lg font-medium">N8n Workflow Automation</p>
              <p className="text-slate-500 text-sm mt-2">Featured Image</p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-xl text-slate-300 leading-relaxed mb-8 p-6 bg-slate-800/30 border-l-4 border-blue-500 rounded-r-lg">
              Automating lead generation with n8n means turning scattered tools (forms, LinkedIn, email, CRM, spreadsheets) into one system that captures, enriches, scores, and nurtures leads on autopilot. This guide walks through the strategy, tools, and step‑by‑step workflows you can actually implement.
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">What n8n Is (And Why It's Great for Lead Gen)</h2>
            
            <p className="text-slate-300 leading-relaxed mb-6">
              n8n is an open‑source automation platform that lets you connect 400+ apps (CRMs, forms, email tools, databases, AI, etc.) using visual workflows instead of code. You can host it yourself or use n8n Cloud, and build complex multi‑step automations with branching, loops, and error handling.
            </p>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 my-8">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Key advantages for lead generation:</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-300">
                  <span className="text-blue-400 font-bold">→</span>
                  <span>Connect CRMs like HubSpot, Salesforce, Zoho, plus email, forms, and databases in one place.</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-blue-400 font-bold">→</span>
                  <span>Capture leads from many sources (forms, scraping, APIs, Slack, ads) into a single pipeline.</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-blue-400 font-bold">→</span>
                  <span>Enrich, score, and route leads in real time using APIs and AI tools.</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-blue-400 font-bold">→</span>
                  <span>Run both simple "if new form → add to CRM" flows and full AI‑powered outbound engines.</span>
                </li>
              </ul>
            </div>

            <p className="text-slate-300 leading-relaxed mb-8">
              A typical lead gen setup in n8n looks like: <span className="text-blue-400 font-semibold">trigger → validation → enrichment → scoring → CRM + sheet log → outbound email/SMS → notifications</span>.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">How to Automate Lead Generation with n8n</h2>
            
            <p className="text-slate-300 leading-relaxed mb-8">
              n8n let's you connect your forms, CRM, email tools, and spreadsheets so new leads flow into one system automatically. You design visual workflows instead of writing code, which makes it ideal for solo founders and small teams.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-10">1. Capture Leads into Your CRM</h3>
            
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Connect your website form or webhook to n8n.</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Clean fields (name, email, company) and check if the contact already exists.</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Create or update the lead in your CRM and log it in a Google Sheet.</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Send a Slack or email notification to your sales inbox.</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-10">2. Enrich and Score Leads</h3>
            
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>After a lead is created, call enrichment or email‑lookup APIs.</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Add company size, industry, and location to the lead.</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Score leads (e.g., role, company size, source) and mark "hot," "warm," or "cold."</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Auto‑assign hot leads to a salesperson and create a task.</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-10">3. Build Outbound Lead Lists</h3>
            
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Use scheduled workflows to call scraping or data sources for your niche.</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Clean domains, find emails, and verify them.</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Push valid prospects into your CRM with a "Outbound" tag and a campaign name.</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-10">4. Automate Personalized Outreach</h3>
            
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Trigger when a lead becomes "hot" or is tagged for outbound.</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Use AI via API to generate a personalized first email based on role and website.</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Send via your email tool or pass the draft to a human for approval.</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-10">5. Follow‑Ups and Reporting</h3>
            
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Add Wait steps and conditions for automatic follow‑ups if there's no reply.</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Log every touch (emails sent, replies, deals created) in your CRM and sheets.</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Use one simple reporting workflow to summarize new leads, hot leads, and conversions.</span>
                </li>
              </ul>
            </div>

            {/* Visual Workflow Placeholder */}
            <div className="my-12 rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20 aspect-video flex items-center justify-center border border-slate-700/50">
              <div className="text-center">
                <p className="text-slate-300 text-xl font-bold mb-2">N8n Workflow Example</p>
                <p className="text-slate-400 text-sm">Visual workflow diagram would go here</p>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-8 my-12">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Key Takeaways</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-300">
                  <span className="text-blue-400 font-bold">→</span>
                  <span>n8n connects 400+ apps without coding, perfect for lead automation</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-blue-400 font-bold">→</span>
                  <span>Complete lead gen flows: capture → enrich → score → nurture → report</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-blue-400 font-bold">→</span>
                  <span>Automate both inbound (forms) and outbound (prospecting) workflows</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-blue-400 font-bold">→</span>
                  <span>Save 15-20 hours per week on manual lead management</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-12 border-t border-slate-700/50">
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Automate Your Lead Generation?
              </h3>
              <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
                We help businesses set up complete n8n automation workflows that capture and nurture leads on autopilot. Get your free automation audit.
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Get Your Free Automation Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t border-slate-700/50">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                DR
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Deven Rikame</h4>
                <p className="text-slate-400 text-sm mb-2">Founder, Deven Digital Labs</p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Deven specializes in building automation systems and lead generation workflows for growing businesses. With expertise in n8n, web development, and growth strategies, he helps companies scale faster with technology.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-slate-700/50">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link to="/blog" className="group bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                <span className="text-xs font-medium text-blue-400 mb-2 block">Performance</span>
                <h4 className="text-lg font-bold group-hover:text-blue-400 transition-colors mb-2">
                  5 Website Performance Optimizations That Increased Conversions by 47%
                </h4>
                <span className="text-sm text-slate-400">6 min read</span>
              </Link>
              <Link to="/blog" className="group bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                <span className="text-xs font-medium text-purple-400 mb-2 block">Business Growth</span>
                <h4 className="text-lg font-bold group-hover:text-blue-400 transition-colors mb-2">
                  The ROI of Business Automation: Real Numbers from 10 Clients
                </h4>
                <span className="text-sm text-slate-400">10 min read</span>
              </Link>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
}
