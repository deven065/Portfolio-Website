import path from "path";
import { createServer } from "./index";
import * as express from "express";
import fs from "fs";

const app = createServer();
const port = process.env.PORT || 3000;

// In production, serve the built SPA files
const __dirname = import.meta.dirname;
const distPath = path.join(__dirname, "../spa");

// Cache for index.html content
let indexHtml = "";

const seoMap: Record<string, { title: string; description: string; content: string }> = {
  "/": {
    title: "Web Developer Mumbai | Affordable Website Design | Deven Digital Labs",
    description: "Expert web developer in Mumbai specializing in custom websites, affordable website design, and React developer for small business. Turn your website into a revenue engine.",
    content: `
      <!-- Googlebot & Search Engine Indexable Fallback Content -->
      <main style="max-width:800px; margin:0 auto; padding:40px 20px; font-family:sans-serif; color:#333; display:none;">
        <article>
          <h1>Expert Web Developer Mumbai - Affordable Website Design</h1>
          <p>Led by <strong>Deven Rikame</strong>, a premier <strong>web developer Mumbai</strong>. We specialize in providing <strong>affordable website design Mumbai</strong> and acting as a dedicated <strong>React developer for small business</strong>. We build fast, custom, and highly responsive web applications that drive traffic, capture qualified leads, and boost company revenue.</p>
          <h2>Custom Web Development & Technology Solutions in India</h2>
          <p>Looking for a freelance <strong>web developer in Mumbai</strong> or an expert <strong>React developer for small business</strong>? Deven Digital Labs is a full-service growth agency. We build software solutions that don't just look stunning but act as revenue-driving sales machines for your brand.</p>
          <ul>
            <li><strong>Affordable Website Design Mumbai</strong>: Fast, SEO-optimized web apps built for optimal conversion. Perfect for local businesses and professional services.</li>
            <li><strong>React Developer for Small Business</strong>: Need custom features? We integrate APIs, build custom CRMs, and automate repetitive customer capture processes.</li>
            <li><strong>E-commerce Systems</strong>: High-converting storefronts, complete with custom payment gateway integrations and optimized checkout flows.</li>
          </ul>
        </article>
      </main>
    `
  },
  "/services": {
    title: "Web Development, Automation & UI/UX Design Services | Deven Digital Labs",
    description: "Professional web development and automation services by Deven Rikame, leading React developer in India. n8n automation, custom SaaS build, and UI/UX design.",
    content: `
      <main style="max-width:800px; margin:0 auto; padding:20px; font-family:sans-serif; color:#333;">
        <article>
          <h1>Our Web Development & Technology Consulting Services</h1>
          <p>Deven Digital Labs offers end-to-end digital services that convert visitors into revenue. Guided by <strong>Deven Rikame</strong>, a prominent <strong>React developer India</strong> and <strong>web developer Mumbai</strong>.</p>
          <h2>Services We Offer</h2>
          <ul>
            <li><strong>React & Next.js Development</strong>: Fast, SEO-optimized web applications and responsive business websites.</li>
            <li><strong>Business Automation (n8n & Zapier)</strong>: Streamline workflows, eliminate manual ops, and save 20+ hours/week.</li>
            <li><strong>E-commerce Stores</strong>: Shopify, WooCommerce, or custom platforms with Razorpay and Stripe payment gateway integrations.</li>
            <li><strong>SaaS & Web Applications</strong>: Scalable backends, user authentication, interactive billing systems, and custom database designs.</li>
            <li><strong>UI/UX Design</strong>: High-fidelity Figma design systems, custom wireframing, and prototype testing.</li>
            <li><strong>SEO & Speed Audits</strong>: Optimization for Core Web Vitals, Google rankings, page speed boosts, and Google Analytics.</li>
          </ul>
        </article>
      </main>
    `
  },
  "/projects": {
    title: "Our Work & Case Studies | Deven Digital Labs",
    description: "Explore our portfolio of successful projects and case studies. Custom React web applications, business automation, and premium interior design portfolios.",
    content: `
      <main style="max-width:800px; margin:0 auto; padding:20px; font-family:sans-serif; color:#333;">
        <article>
          <h1>Deven Digital Labs - Portfolio & Completed Projects</h1>
          <p>Explore real-world case studies demonstrating our capabilities as a leading <strong>web developer Mumbai</strong> and senior <strong>React developer India</strong>. Every project is measured by the revenue it drives.</p>
          <h2>Featured Portfolios & Applications</h2>
          <ul>
            <li><strong>Al.Sana Interiors Portfolio</strong>: A high-end, luxury interior design portfolio that drove over $45,000 in new design contracts.</li>
            <li><strong>Space Age Interiors consultation</strong>: Optimized client consultation pipeline with 85% business automation.</li>
            <li><strong>Accent Techno CRM</strong>: Custom customer relationship management software built to save over 20 hours/week for sales teams.</li>
          </ul>
        </article>
      </main>
    `
  },
  "/about": {
    title: "About Deven Rikame & Deven Digital Labs | Founder & Technology Partner",
    description: "Learn more about Deven Rikame, founder of Deven Digital Labs. Expert software engineer and technology consultant helping businesses grow.",
    content: `
      <main style="max-width:800px; margin:0 auto; padding:20px; font-family:sans-serif; color:#333;">
        <article>
          <h1>About Deven Rikame & Deven Digital Labs</h1>
          <p>Learn more about <strong>Deven Rikame</strong>, an expert <strong>React developer India</strong> and premier freelance <strong>web developer Mumbai</strong>. Deven Digital Labs is built on a simple philosophy: be a revenue growth partner, not just a dev shop.</p>
          <h2>Why Partner With Us?</h2>
          <p>We work with growing companies to build custom software, lead-capturing web automation pipelines, and high-performance websites. Our solutions load in under 2 seconds, rank for crucial Google queries, and break even within 90 days of launch.</p>
        </article>
      </main>
    `
  },
  "/contact": {
    title: "Contact Deven Labs | Hire React Developer India & Web Developer Mumbai",
    description: "Contact Deven Rikame at Deven Digital Labs today for a free website audit or consultation. Let's discuss your next React, Next.js, or n8n automation project.",
    content: `
      <main style="max-width:800px; margin:0 auto; padding:20px; font-family:sans-serif; color:#333;">
        <article>
          <h1>Contact Deven Digital Labs</h1>
          <p>Get in touch with <strong>Deven Rikame</strong>, a leading <strong>React developer India</strong> and <strong>web developer Mumbai</strong>. Let's build your next high-converting website, custom SaaS app, or n8n workflow automation.</p>
          <h2>Book a Consultation</h2>
          <p>Email us at <a href="mailto:hello@devendigitallabs.com">hello@devendigitallabs.com</a> or book a free discovery call directly via Cal.com to claim your free site audit today.</p>
        </article>
      </main>
    `
  }
};

// Serve static files
app.use(express.static(distPath));

// Handle React Router - serve index.html with Server-Side Injection (SSI) for SEO
app.get("*", (req, res) => {
  // Don't serve index.html for API routes
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }

  const indexPath = path.join(distPath, "index.html");

  if (!indexHtml) {
    try {
      indexHtml = fs.readFileSync(indexPath, "utf-8");
    } catch (err) {
      console.error("Error reading index.html", err);
      return res.sendFile(indexPath); // Fallback to normal sendFile if read fails
    }
  }

  let finalHtml = indexHtml;
  const pathKey = req.path.endsWith("/") && req.path.length > 1 ? req.path.slice(0, -1) : req.path;
  const seo = seoMap[pathKey] || seoMap["/"];

  if (seo) {
    // Inject Title
    finalHtml = finalHtml.replace(/<title>.*?<\/title>/i, `<title>${seo.title}</title>`);
    // Inject Meta Description (handles potential multiline/whitespace in HTML)
    finalHtml = finalHtml.replace(/<meta\s+name="description"[\s\S]*?\/>/i, `<meta name="description" content="${seo.description}" />`);
    // Inject Static Content inside the root div (replacing existing fallback content)
    finalHtml = finalHtml.replace(/<div id="root">[\s\S]*?<\/div>/i, `<div id="root">\n${seo.content}\n</div>`);
  }

  res.setHeader("Content-Type", "text/html");
  res.send(finalHtml);
});

app.listen(port, () => {
  console.log(`🚀 Fusion Starter server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
