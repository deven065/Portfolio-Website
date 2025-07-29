"use client";
import React from 'react';

const SkillsHero: React.FC = () => {
    return (
        <div>
            <section className='bg-white py-20 text-center px-4'>
                <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                    My <span className='text-blue-600'>Skills</span>
                </h2>
                <p className='text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8'>
                    A comprehensive overview of my technical skills and expertise in modern web development, from
                    frontend frameworks to cloud technologies.
                </p>
                <div className='flex flex-wrap justify-center gap-4'>
                    <span className='bg-gray-100 text-gray-700 px-5 py-2 rounded-full text-sm md:text-base font-medium'>
                        5+ Years Experience
                    </span>
                    <span className='bg-gray-100 text-gray-700 px-5 py-2 rounded-full text-sm md:text-base font-medium'>
                        Full-Stack Developer
                    </span>
                    <span className='bg-gray-100 text-gray-700 px-5 py-2 rounded-full text-sm md:text-base font-medium'>
                        50+ Technologies
                    </span>
                </div>
            </section>
        </div>
    )
};

export default SkillsHero;