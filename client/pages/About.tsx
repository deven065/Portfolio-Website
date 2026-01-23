import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { ArrowRight, Zap, Target, Shield, CheckCircle2, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [visibleMilestones, setVisibleMilestones] = useState<Set<number>>(new Set());
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleMilestones((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    milestoneRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Deven Digital Labs",
    "description": "Learn about Deven Digital Labs, our mission, values, and the technology consulting services we provide to help businesses grow."
  };
  return (
    <>
      <SEO
        title="About Deven Digital Labs | Professional Web Development Team | Our Story"
        description="Meet the professional web development team behind Deven Digital Labs. Founded by Deven Rikame, we're a dedicated team of full-stack developers, DevOps engineers, data analysts, and e-commerce experts. Learn about our mission to help businesses grow through scalable, reliable digital solutions, our core values, and our proven approach to software development."
        keywords="about web development company, professional development team, Deven Rikame founder, full-stack development team, DevOps engineers, data analysts, e-commerce experts, technology consulting agency, software development company, web development agency, our mission values, company story, business-first approach, scalable solutions, reliable partnerships, digital transformation experts, technology consulting firm, custom software development team"
        schema={schema}
      />
      <Layout>
        {/* Hero */}
        <section className="relative pt-8 pb-12 sm:pt-10 sm:pb-16 md:pt-12 md:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              About Deven Digital Labs
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
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
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">Mission & Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {/* Mission */}
            <div className="md:col-span-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                To empower businesses with scalable, reliable technology solutions that drive growth, improve efficiency, and create lasting competitive advantage. We partner with founders and companies who are serious about building long-term digital success.
              </p>
            </div>

            {/* Values */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 hover:bg-slate-800/80 transition-all duration-300">
              <Target className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Business-First</h3>
              <p className="text-sm sm:text-base text-slate-300">
                We measure success by business outcomes, not lines of code. Every decision is made with your growth and objectives in mind.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 hover:bg-slate-800/80 transition-all duration-300">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Scalable by Design</h3>
              <p className="text-sm sm:text-base text-slate-300">
                We build systems that grow with you. From day one, we architect for scalability, reliability, and long-term maintainability.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 hover:bg-slate-800/80 transition-all duration-300">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-400 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Reliable Partner</h3>
              <p className="text-sm sm:text-base text-slate-300">
                Trust and transparency are foundational. We communicate clearly, deliver consistently, and stand behind our work.
              </p>
            </div>
          </div>
        </section>

        {/* Company Timeline/Milestones */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 max-w-5xl mx-auto relative overflow-hidden" style={{ perspective: '2000px' }}>
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-14 md:mb-16 text-center relative">
            <span className="relative inline-block">
              Our Journey
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </span>
          </h2>
          
          <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
            {/* Enhanced Timeline line with glow */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 shadow-lg shadow-blue-500/50"></div>
            
            <div className="space-y-16">
              {[
                {
                  year: "2019",
                  title: "Foundation",
                  description: "Started with a vision to help businesses leverage technology strategically. First client projects in fintech and e-commerce.",
                  icon: <Zap className="w-5 h-5" />,
                  color: "blue",
                  gradient: "from-blue-500 to-blue-600",
                },
                {
                  year: "2021",
                  title: "Rapid Growth",
                  description: "Expanded team and service offerings. Delivered 30+ successful projects across multiple industries.",
                  icon: <TrendingUp className="w-5 h-5" />,
                  color: "cyan",
                  gradient: "from-cyan-500 to-cyan-600",
                },
                {
                  year: "2023",
                  title: "Scale & Excellence",
                  description: "Achieved 50+ client milestone. Established as trusted partner for scalable digital solutions.",
                  icon: <Target className="w-5 h-5" />,
                  color: "indigo",
                  gradient: "from-indigo-500 to-indigo-600",
                },
                {
                  year: "2026",
                  title: "Innovation Forward",
                  description: "Continuing to push boundaries with cutting-edge technology and exceptional client partnerships.",
                  icon: <Shield className="w-5 h-5" />,
                  color: "purple",
                  gradient: "from-purple-500 to-purple-600",
                },
              ].map((milestone, idx) => (
                <div 
                  key={idx}
                  ref={(el) => (milestoneRefs.current[idx] = el)}
                  data-index={idx}
                  className={`relative flex flex-col md:flex-row gap-8 items-center group ${
                    visibleMilestones.has(idx) 
                      ? (idx % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right')
                      : 'opacity-0'
                  }`}
                  style={{ 
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Enhanced Timeline dot with pulse and glow */}
                  <div className={`absolute left-8 md:left-1/2 -ml-4 z-20`}>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${milestone.gradient} border-4 border-slate-900 shadow-lg shadow-${milestone.color}-500/50 group-hover:scale-125 transition-transform duration-300 relative`}>
                      {/* Pulsing ring */}
                      <div className={`absolute inset-0 rounded-full bg-${milestone.color}-500 animate-ping opacity-20`}></div>
                    </div>
                  </div>
                  
                  {/* Content with enhanced animations */}
                  <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:text-right md:pr-20' : 'md:ml-auto md:pl-20'}`}>
                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 ml-20 md:ml-0 group-hover:bg-slate-800/70 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/20 hover-lift overflow-hidden">
                      {/* Animated gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-700"></div>
                      
                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className={`flex items-center gap-4 mb-4 ${idx % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                          <div className={`p-3 bg-gradient-to-br ${milestone.gradient} rounded-xl text-white shadow-lg shadow-${milestone.color}-500/30 group-hover:shadow-${milestone.color}-500/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                            {milestone.icon}
                          </div>
                          <span className={`text-3xl font-bold bg-gradient-to-br ${milestone.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                          {milestone.title}
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                      
                      {/* Corner accent */}
                      <div className={`absolute ${idx % 2 === 0 ? 'top-0 right-0' : 'top-0 left-0'} w-32 h-32 bg-gradient-to-br ${milestone.gradient} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity duration-500`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work Process */}
        <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto bg-slate-800/30 rounded-3xl">
          <h2 className="text-4xl font-bold mb-4 text-center">How We Work</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto text-center mb-12">
            Our proven process ensures transparency, quality, and success at every stage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Deep dive into your business goals, challenges, and technical requirements.",
                items: ["Business analysis", "Technical assessment", "Scope definition"],
              },
              {
                step: "02",
                title: "Strategy & Design",
                description: "Create comprehensive architecture and design systems for your solution.",
                items: ["System architecture", "UI/UX design", "Technical planning"],
              },
              {
                step: "03",
                title: "Development",
                description: "Build with clean code, modern practices, and rigorous quality standards.",
                items: ["Agile sprints", "Code reviews", "Continuous testing"],
              },
              {
                step: "04",
                title: "Testing & QA",
                description: "Comprehensive testing to ensure reliability, performance, and security.",
                items: ["Automated testing", "Performance optimization", "Security audits"],
              },
              {
                step: "05",
                title: "Deployment",
                description: "Launch with confidence using best practices for deployment and monitoring.",
                items: ["CI/CD pipeline", "Cloud deployment", "Monitoring setup"],
              },
              {
                step: "06",
                title: "Support & Growth",
                description: "Ongoing maintenance, updates, and strategic guidance for long-term success.",
                items: ["24/7 monitoring", "Regular updates", "Strategic consulting"],
              },
            ].map((process, idx) => (
              <div
                key={idx}
                className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/80 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl font-bold text-blue-500/20 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300 mb-4 inline-block group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">{process.title}</h3>
                  <p className="text-slate-400 mb-4">{process.description}</p>
                  <ul className="space-y-2">
                    {process.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Meet Our Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 - Deven Rikame */}
            <div className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/80 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-500/50">
                <img
                  src="/deven-photo.jpg"
                  alt="Deven Rikame - Web/Software Developer"
                  className="w-full h-full object-cover scale-110"
                  loading="lazy"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Deven Rikame</h3>
              <p className="text-blue-400 text-center text-sm font-semibold mb-3">Web/Software Developer</p>
              <p className="text-slate-300 text-sm text-center leading-relaxed">
                Specializing in full-stack development and scalable web solutions.
              </p>
            </div>

            {/* Team Member 2 - Dipen Rikame */}
            <div className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/80 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyan-500/50">
                <img
                  src="/Dipen.png"
                  alt="Dipen Rikame - DevOps Engineer"
                  className="w-full h-full object-cover scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Dipen Rikame</h3>
              <p className="text-cyan-400 text-center text-sm font-semibold mb-3">DevOps Engineer</p>
              <p className="text-slate-300 text-sm text-center leading-relaxed">
                Expert in cloud infrastructure, CI/CD, and deployment automation.
              </p>
            </div>

            {/* Team Member 3 - Ashok Chaudhary */}
            <div className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/80 hover:border-indigo-500/50 transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-indigo-500/50">
                <img
                  src="/Ashok-Portfolio.png"
                  alt="Ashok Chaudhary - Data Analyst"
                  className="w-full h-full object-cover scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Ashok Chaudhary</h3>
              <p className="text-indigo-400 text-center text-sm font-semibold mb-3">Data Analyst</p>
              <p className="text-slate-300 text-sm text-center leading-relaxed">
                Transforming data into actionable insights and strategic decisions.
              </p>
            </div>

            {/* Team Member 4 - Soham More */}
            <div className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/80 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-purple-500/50 group-hover:border-purple-400/70 transition-all duration-300">
                <img
                  src="/Soham.jpeg"
                  alt="Soham More - Data Analyst"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  style={{ objectPosition: 'center 30%', objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Soham More</h3>
              <p className="text-purple-400 text-center text-sm font-semibold mb-3">Data Analyst</p>
              <p className="text-slate-300 text-sm text-center leading-relaxed">
                Delivering data-driven solutions and comprehensive analytics.
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
