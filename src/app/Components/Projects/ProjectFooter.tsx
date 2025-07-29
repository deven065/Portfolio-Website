"use client"
import React from "react";
import Link from "next/link"

const ProjectFooter: React.FC = () => {
    return (
        <div className="bg-[#0f172a] py-20 flex flex-col items-center text-center px-4">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                Like what you see?
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mb-6">
                Let's work together to bring your ideas to life
            </p>
            <Link href= "/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition duration-300"
            >
                Get in Touch
            </Link>
        </div>
    )
}

export default ProjectFooter;