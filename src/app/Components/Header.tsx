import React from "react";

const Header : React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-8 py-4 shadow-sm">
            {/* Logo */}
            <h1 className="text-2xl font-bold">Dev.Folio</h1>
            <nav className="hidden md:flex gap-8 text-lg">
                <a href="#projects" className="hover:text-blue-500">Projects</a>
                <a href="#skills" className="hover:text-blue-500">Skills</a>
                <a href="#contact" className="hover:text-blue-500">Contact</a>
            </nav>
            <div className="flex gap-4">
                <a href="#projects" className="px-5 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full">
                    View Projects
                </a>
                <a href="#contact" className="px-5 py-2 bg-blue-500 text-white hover:bg-blue-400 rounded-full">
                    Get in Touch
                </a>
                
            </div>
        </header>
    )
}

export default Header;