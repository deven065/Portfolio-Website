"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname(); // Detect current route

  // Function to check if link is active
  const isActive = (route: string) => pathname === route;

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-3 py-2 sm:px-6 sm:py-3">
      {/* Logo */}
      <div className="flex flex-col justify-center">
        <h1 className="text-lg sm:text-xl font-bold whitespace-nowrap">Dev.Folio</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm sm:text-base">
        <Link
          href="/projects"
          className={`${
            isActive("/projects") ? "text-blue-500 font-semibold" : "hover:text-blue-500"
          }`}
        >
          Projects
        </Link>
        <Link
          href="/skills"
          className={`${
            isActive("/skills") ? "text-blue-500 font-semibold" : "hover:text-blue-500"
          }`}
        >
          Skills
        </Link>
        <Link
          href="/contact"
          className={`${
            isActive("/contact") ? "text-blue-500 font-semibold" : "hover:text-blue-500"
          }`}
        >
          Contact
        </Link>
      </nav>

      {/* CTA Buttons */}
      <div className="flex gap-2 sm:gap-4">
        <Link
          href="/projects"
          className={`px-3 py-1 sm:px-4 sm:py-2 border rounded-full text-xs sm:text-sm whitespace-nowrap transition ${
            isActive("/projects")
              ? "bg-blue-500 text-white border-blue-500"
              : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
          }`}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap transition ${
            isActive("/contact")
              ? "bg-blue-400 text-white"
              : "bg-blue-500 text-white hover:bg-blue-400"
          }`}
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
