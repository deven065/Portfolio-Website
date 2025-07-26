import React from "react";

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-4 sm:px-8 py-2 sm:py-4">
        {/* Logo */}
            <h1 className="text-lg sm:text-2xl font-bold">Dev.Folio</h1>

            {/* Navigation - hidden on small screens */}
            <nav className="hidden md:flex gap-6 text-sm sm:text-base">
                <a href="#projects" className="hover:text-blue-500">Projects</a>
                <a href="#skills" className="hover:text-blue-500">Skills</a>
                <a href="#contact" className="hover:text-blue-500">Contact</a>
            </nav>

            {/* Buttons */}
            <div className="flex gap-2 sm:gap-4">
                <a
                href="#projects"
                className="px-3 py-1 sm:px-5 sm:py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full text-xs sm:text-sm"
                >
                View Projects
                </a>
                <a
                href="#contact"
                className="px-3 py-1 sm:px-5 sm:py-2 bg-blue-500 text-white hover:bg-blue-400 rounded-full text-xs sm:text-sm"
                >
                Get in Touch
                </a>
            </div>
        </header>
    );
};

export default Header;
