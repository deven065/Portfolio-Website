import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X, Mail, ArrowRight, MessageCircle, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import PromoFlyer from "@/components/PromoFlyer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState("");
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

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    }
  };

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex flex-col">
      {/* Promotional Flyer */}
      <PromoFlyer />

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? "glass-strong border-b border-slate-800/50"
          : "bg-transparent"
          }`}
        role="banner"
      >
        <nav className="flex items-center justify-between px-6 sm:px-8 lg:px-12 py-5" role="navigation" aria-label="Main navigation">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Deven Digital Labs Home">
            <img
              src="/logo-white.png"
              alt="Deven Digital Labs - Full-Stack Web Development & Technology Consulting"
              className="h-8 w-8 transition-transform duration-300 group-hover:scale-105"
              width="32"
              height="32"
              loading="eager"
              decoding="async"
            />
            <span className="text-white font-bold text-lg tracking-tight group-hover:gradient-text transition-all duration-300">
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
                  ? "text-blue-400"
                  : "text-slate-300 hover:text-white"
                  }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact">
              <Button className="btn-premium bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-xl px-6 py-2.5 shadow-lg shadow-blue-500/25">
                Hire Us — Free Audit
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 glass rounded-lg text-slate-300 hover:text-white transition-all hover-scale"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-slate-800/50 px-6 py-4 space-y-4 animate-in fade-in duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block text-sm font-medium transition-colors duration-300 ${isActive(link.href)
                  ? "text-blue-400"
                  : "text-slate-300 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="block pt-2">
              <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg">
                Hire Us — Free Audit
              </Button>
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow" role="main">{children}</main>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-sm mt-20" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          {/* Newsletter Section */}
          <div className="mb-12 pb-12 border-b border-slate-800/50">
            <div className="max-w-2xl mx-auto text-center">
              <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-slate-400 mb-6">
                Get the latest insights on web development, technology trends, and industry best practices.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-slate-800/50 border-slate-700 focus:border-blue-500 text-white"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-10 md:mb-12">
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logo-white.png"
                  alt="Deven Digital Labs Logo"
                  className="h-8 w-8"
                  width="32"
                  height="32"
                  loading="lazy"
                  decoding="async"
                />
                <span className="text-white font-semibold">Deven Digital Labs</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Helping businesses grow through scalable, reliable technology solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/services/n8n-automation"
                    className="text-blue-400 font-medium hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    n8n Automation <Zap size={12} className="fill-blue-400" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/real-estate-web-development"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Real Estate Websites
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/interior-design-web-development"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Interior Design Portfolios
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/dental-clinic-web-development"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Medical/Dental Sites
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-slate-400 hover:text-white transition-colors outline-none"
                  >
                    SaaS Development
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:hello@devendigitallabs.com"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    hello@devendigitallabs.com
                  </a>
                </li>
                <li className="text-slate-400 leading-relaxed">
                  Mon–Fri · 10am–7pm IST<br />
                  <span className="text-slate-500 text-xs">Happy to work across time zones — async-friendly</span>
                </li>
                <li className="text-slate-400 text-xs leading-relaxed">
                  <span className="text-slate-500">Payments via</span><br />
                  Stripe · PayPal · Wise · Bank Transfer<br />
                  <span className="text-slate-500">USD · GBP · EUR · INR</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>&copy; 2026 Deven Digital Labs. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">
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
        <span className="absolute right-full mr-4 bg-slate-800 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-700">
          Chat with us
          {/* Tooltip triangle */}
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-slate-800"></span>
        </span>
      </a>
    </div>
  );
}
