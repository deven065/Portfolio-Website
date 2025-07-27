import React from "react";

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-3 py-2 sm:px-6 sm:py-3">
        {/* ✅ Wrap logo and tagline in a flex container */}
        <div className="flex flex-col justify-center">
            <h1 className="text-lg sm:text-xl font-bold whitespace-nowrap">Dev.Folio</h1>

            {/* ✅ Tagline below the logo, animated like Hero */}
            <span className="text-xs text-gray-500 leading-none hidden sm:block">
            Crafting Digital Experiences
            </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 sm:gap-6 text-sm sm:text-base">
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#skills" className="hover:text-blue-500">Skills</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex gap-2 sm:gap-4">
            <a
            href="#projects"
            className="px-3 py-1 sm:px-4 sm:py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full text-xs sm:text-sm whitespace-nowrap"
            >
            Projects
            </a>
            <a
            href="#contact"
            className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-500 text-white hover:bg-blue-400 rounded-full text-xs sm:text-sm whitespace-nowrap"
            >
            Contact
            </a>
        </div>
        </header>
    );
};

export default Header;