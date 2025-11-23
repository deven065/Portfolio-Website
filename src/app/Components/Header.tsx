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
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    // Animate logo
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, delay: 0.3, ease: "back.out(1.7)" }
      );
    }

    // Animate nav items
    if (navRef.current) {
      gsap.fromTo(
        navRef.current.children,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, delay: 0.4, ease: "power2.out" }
      );
    }

    // Animate CTA buttons
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current.children,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.6, delay: 0.5, ease: "back.out(1.7)" }
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
    <header ref={headerRef} className="fixed top-0 left-0 w-full bg-white dark-mode-header shadow-sm z-50 transition-all duration-300">
      <div className="flex items-center justify-between px-4 py-3 lg:px-12">

        {/* Logo */}
        <Link
          ref={logoRef}
          href="/"
          className="text-xl font-extrabold tracking-wide select-none cursor-pointer hover:scale-110 transition-transform duration-300"
        >
          Dev<span className="text-black">.</span>Folio
        </Link>

        {/* Desktop Nav */}
        <nav ref={navRef} className="hidden md:flex flex-row gap-8 text-sm">
          <Link
            href="/projects"
            className={`${isActive("/projects") ? "text-blue-500 font-semibold" : "hover:text-blue-500"}`}
          >
            Projects
          </Link>
          <Link
            href="/skills"
            className={`${isActive("/skills") ? "text-blue-500 font-semibold" : "hover:text-blue-500"}`}
          >
            Skills
          </Link>
          <Link
            href="/blogs"
            className={`${isActive("/blogs") ? "text-blue-500 font-semibold" : "hover:text-blue-500"}`}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className={`${isActive("/contact") ? "text-blue-500 font-semibold" : "hover:text-blue-500"}`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Buttons & Dark Mode Toggle */}
        <div ref={ctaRef} className="hidden md:flex gap-4 items-center">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark-mode-hover transition-all duration-300 group"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-90 transition-transform duration-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
            )}
          </button>

          <Link
            href="/projects"
            className="px-5 py-2 border border-blue-500 text-blue-500 rounded-full text-sm hover:bg-blue-50 dark-mode-hover transition"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition"
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
