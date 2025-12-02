"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
      
      const isDark = document.documentElement.classList.contains('dark');
      
      if (window.scrollY > 50) {
        headerRef.current.style.backdropFilter = "blur(10px)";
        headerRef.current.style.backgroundColor = isDark ? "rgba(3, 7, 18, 0.9)" : "rgba(255, 255, 255, 0.9)";
        headerRef.current.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
      } else {
        headerRef.current.style.backdropFilter = "blur(0px)";
        headerRef.current.style.backgroundColor = isDark ? "rgba(3, 7, 18, 1)" : "rgba(255, 255, 255, 1)";
        headerRef.current.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full bg-white dark:bg-gray-950 backdrop-blur-md shadow-sm z-50 transition-all duration-300 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between px-6 py-4 lg:px-12 w-full">

        {/* Logo - Left */}
        <Link
          ref={logoRef}
          href="/"
          className="flex items-center gap-3 select-none cursor-pointer hover:opacity-80 transition-all duration-300 flex-shrink-0 group"
        >
          {theme === "dark" ? (
            <Image
              src="/logo-white.png"
              alt="Deven Digital Labs"
              width={40}
              height={40}
              className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
              priority
            />
          ) : (
            <Image
              src="/logo-black.png"
              alt="Deven Digital Labs"
              width={40}
              height={40}
              className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
              priority
            />
          )}

          <span className="text-xl md:text-2xl font-bold tracking-tight">
            <span className="text-blue-600 dark:text-blue-500 transition-all duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-400">Deven</span>
            <span className="text-gray-900 dark:text-white transition-colors duration-300"> Digital Labs</span>
          </span>
        </Link>

        {/* Desktop Nav - Center */}
        <nav ref={navRef} className="hidden md:flex flex-row gap-12 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
          <Link
            href="/projects"
            className={`${isActive("/projects") ? "text-blue-600 dark:text-blue-500" : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500"} transition-colors duration-200`}
          >
            Projects
          </Link>
          <Link
            href="/skills"
            className={`${isActive("/skills") ? "text-blue-600 dark:text-blue-500" : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500"} transition-colors duration-200`}
          >
            Skills
          </Link>
          <Link
            href="/blogs"
            className={`${isActive("/blogs") ? "text-blue-600 dark:text-blue-500" : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500"} transition-colors duration-200`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`${isActive("/contact") ? "text-blue-600 dark:text-blue-500" : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500"} transition-colors duration-200`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Buttons & Dark Mode Toggle - Right */}
        <div ref={ctaRef} className="hidden md:flex gap-4 items-center flex-shrink-0">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>

          <Link
            href="/contact"
            className="px-5 py-2 bg-blue-700 text-white text-sm rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200"
          >
            Hire Me
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
              className="w-full text-center px-4 py-2 border-2 border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="w-full text-center px-4 py-2 bg-blue-700 text-white rounded-full text-sm hover:bg-blue-800 transition"
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
