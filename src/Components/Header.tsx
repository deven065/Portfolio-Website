"use client";

import React, { useState } from "react";

const Header : React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-8 py-4 shadow-sm">
            {/* Logo */}
            <h1 className="text-2xl font-bold">Dev.Folio</h1>
            <nav className="hidden md:flex gap-8 text-lg">
                <a href="#projects" className="hover:text-blue-500 transition-colors duration-200">Projects</a>
                <a href="#skills" className="hover:text-blue-500 transition-colors duration-200">Skills</a>
                <a href="#contact" className="hover:text-blue-500 transition-colors duration-200">Contact</a>
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-4">
                <a href="#projects" className="px-5 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full transition-all duration-200">
                    View Projects
                </a>
                <a href="#contact" className="px-5 py-2 bg-blue-500 text-white hover:bg-blue-400 rounded-full transition-all duration-200">
                    Get in Touch
                </a>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
            >
                <div className="space-y-1">
                    <div className={`w-6 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-black transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                </div>
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
                    <nav className="flex flex-col p-4 space-y-4">
                        <a
                            href="#projects"
                            className="hover:text-blue-500 transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Projects
                        </a>
                        <a
                            href="#skills"
                            className="hover:text-blue-500 transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Skills
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-blue-500 transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </a>
                        <div className="flex flex-col gap-2 pt-2">
                            <a
                                href="#projects"
                                className="px-5 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full transition-all duration-200 text-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="px-5 py-2 bg-blue-500 text-white hover:bg-blue-400 rounded-full transition-all duration-200 text-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Get in Touch
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header;
