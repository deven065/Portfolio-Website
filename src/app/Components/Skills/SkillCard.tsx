'use client';

import React from 'react';

type Skill = {
  name: string;
  percentage: number;
};

type SkillCardProps = {
  title: string;
  subtitle: string;
  skills: Skill[];
};

const getColor = (skillName: string) => {
  const map: { [key: string]: string } = {
    React: 'bg-blue-600',
    'Next.js': 'bg-neutral-800',
    TypeScript: 'bg-blue-500',
    JavaScript: 'bg-yellow-400',
    HTML5: 'bg-orange-500',
    CSS3: 'bg-blue-400',
    'Tailwind CSS': 'bg-teal-500',
    'Vue.js': 'bg-green-500',
    'Node.js': 'bg-green-600',
    'Express.js': 'bg-neutral-800',
    Python: 'bg-blue-500',
    Django: 'bg-green-700',
    FastAPI: 'bg-teal-600',
    PHP: 'bg-purple-500',
    Laravel: 'bg-red-500',
    'REST APIs': 'bg-indigo-500',
    MongoDB: 'bg-green-600',
    PostgreSQL: 'bg-indigo-700',
    MySQL: 'bg-blue-700',
    Redis: 'bg-red-600',
    Realm: 'bg-violet-500',
    Firebase: 'bg-yellow-500',
    'React Native': 'bg-blue-700',
    Flutter: 'bg-cyan-500',
    Expo: 'bg-neutral-800',
    'iOS Dev': 'bg-slate-600',
    'Android Dev': 'bg-green-600',
    AWS: 'bg-orange-500',
    'Google Cloud': 'bg-blue-400',
    Azure: 'bg-blue-600',
    Docker: 'bg-blue-700',
    Kubernetes: 'bg-indigo-600',
    'CI/CD': 'bg-green-500',
    Vercel: 'bg-neutral-900',
    Netlify: 'bg-green-400',
    Git: 'bg-red-600',
    GitHub: 'bg-neutral-800',
    'VS Code': 'bg-blue-500',
    Webpack: 'bg-yellow-400',
    Vite: 'bg-purple-500',
    Jest: 'bg-pink-500',
    ESLint: 'bg-indigo-500',
    Prettier: 'bg-teal-500',
  };

  return map[skillName];
};

const SkillCard: React.FC<SkillCardProps> = ({ title, subtitle, skills }) => {
  return (
    <div className="w-full max-w-xl bg-white shadow-md rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-5 h-5 rounded-full bg-blue-100" />
        <div>
          <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">{subtitle}</p>
        </div>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-neutral-700 ">{skill.name}</span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">{skill.percentage}%</span>
            </div>
            <div className="w-full bg-neutral-200    rounded-full h-2">
              <div
                className={`${getColor(skill.name)} h-2 rounded-full`}
                style={{ width: `${skill.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
