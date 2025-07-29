'use client';

import { FC, JSX } from 'react';
import {
  Code2,
  Palette,
  LineChart,
  ShieldCheck,
  Rocket,
  Users,
} from 'lucide-react';

type ExpertiseItem = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const expertiseList: ExpertiseItem[] = [
  {
    icon: <Code2 className="w-10 h-10 text-blue-500" />,
    title: 'Full-Stack Development',
    description: 'End-to-end application development',
  },
  {
    icon: <Palette className="w-10 h-10 text-blue-500" />,
    title: 'UI/UX Design',
    description: 'User-centered design principles',
  },
  {
    icon: <LineChart className="w-10 h-10 text-blue-500" />,
    title: 'Performance Optimization',
    description: 'Web performance and SEO',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
    title: 'Security Best Practices',
    description: 'Secure coding and authentication',
  },
  {
    icon: <Rocket className="w-10 h-10 text-blue-500" />,
    title: 'Agile Development',
    description: 'Scrum and project management',
  },
  {
    icon: <Users className="w-10 h-10 text-blue-500" />,
    title: 'Team Collaboration',
    description: 'Leadership and mentoring',
  },
];

const AdditionalExpertise: FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-neutral-900 mb-12">Additional Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {expertiseList.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 border border-transparent hover:bg-neutral-100 hover:border-neutral-200"
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalExpertise;
