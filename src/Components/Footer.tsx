"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faHeart,
  faExternalLinkAlt,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faArrowUp,
  faRocket,
  faStar,
  faLightbulb
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", href: "/", icon: faLightbulb },
    { name: "Projects", href: "/projects", icon: faCode },
    { name: "Skills", href: "/skills", icon: faRocket },
    { name: "Contact", href: "/contact", icon: faEnvelope }
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
    <footer className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>

      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-blue-300 opacity-60 animate-pulse transition-all duration-1000 ${
              showStars ? 'scale-100' : 'scale-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            <FontAwesomeIcon icon={faStar} className="text-xs" />
          </div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setShowStars(true)}
        onMouseLeave={() => setShowStars(false)}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:shadow-blue-500/25 hover:scale-110 group z-10"
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon icon={faArrowUp} className="group-hover:animate-bounce" />
      </button>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8 z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 group">
            <div className="relative">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300">
                Dev.Folio
              </h3>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed hover:text-white transition-colors duration-300">
              Crafting digital experiences with passion. Full-stack developer dedicated to creating
              innovative and user-friendly web applications.
            </p>
            <div className="flex items-center text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300">
              <FontAwesomeIcon icon={faCode} className="mr-2 animate-pulse" />
              <span>Made with</span>
              <FontAwesomeIcon icon={faHeart} className="mx-2 text-red-500 animate-pulse" />
              <span>by Deven</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group hover:scale-105"
                  >
                    <FontAwesomeIcon
                      icon={link.icon}
                      className="mr-3 text-blue-400 group-hover:text-purple-400 transition-colors duration-300 group-hover:rotate-12"
                    />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white relative">
              Services
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-gray-300 text-sm hover:text-white transition-all duration-300 hover:translate-x-2 cursor-default group flex items-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white relative">
              Get in Touch
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300 text-sm hover:text-white transition-all duration-300 group hover:scale-105">
                <div className="mr-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white text-xs" />
                </div>
                <a href="mailto:hello@devenrikame.com" className="hover:text-blue-400 transition-colors">
                  hello@devenrikame.com
                </a>
              </div>
              <div className="flex items-center text-gray-300 text-sm hover:text-white transition-all duration-300 group hover:scale-105">
                <div className="mr-3 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <FontAwesomeIcon icon={faPhone} className="text-white text-xs" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm hover:text-white transition-all duration-300 group hover:scale-105">
                <div className="mr-3 w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-xs" />
                </div>
                <span>Mumbai, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h5 className="text-sm font-semibold mb-4 text-white">Follow Me</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                    aria-label={social.name}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 transform">
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="relative group mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
          <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
            <div className="text-center max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                🚀 Stay Updated
              </h4>
              <p className="text-gray-300 mb-6 hover:text-white transition-colors duration-300">
                Subscribe to get notified about my latest projects and insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-6 py-4 rounded-full bg-gray-700/50 backdrop-blur text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 hover:bg-gray-600/50"
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 whitespace-nowrap hover:scale-105 transform shadow-lg hover:shadow-blue-500/25">
                  ✨ Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300">
              <span className="flex items-center">
                © {currentYear} Dev.Folio. All rights reserved.
                <FontAwesomeIcon icon={faHeart} className="mx-2 text-red-500 animate-pulse" />
              </span>
              <span className="hidden sm:block text-gray-600">•</span>
              <span className="flex items-center">
                Built with Next.js & Tailwind CSS
                <FontAwesomeIcon icon={faRocket} className="ml-2 text-blue-400" />
              </span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 transform">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110 transform">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
