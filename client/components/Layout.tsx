import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-white text-[#0F172A] flex flex-col">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? "glass-strong border-b border-[#E2E8F0]"
          : "bg-transparent"
          }`}
        role="banner"
      >
        <nav className="flex items-center justify-between px-6 sm:px-8 lg:px-12 py-5" role="navigation" aria-label="Main navigation">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Deven Digital Labs Home">
            <img
              src="/logo-black.png"
              alt="Deven Digital Labs - Full-Stack Web Development & Technology Consulting"
              className="h-8 w-8 transition-transform duration-300 group-hover:scale-105 dark:brightness-0 dark:invert"
              width="32"
              height="32"
              loading="eager"
              decoding="async"
            />
            <span className="text-[#0F172A] font-bold text-lg tracking-tight group-hover:text-[#2563EB] transition-all duration-300">
              Deven Digital Labs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-semibold transition-all duration-300 relative group ${isActive(link.href)
                  ? "text-[#2563EB]"
                  : "text-[#64748B] hover:text-[#0F172A]"
                  }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#2563EB] transition-all duration-300 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link to="/contact">
              <Button className="btn-premium bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-semibold rounded-xl px-6 py-2.5 shadow-md shadow-blue-500/10">
                Start a Project
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <button
              className="p-2 glass rounded-lg text-[#64748B] hover:text-[#0F172A] transition-all hover-scale"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-[#E2E8F0] px-6 py-4 space-y-4 animate-in fade-in duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block text-sm font-medium transition-colors duration-300 ${isActive(link.href)
                  ? "text-[#2563EB]"
                  : "text-[#64748B] hover:text-[#0F172A]"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="block pt-2">
              <Button className="w-full bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-semibold rounded-lg">
                Start a Project
              </Button>
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow" role="main">{children}</main>

      {/* Footer */}
      <footer className="border-t border-[#E2E8F0] bg-[#F8FAFC] mt-20" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="mb-14 flex flex-col justify-between gap-8 border-b border-[#E2E8F0] pb-12 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">Deven Digital Labs</p>
              <h2 className="text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl">
                Websites and applications, built professionally.
              </h2>
            </div>
            <Link to="/contact">
              <Button className="group rounded-xl bg-[#2563EB] px-6 font-semibold text-white hover:bg-[#2563EB]/90">
                Discuss a Project
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-10 md:mb-12">
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logo-black.png"
                  alt="Deven Digital Labs Logo"
                  className="h-8 w-8 dark:brightness-0 dark:invert"
                  width="32"
                  height="32"
                  loading="lazy"
                  decoding="async"
                />
                <span className="text-[#0F172A] font-semibold">Deven Digital Labs</span>
              </div>
              <p className="text-[#64748B] text-sm leading-relaxed">
                A Mumbai-based studio designing and developing websites, web applications, SaaS products, and mobile applications.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-[#0F172A] font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="text-[#64748B] hover:text-[#0F172A] transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="text-[#64748B] hover:text-[#0F172A] transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-[#64748B] hover:text-[#0F172A] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-[#0F172A] font-semibold mb-4">Services</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/services"
                    className="text-[#64748B] hover:text-[#0F172A] transition-colors"
                  >
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-[#64748B] hover:text-[#0F172A] transition-colors"
                  >
                    Web Applications
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-[#64748B] hover:text-[#0F172A] transition-colors"
                  >
                    Mobile Applications
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-[#64748B] hover:text-[#0F172A] transition-colors"
                  >
                    SaaS &amp; Internal Tools
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Location */}
            <div>
              <h3 className="text-[#0F172A] font-semibold mb-4">Location & Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="text-[#64748B] leading-relaxed mb-2">
                  <strong className="text-[#0F172A]">Deven Digital Labs</strong><br />
                  Mumbai, Maharashtra<br />
                  India
                </li>
                <li>
                  <a
                    href="mailto:hello@devendigitallabs.com"
                    className="text-[#64748B] hover:text-[#0F172A] transition-colors"
                  >
                    hello@devendigitallabs.com
                  </a>
                </li>
                <li className="text-[#64748B] leading-relaxed">
                  Mon–Fri · 10am–7pm IST<br />
                  <span className="text-[#64748B]/70 text-xs">Happy to work across time zones — async-friendly</span>
                </li>
                <li className="text-[#64748B] text-xs leading-relaxed">
                  <span className="text-[#64748B]/70">Payments via</span><br />
                  Stripe · PayPal · Wise · Bank Transfer<br />
                  <span className="text-[#64748B]/70">USD · GBP · EUR · INR</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#E2E8F0] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#64748B]">
            <p>&copy; 2026 Deven Digital Labs. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-[#0F172A] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-[#0F172A] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Widget */}
      <a
        href="https://wa.me/919833703389?text=Hi%2C%20I%27m%20interested%20in%20your%20development%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:bg-[#20BA5A] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />

        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-[#0F172A] text-sm font-medium py-2 px-4 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-[#E2E8F0]">
          Chat with us
          {/* Tooltip triangle */}
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-white"></span>
        </span>
      </a>
    </div>
  );
}
