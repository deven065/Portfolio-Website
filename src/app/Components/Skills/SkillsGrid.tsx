import React from "react";
import SkillCard from "./SkillCard";

const skillsData = [
  {
    title: 'Frontend Development',
    subtitle: 'Creating beautiful, responsive, and interactive UIs',
    skills: [
      { name: 'React', percentage: 92 },
      { name: 'Next.js', percentage: 90 },
      { name: 'TypeScript', percentage: 90 },
      { name: 'JavaScript', percentage: 92 },
      { name: 'HTML5', percentage: 98 },
      { name: 'CSS3', percentage: 88 },
      { name: 'Tailwind CSS', percentage: 85 },
      { name: 'Vue.js', percentage: 75 },
    ],
  },
  {
    title: 'Backend Development',
    subtitle: 'Building robust and scalable server-side apps',
    skills: [
      { name: 'Node.js', percentage: 90 },
      { name: 'Express.js', percentage: 88 },
      { name: 'Python', percentage: 85 },
      { name: 'Django', percentage: 78 },
      { name: 'FastAPI', percentage: 75 },
      { name: 'PHP', percentage: 70 },
      { name: 'Laravel', percentage: 68 },
      { name: 'REST APIs', percentage: 92 },
    ],
  },
  {
    title: 'Database Management',
    subtitle: 'Designing and managing efficient DB systems',
    skills: [
      { name: 'MongoDB', percentage: 92 },
      { name: 'PostgreSQL', percentage: 87 },
      { name: 'MySQL', percentage: 85 },
      { name: 'Redis', percentage: 75 },
      { name: 'Realm', percentage: 72 },
      { name: 'Firebase', percentage: 78 },
    ],
  },
  {
    title: 'Mobile Development',
    subtitle: 'Building cross-platform mobile applications',
    skills: [
      { name: 'React Native', percentage: 80 },
      { name: 'Flutter', percentage: 75 },
      { name: 'Expo', percentage: 80 },
      { name: 'iOS Dev', percentage: 70 },
      { name: 'Android Dev', percentage: 75 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    subtitle: 'Deploying and managing applications in the cloud',
    skills: [
      { name: 'AWS', percentage: 82 },
      { name: 'Google Cloud', percentage: 75 },
      { name: 'Azure', percentage: 70 },
      { name: 'Docker', percentage: 82 },
      { name: 'Kubernetes', percentage: 82 },
      { name: 'CI/CD', percentage: 90 },
      { name: 'Vercel', percentage: 88 },
      { name: 'Netlify', percentage: 88 },
    ],
  },
  {
    title: 'Tools & Technologies',
    subtitle: 'Tools and technologies I work with daily',
    skills: [
      { name: 'Git', percentage: 92 },
      { name: 'GitHub', percentage: 90 },
      { name: 'VS Code', percentage: 90 },
      { name: 'Webpack', percentage: 82 },
      { name: 'Vite', percentage: 82 },
      { name: 'Jest', percentage: 85 },
      { name: 'ESLint', percentage: 88 },
      { name: 'Prettier', percentage: 90 },
    ],
  },
];

const SkillsGrid: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20 dark:from-gray-950 dark:via-blue-950/10 dark:to-purple-950/10 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        {skillsData.map((card, i) => (
          <SkillCard key={i} {...card} index={i} />
        ))}
      </div>
    </section>
  );
};

export default SkillsGrid;