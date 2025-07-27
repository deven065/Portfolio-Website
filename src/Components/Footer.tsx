"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCode, 
  faHeart, 
  faExternalLinkAlt,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Backend Development",
    "Database Design",
    "API Integration"
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/in/devenrikame" },
    { name: "GitHub", href: "https://github.com/devenrikame" },
    { name: "Twitter", href: "https://twitter.com/devenrikame" },
    { name: "Email", href: "mailto:hello@devenrikame.com" }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Dev.Folio</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Crafting digital experiences with passion. Full-stack developer dedicated to creating 
              innovative and user-friendly web applications.
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              <span>Made with</span>
              <FontAwesomeIcon icon={faHeart} className="mx-2 text-red-500" />
              <span>by Deven</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-blue-400 w-4" />
                <a href="mailto:hello@devenrikame.com" className="hover:text-blue-400 transition-colors">
                  hello@devenrikame.com
                </a>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <FontAwesomeIcon icon={faPhone} className="mr-3 text-blue-400 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-blue-400 w-4" />
                <span>Mumbai, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-white">Follow Me</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-2 rounded-full text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-200 text-sm"
                    aria-label={social.name}
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-8">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-bold mb-2">Stay Updated</h4>
            <p className="text-gray-300 mb-6">
              Subscribe to get notified about my latest projects and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <span>© {currentYear} Dev.Folio. All rights reserved.</span>
              <span className="hidden sm:block">•</span>
              <span>Built with Next.js & Tailwind CSS</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
