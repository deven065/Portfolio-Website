"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // icons

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (route: string) => pathname === route;

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-3 py-2 sm:px-6 sm:py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-extrabold tracking-wide select-none cursor-pointer"
        >
          Dev<span className="text-black">.</span>Folio
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex flex-row gap-6 text-sm sm:text-base">
          <Link
            href="/projects"
            className={`${
              isActive("/projects")
                ? "text-blue-500 font-semibold"
                : "hover:text-blue-500"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/skills"
            className={`${
              isActive("/skills")
                ? "text-blue-500 font-semibold"
                : "hover:text-blue-500"
            }`}
          >
            Skills
          </Link>
          <Link
            href="/contact"
            className={`${
              isActive("/contact")
                ? "text-blue-500 font-semibold"
                : "hover:text-blue-500"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA (Desktop only) */}
        <div className="hidden sm:flex gap-4">
          <Link
            href="/projects"
            className={`px-4 py-2 border rounded-full text-sm transition ${
              isActive("/projects")
                ? "bg-blue-500 text-white border-blue-500"
                : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`px-4 py-2 rounded-full text-sm transition ${
              isActive("/contact")
                ? "bg-blue-400 text-white"
                : "bg-blue-500 text-white hover:bg-blue-400"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button onClick={toggleMobileMenu} className="sm:hidden">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2">
          <Link
            href="/projects"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-sm py-1 ${
              isActive("/projects")
                ? "text-blue-500 font-semibold"
                : "hover:text-blue-500"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/skills"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-sm py-1 ${
              isActive("/skills")
                ? "text-blue-500 font-semibold"
                : "hover:text-blue-500"
            }`}
          >
            Skills
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-sm py-1 ${
              isActive("/contact")
                ? "text-blue-500 font-semibold"
                : "hover:text-blue-500"
            }`}
          >
            Contact
          </Link>

          {/* CTA Buttons (Mobile) */}
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full text-center px-4 py-2 border rounded-full text-sm transition ${
                isActive("/projects")
                  ? "bg-blue-500 text-white border-blue-500"
                  : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full text-center px-4 py-2 rounded-full text-sm transition ${
                isActive("/contact")
                  ? "bg-blue-400 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-400"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
