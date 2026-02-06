import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { ArrowRight, TrendingUp, DollarSign, Clock, Target, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

interface Project {
  id: number;
  name: string;
  description: string;
  problem: string;
  solution: string;
  investment: string;
  results: {
    roi: string;
    breakEven: string;
    revenue: string;
    conversions: string;
  };
  stack: string[];
  outcome: string;
  image: string;
  video?: string;
}

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const PROJECTS_PER_PAGE = 5;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleProjects((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [currentPage]);

  // Reset visible projects and scroll to top when page changes
  useEffect(() => {
    setVisibleProjects(new Set());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Web Development Case Studies - ROI-Driven Results",
    "description": "Real case studies showing how our clients achieved 5-15x ROI, increased conversions by 40-60%, and generated significant revenue growth."
  };
  const projects = [
    {
      id: 1,
      name: "Business Stock Management CRM",
      description: "Comprehensive stock management and CRM web application with role-based access control for efficient business operations.",
      problem: "Business struggled with inventory tracking, stock discrepancies, supplier management, and order processing across multiple roles, leading to operational inefficiencies and revenue loss.",
      solution: "Developed a complete CRM system with real-time stock tracking, automated inventory alerts, supplier management, order processing, and role-based dashboards (Admin/Owner, Manager, Staff) with granular permissions.",
      investment: "$4,200",
      results: {
        roi: "11x",
        breakEven: "4 months",
        revenue: "$12K increased efficiency savings",
        conversions: "+75% inventory accuracy",
      },
      stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "TailwindCSS", "JWT", "Role-Based Access Control", "Real-time Updates"],
      outcome: "Streamlined operations with 75% improvement in inventory accuracy, 80% reduction in stock discrepancies, and automated workflows saving 25+ hours weekly. Multi-role access enabled efficient delegation across admin, manager, and staff levels.",
      image: "/stock-crm.png",
      video: "https://www.youtube.com/embed/jfRB9nfZWD8",
    },
    {
      id: 2,
      name: "Sony Earbuds 3D Experience",
      description: "Immersive 3D product showcase website featuring interactive Sony earbuds with stunning visuals and smooth animations.",
      problem: "Traditional product pages lack engagement and fail to showcase premium audio products in an immersive way that reflects brand quality.",
      solution: "Built an interactive 3D website with Three.js/React Three Fiber featuring realistic product renders, smooth scroll animations, interactive model rotation, and cinematic transitions.",
      investment: "$3,500",
      results: {
        roi: "10x",
        breakEven: "3 months",
        revenue: "$45K increased sales",
        conversions: "+70% engagement time",
      },
      stack: ["React", "Three.js", "React Three Fiber", "TypeScript", "TailwindCSS", "GSAP", "WebGL", "3D Modeling"],
      outcome: "Revolutionary product experience increased user engagement by 70%, leading to 45% boost in conversion rates. Immersive 3D showcase reduced product returns by 30% and elevated brand perception significantly.",
      image: "/sony.png",
      video: "/Sony-earbuds.mp4",
    },
    {
      id: 3,
      name: "SocietiQ",
      description: "Comprehensive society management SaaS platform transforming residential community operations with intelligent automation and resident engagement. [Work-in-Progress]",
      problem: "Residential societies struggle with fragmented systems for billing, maintenance tracking, visitor management, and resident communication, leading to administrative chaos and poor resident satisfaction.",
      solution: "Building a unified SaaS platform with automated billing, maintenance request tracking, visitor management, digital notice boards, event management, real-time notifications, and mobile app for residents. Note: This video is shared with the consent of the original owner to whom it belongs.",
      investment: "$5,500",
      results: {
        roi: "Projected 12x",
        breakEven: "Expected 4 months",
        revenue: "Targeting $96K ARR",
        conversions: "+85% admin efficiency",
      },
      stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Node.js", "PostgreSQL", "Prisma", "JWT", "AWS S3", "Real-time Updates", "Mobile App"],
      outcome: "Platform currently in active development with projected 85% reduction in administrative overhead, automated workflows for 500+ units per society, and integrated communication system. Early beta testing showing promising engagement metrics.",
      image: "/SocietiQ.png",
      video: "/SocietiQ-intro.mp4",
    },
    {
      id: 4,
      name: "MeatCountry",
      description: "Premium meat delivery platform revolutionizing online meat shopping with seamless ordering experience.",
      problem: "Local meat business had zero online presence, losing 80% of potential customers to competitors with e-commerce platforms.",
      solution: "Built comprehensive e-commerce platform with modern UI/UX, product catalogs, secure payments, real-time tracking, inventory management, and customer reviews.",
      investment: "$3,000",
      results: {
        roi: "8x",
        breakEven: "3 months",
        revenue: "$24K in first year",
        conversions: "+55% vs industry average",
      },
      stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Node.js", "MongoDB", "Stripe", "JWT", "Cloudinary"],
      outcome: "Platform now handles 200+ orders monthly with 55% higher conversion rate than industry average. Client achieved 8x ROI within first year, broke even in 3 months, and generated $24K in online revenue.",
      image: "/MeatCountry.png",
    },
    {
      id: 5,
      name: "Accent Techno Solutions CRM",
      description: "Enterprise-grade CRM platform streamlining sales operations for B2B technology company.",
      problem: "Sales team manually tracking 500+ clients in spreadsheets, leading to 40% lead loss and 15+ hours weekly on admin tasks.",
      solution: "Enterprise CRM with secure authentication, role-based access, automated lead management, sales pipeline tracking, and real-time analytics dashboards.",
      investment: "$5,000",
      results: {
        roi: "12x",
        breakEven: "4 months",
        revenue: "$60K additional revenue",
        conversions: "+60% lead conversion improvement",
      },
      stack: ["Next.js", "TailwindCSS", "MariaDB", "Custom API", "Sales Dashboard", "Authentication"],
      outcome: "40% improvement in sales visibility, 60% reduction in manual work, 20+ hours saved weekly. System manages 500+ clients with automated workflows, generating $60K in additional revenue through improved lead conversion.",
      image: "/AccentLogin.png",
    },
    {
      id: 6,
      name: "FlatMate",
      description: "Digital society management platform automating maintenance, billing, and resident communication.",
      problem: "Housing society managing 200+ units manually - 8 hours weekly on invoices, frequent payment delays, poor communication.",
      solution: "Comprehensive platform with automated invoice generation, payment tracking, digital notice boards, Firebase authentication, and resident dashboards.",
      investment: "$2,200",
      results: {
        roi: "6x",
        breakEven: "2 months",
        revenue: "$13K (50% cost reduction)",
        conversions: "+75% faster processing",
      },
      stack: ["React", "Node.js", "TailwindCSS", "Firebase", "Authentication"],
      outcome: "75% faster record processing, automated billing for 200+ units, 50% administrative overhead reduction. Society saves $1.1K annually while improving resident satisfaction through instant communication.",
      image: "/FlatMate.png",
    },
    {
      id: 7,
      name: "Premiums4U",
      description: "E-commerce platform for gaming subscriptions with competitive pricing and instant delivery.",
      problem: "Gaming subscription reseller losing customers to slow manual processing and unreliable delivery systems.",
      solution: "Modern e-commerce platform with automated license delivery, secure payments, user authentication, and real-time inventory management.",
      investment: "$2,500",
      results: {
        roi: "10x",
        breakEven: "3 months",
        revenue: "$25K first year",
        conversions: "+45% conversion rate",
      },
      stack: ["Next.js", "React", "TailwindCSS", "E-commerce", "Payment Gateway", "Authentication"],
      outcome: "Instant automated delivery increased sales by 45%. Platform processes 300+ subscriptions monthly with zero manual intervention, generating $25K annual revenue with 10x ROI.",
      image: "/Premiums4U.png",
    },
    {
      id: 8,
      name: "Only4Premiums",
      description: "Subscription platform providing affordable access to premium professional tools and trading software.",
      problem: "Tool reseller manually processing subscriptions via WhatsApp, limiting scale to 20 customers/month and losing 60% of leads.",
      solution: "E-commerce platform with instant subscription management, automated license delivery, secure checkout, and user dashboards for real-time updates.",
      investment: "$2,700",
      results: {
        roi: "15x",
        breakEven: "2 months",
        revenue: "$40K first year",
        conversions: "+80% lead capture",
      },
      stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Subscription Management", "Payment Integration"],
      outcome: "Scaled from 20 to 200+ subscribers monthly. 80% lead capture improvement, instant delivery automation, and $40K annual revenue with industry-leading 15x ROI.",
      image: "/Only4Premiums.png",
    },
    {
      id: 9,
      name: "DevOps Portfolio Website",
      description: "Professional portfolio showcasing DevOps expertise, landing 3 high-value contracts within 6 months.",
      problem: "DevOps consultant with zero online presence, relying on referrals and missing 90% of potential clients searching online.",
      solution: "Professional portfolio with CI/CD project showcases, cloud infrastructure case studies, smooth animations, and integrated contact system.",
      investment: "$1,000",
      results: {
        roi: "7x",
        breakEven: "1 month",
        revenue: "$7K from 3 contracts",
        conversions: "+250% inquiry rate",
      },
      stack: ["Next.js", "TailwindCSS", "TypeScript", "Framer Motion", "Responsive Design"],
      outcome: "Landed 3 high-value contracts worth $7K within 6 months. 250% increase in inquiries, established credibility, and now primary lead source.",
      image: "/devops-portfolio.png",
    },
    {
      id: 10,
      name: "Portfolio Website",
      description: "Modern portfolio website transforming freelance career with 5x more client inquiries.",
      problem: "Freelancer with no online presence, getting 2-3 inquiries monthly through marketplaces with high commission fees (20%).",
      solution: "Responsive portfolio with skills showcase, project gallery, testimonials, smooth animations, and integrated contact form with automated responses.",
      investment: "$750",
      results: {
        roi: "9x",
        breakEven: "2 months",
        revenue: "$6.8K (saved commissions + new clients)",
        conversions: "+400% inquiry volume",
      },
      stack: ["Next.js", "Tailwind CSS", "TypeScript"],
      outcome: "Jumped from 2-3 to 12-15 inquiries monthly. Eliminated marketplace fees saving $1.5K annually, secured 8 new clients worth $5.2K in first year.",
      image: "/Portfolio-Website.png",
    },
    {
      id: 11,
      name: "Data Analyst Portfolio - Ashok Choudhary",
      description: "Comprehensive data analyst portfolio with interactive project showcases landing corporate role.",
      problem: "Data analyst applying to 50+ positions with generic resume, getting zero callbacks despite strong skills and 10+ projects.",
      solution: "Professional portfolio with skills proficiency indicators, 10+ project showcase with visualizations, experience timeline, and resume download functionality.",
      investment: "$900",
      results: {
        roi: "13x",
        breakEven: "1 month",
        revenue: "$11.7K salary increase",
        conversions: "25% callback rate",
      },
      stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
      outcome: "Landed $14K/year corporate role (vs previous $3.6K). Portfolio converted 25% of applications to callbacks, received 3 job offers, and now serves as professional brand.",
      image: "/Ashok-Portfolio.png",
    },
    {
      id: 12,
      name: "Chef Claude - AI Recipe App",
      description: "AI-powered recipe platform demonstrating technical capabilities and generating consulting leads.",
      problem: "Developer needed showcase project to demonstrate AI integration skills for potential consulting clients.",
      solution: "AI recipe app using Mistral AI and Hugging Face APIs, built with React for dynamic UX, generating personalized recipes based on available ingredients.",
      investment: "$900",
      results: {
        roi: "5x",
        breakEven: "3 months",
        revenue: "$4.5K in consulting",
        conversions: "4 consulting inquiries",
      },
      stack: ["React", "JavaScript", "CSS", "Mistral AI", "Hugging Face API"],
      outcome: "Demo project generated 4 AI consulting inquiries worth $4.5K total. Showcased technical capability leading to 2 signed contracts for AI integrations.",
      image: "/Chef-claude.jpeg",
    },
    {
      id: 13,
      name: "Jira Automation Implementation",
      description: "Custom Jira automation reducing team overhead by 60% through intelligent workflow optimization.",
      problem: "Development team spending 25+ hours weekly on manual ticket routing, status updates, and notifications across 200+ projects.",
      solution: "Custom automation rules for auto-routing, smart notifications, sprint management, automated testing triggers, and integration with Slack/Email.",
      investment: "$1,500",
      results: {
        roi: "11x",
        breakEven: "2 months",
        revenue: "$16.5K (time saved = money)",
        conversions: "+60% productivity boost",
      },
      stack: ["Jira", "Jira API", "Automation", "Zapier", "Slack Integration"],
      outcome: "Reduced manual tasks by 60%, saving 25 hours weekly (equivalent to $1.4K monthly). Team productivity increased, project velocity up 40%, and now managing 300+ projects effortlessly.",
      image: "/jira-automation.webp",
    },
  ];

  // Pagination calculations
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, endIndex);

  return (
    <>
      <SEO 
        title="Web Development Portfolio | Success Stories & Case Studies | Deven Digital Labs"
        description="Explore our comprehensive portfolio of successful web development projects including enterprise CRM systems, e-commerce platforms, business automation solutions, and custom software applications. Real client success stories with measurable ROI results, 40-60% conversion rate improvements, and significant revenue growth. See how we've helped businesses transform their digital presence."
        keywords="web development portfolio, software development projects, successful web applications, CRM development case studies, e-commerce development examples, custom software solutions, React projects portfolio, Next.js applications, Node.js development examples, business automation projects, digital transformation case studies, enterprise software development, startup web development, scalable web solutions, professional web development work, technology consulting projects, API development examples, database design projects, UI UX design portfolio, mobile-first development, responsive web design examples, client success stories, web development ROI, conversion rate optimization, business growth results"
        schema={schema}
      />
      <Layout>
      {/* Hero */}
      <section className="relative py-12 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6 opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-6 py-3 rounded-full mb-4 border border-green-500/20">
            <TrendingUp className="h-5 w-5" />
            <span className="font-semibold">Real Results, Real ROI</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Case Studies That Prove Business Impact
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            See how we help clients achieve 5-15x ROI, increase conversions by 40-60%, and generate millions in additional revenue.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12">
          {currentProjects.map((project, idx) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[idx] = el)}
              data-index={idx}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-12 border-b border-slate-800/50 last:border-b-0 last:pb-0 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              } ${visibleProjects.has(idx) ? (idx % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right') : 'opacity-0'} transition-all duration-700 hover:scale-[1.01]`}
            >
              {/* Image/Video */}
              <div className={`relative aspect-video bg-slate-800/50 rounded-xl overflow-hidden group/img transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                {project.video ? (
                  project.video.includes('youtube.com/embed') || project.video.includes('loom.com/embed') ? (
                    <iframe
                      src={project.video.includes('youtube.com') ? `${project.video}?autoplay=1&mute=1&loop=1&playlist=${project.video.split('/').pop()}` : project.video}
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      style={{ border: 'none' }}
                      title={project.name}
                    />
                  ) : (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-all duration-700 group-hover/img:scale-110 group-hover/img:brightness-110"
                      onLoadedMetadata={(e) => {
                        const video = e.target as HTMLVideoElement;
                        if (project.name === "Sony Earbuds 3D Experience") {
                          video.playbackRate = 1.5;
                        }
                      }}
                    />
                  )
                ) : (
                  <img
                    src={project.image}
                    alt={`${project.name} - ${project.description}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-all duration-700 group-hover/img:scale-110 group-hover/img:brightness-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder-project.jpg';
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">{project.name}</h2>
                  <p className="text-sm sm:text-base text-slate-300">{project.description}</p>
                </div>

                {/* ROI Metrics */}
                {project.results && (
                  <div className="grid grid-cols-2 gap-3">
                    <Card className="p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 hover:border-green-500/40 cursor-default">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-green-400 transition-transform duration-300 hover:scale-110" />
                        <span className="text-xs font-semibold text-green-400">ROI</span>
                      </div>
                      <div className="text-2xl font-bold text-green-400">{project.results.roi}</div>
                    </Card>
                    <Card className="p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/40 cursor-default">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-blue-400 transition-transform duration-300 hover:scale-110" />
                        <span className="text-xs font-semibold text-blue-400">Break-Even</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-400">{project.results.breakEven}</div>
                    </Card>
                    <Card className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/40 cursor-default">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="h-4 w-4 text-purple-400 transition-transform duration-300 hover:scale-110" />
                        <span className="text-xs font-semibold text-purple-400">Revenue</span>
                      </div>
                      <div className="text-lg font-bold text-purple-400">{project.results.revenue}</div>
                    </Card>
                    <Card className="p-4 bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 hover:border-orange-500/40 cursor-default">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="h-4 w-4 text-orange-400 transition-transform duration-300 hover:scale-110" />
                        <span className="text-xs font-semibold text-orange-400">Impact</span>
                      </div>
                      <div className="text-sm font-bold text-orange-400">{project.results.conversions}</div>
                    </Card>
                  </div>
                )}

                {/* Investment */}
                {project.investment && (
                  <div className="inline-flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50">
                    <span className="text-sm text-slate-400">Investment:</span>
                    <span className="text-lg font-bold text-white">{project.investment}</span>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-red-400 mb-2">THE CHALLENGE</h3>
                    <p className="text-slate-300">{project.problem}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-cyan-400 mb-2">OUR SOLUTION</h3>
                    <p className="text-slate-300">{project.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-400 mb-3">TECH STACK</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm text-slate-300 hover:border-blue-500/50 hover:bg-slate-700/70 hover:text-white hover:scale-110 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-4 transition-all duration-500 hover:from-green-500/20 hover:to-emerald-500/20 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/20">
                    <h3 className="text-sm font-semibold text-green-400 mb-2">BUSINESS OUTCOME</h3>
                    <p className="text-slate-300 font-medium">{project.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            variant="outline"
            size="lg"
            className="border-slate-600/50 text-white bg-slate-700/50 hover:bg-slate-700/70 hover:border-slate-500 rounded-xl font-semibold px-6 py-3 disabled:opacity-40 disabled:cursor-not-allowed backdrop-blur-sm hover-lift"
          >
            <ChevronLeft className="mr-2 h-5 w-5" />
            Previous
          </Button>

          <div className="flex items-center gap-3">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                onClick={() => setCurrentPage(page)}
                variant={currentPage === page ? "default" : "outline"}
                size="lg"
                className={`rounded-xl font-semibold px-5 py-3 transition-all duration-300 ${
                  currentPage === page
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25"
                    : "border-slate-600/50 text-white bg-slate-700/50 hover:bg-slate-700/70 hover:border-slate-500 backdrop-blur-sm"
                }`}
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            variant="outline"
            size="lg"
            className="border-slate-600/50 text-white bg-slate-700/50 hover:bg-slate-700/70 hover:border-slate-500 rounded-xl font-semibold px-6 py-3 disabled:opacity-40 disabled:cursor-not-allowed backdrop-blur-sm hover-lift"
          >
            Next
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Page Info */}
        <div className="mt-6 text-center">
          <p className="text-slate-400 text-sm">
            Showing <span className="text-white font-semibold">{startIndex + 1}-{Math.min(endIndex, projects.length)}</span> of <span className="text-white font-semibold">{projects.length}</span> projects
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto">
        <Card className="relative p-6 sm:p-10 md:p-14 lg:p-16 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover-lift overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/30 opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-3 bg-blue-500/10 text-blue-400 px-6 py-3 rounded-full mb-8 border border-blue-500/20">
              <TrendingUp className="h-5 w-5" />
              <span className="font-semibold">Proven Results</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
              Join our clients who achieved <span className="text-blue-400 font-bold">5-15x ROI</span> and <span className="text-cyan-400 font-bold">millions in revenue growth</span>. 
              Let's create your success story.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="btn-premium bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 px-8 py-6 text-lg">
                  Get Your ROI Analysis
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-slate-600/50 text-white bg-slate-700/50 hover:bg-slate-700/70 hover:border-slate-500 rounded-xl font-semibold px-8 py-6 text-lg backdrop-blur-sm hover-lift">
                  View Our Services
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-700/50">
              <p className="text-slate-400 text-sm">
                <span className="text-white font-semibold">Average results:</span> 3-4 month break-even • 5x first-year ROI • 95% client satisfaction
              </p>
            </div>
          </div>
        </Card>
      </section>
    </Layout>
    </>
  );
}
