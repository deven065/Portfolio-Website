// components/ExperienceTimeline.tsx
import React from 'react';

type Experience = {
  title: string;
  date: string;
  description: string;
};

const experiences: Experience[] = [
  {
    title: 'Elite Project Analyst',
    date: 'Feb 2024 - June 2024',
    description:
      "Collaborated with managers to build lead-focused dashboards, mentored junior analysts, and delivered impactful insights while consistently contributing during night shifts in a flexible, team-driven environment."
  },
  {
    title: 'Credit Processing Associate',
    date: 'Oct 2022 - Jan 2023',
    description:
      'Processed and verified credit applications at Karur Vysya Bank, ensuring compliance with banking regulations and timely approval of customer loans.',
  },
];

export const ExperienceTimeline = () => {
  return (
    <section className="bg-[#0E1629] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience Timeline</h2>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="w-3 h-3 mt-2 bg-blue-500 rounded-full flex-shrink-0"></span>
              <div>
                <h3 className="text-lg md:text-xl font-semibold">{exp.title}</h3>
                <p className="text-blue-400 font-medium mb-2">{exp.date}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
