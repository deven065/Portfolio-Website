"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const isActive = (route: string) => pathname === route;

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  useGSAP(() => {
    if (!headerRef.current) return;

    // Animate header on load
    gsap.fromTo(
      headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );

    // Animate logo
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, delay: 0.2, ease: "power2.out" }
      );
    }

    // Animate nav items
    if (navRef.current) {
      gsap.fromTo(
        navRef.current.children,
        { y: -15, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.4, delay: 0.25, ease: "power2.out" }
      );
    }

    // Animate CTA buttons
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current.children,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.05, duration: 0.4, delay: 0.3, ease: "power2.out" }
      );
    }
  }, { scope: headerRef });

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      
      if (window.scrollY > 50) {
        headerRef.current.style.backdropFilter = "blur(10px)";
        headerRef.current.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
        headerRef.current.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
      } else {
        headerRef.current.style.backdropFilter = "blur(0px)";
        headerRef.current.style.backgroundColor = "rgba(255, 255, 255, 1)";
        headerRef.current.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full bg-white dark-mode-header shadow-lg z-50 transition-all duration-300 glass border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="flex items-center justify-between px-6 py-5 lg:px-16">

        {/* Logo */}
        <Link
          ref={logoRef}
          href="/"
          className="text-3xl md:text-4xl font-black tracking-tight select-none cursor-pointer hover:scale-105 transition-all duration-300 gradient-text drop-shadow-lg"
        >
          Dev<span className="text-black dark:text-white">.</span>Folio
        </Link>

        {/* Desktop Nav */}
        <nav ref={navRef} className="hidden md:flex flex-row gap-10 text-base font-medium">
          <Link
            href="/projects"
            className={`${isActive("/projects") ? "text-blue-500 font-bold scale-110" : "text-gray-700 dark:text-gray-200 hover:text-blue-500 hover:scale-105"} transition-all duration-300`}
          >
            Projects
          </Link>
          <Link
            href="/skills"
            className={`${isActive("/skills") ? "text-blue-500 font-bold scale-110" : "text-gray-700 dark:text-gray-200 hover:text-blue-500 hover:scale-105"} transition-all duration-300`}
          >
            Skills
          </Link>
          <Link
            href="/blogs"
            className={`${isActive("/blogs") ? "text-blue-500 font-bold scale-110" : "text-gray-700 dark:text-gray-200 hover:text-blue-500 hover:scale-105"} transition-all duration-300`}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className={`${isActive("/contact") ? "text-blue-500 font-bold scale-110" : "text-gray-700 dark:text-gray-200 hover:text-blue-500 hover:scale-105"} transition-all duration-300`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Buttons & Dark Mode Toggle */}
        <div ref={ctaRef} className="hidden md:flex gap-5 items-center">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full hover:bg-gray-100 dark-mode-hover transition-all duration-300 group shadow-md hover:shadow-lg"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun className="w-6 h-6 text-yellow-500 group-hover:rotate-90 transition-transform duration-300" />
            ) : (
              <Moon className="w-6 h-6 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
            )}
          </button>

          <Link
            href="/projects"
            className="px-7 py-3 border-2 border-blue-500 text-blue-500 rounded-full text-base font-semibold hover:bg-blue-50 dark-mode-hover hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-base font-semibold hover:from-blue-700 hover:to-indigo-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu & Dark Mode Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark-mode-hover transition-all duration-300"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link
            href="/projects"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-sm py-1 ${isActive("/projects") ? "text-blue-500 font-semibold" : "hover:text-blue-500"}`}
          >
            Projects
          </Link>
          <Link
            href="/skills"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-sm py-1 ${isActive("/skills") ? "text-blue-500 font-semibold" : "hover:text-blue-500"}`}
          >
            Skills
          </Link>
          <Link
            href="/blogs"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-sm py-1 ${isActive("/blogs") ? "text-blue-500 font-semibold" : "hover:text-blue-500"}`}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-sm py-1 ${isActive("/contact") ? "text-blue-500 font-semibold" : "hover:text-blue-500"}`}
          >
            Contact
          </Link>

          {/* Mobile Buttons */}
          <div className="pt-3 flex flex-col gap-2">
            <Link
              href="/projects"
              className="w-full text-center px-4 py-2 border border-blue-500 text-blue-500 rounded-full text-sm hover:bg-blue-50 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="w-full text-center px-4 py-2 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
