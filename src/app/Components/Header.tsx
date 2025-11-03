"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isActive = (route: string) => pathname === route;

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark-mode-header shadow-sm z-50 transition-all duration-300">
      <div className="flex items-center justify-between px-4 py-3 lg:px-12">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-extrabold tracking-wide select-none cursor-pointer"
        >
          Dev<span className="text-black">.</span>Folio
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-row gap-8 text-sm">
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
        <div className="hidden md:flex gap-4 items-center">
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
