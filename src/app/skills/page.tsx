import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCode, 
  faServer, 
  faMobileAlt, 
  faCloud, 
  faDatabase, 
  faCogs,
  faLaptopCode,
  faPalette,
  faChartLine,
  faShieldAlt,
  faRocket,
  faUsers
} from "@fortawesome/free-solid-svg-icons";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: faCode,
    description: "Creating beautiful, responsive, and interactive user interfaces",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "Next.js", level: 90, color: "bg-gray-800" },
      { name: "TypeScript", level: 88, color: "bg-blue-600" },
      { name: "JavaScript", level: 95, color: "bg-yellow-500" },
      { name: "HTML5", level: 98, color: "bg-orange-500" },
      { name: "CSS3", level: 92, color: "bg-blue-400" },
      { name: "Tailwind CSS", level: 85, color: "bg-teal-500" },
      { name: "Vue.js", level: 75, color: "bg-green-500" }
    ]
  },
  {
    title: "Backend Development",
    icon: faServer,
    description: "Building robust and scalable server-side applications",
    skills: [
      { name: "Node.js", level: 90, color: "bg-green-600" },
      { name: "Express.js", level: 88, color: "bg-gray-700" },
      { name: "Python", level: 82, color: "bg-blue-500" },
      { name: "Django", level: 78, color: "bg-green-700" },
      { name: "FastAPI", level: 75, color: "bg-teal-600" },
      { name: "PHP", level: 70, color: "bg-purple-600" },
      { name: "Laravel", level: 68, color: "bg-red-500" },
      { name: "REST APIs", level: 92, color: "bg-indigo-500" }
    ]
  },
  {
    title: "Database Management",
    icon: faDatabase,
    description: "Designing and managing efficient database systems",
    skills: [
      { name: "MongoDB", level: 88, color: "bg-green-500" },
      { name: "PostgreSQL", level: 85, color: "bg-blue-600" },
      { name: "MySQL", level: 80, color: "bg-orange-500" },
      { name: "Redis", level: 75, color: "bg-red-600" },
      { name: "Prisma", level: 82, color: "bg-gray-800" },
      { name: "Firebase", level: 78, color: "bg-yellow-500" }
    ]
  },
  {
    title: "Mobile Development",
    icon: faMobileAlt,
    description: "Building cross-platform mobile applications",
    skills: [
      { name: "React Native", level: 85, color: "bg-blue-500" },
      { name: "Flutter", level: 75, color: "bg-blue-400" },
      { name: "Expo", level: 80, color: "bg-gray-900" },
      { name: "iOS Development", level: 70, color: "bg-gray-600" },
      { name: "Android Development", level: 72, color: "bg-green-600" }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: faCloud,
    description: "Deploying and managing applications in the cloud",
    skills: [
      { name: "AWS", level: 82, color: "bg-orange-500" },
      { name: "Google Cloud", level: 75, color: "bg-blue-500" },
      { name: "Azure", level: 70, color: "bg-blue-600" },
      { name: "Docker", level: 85, color: "bg-blue-400" },
      { name: "Kubernetes", level: 75, color: "bg-blue-700" },
      { name: "CI/CD", level: 80, color: "bg-green-600" },
      { name: "Vercel", level: 88, color: "bg-gray-900" },
      { name: "Netlify", level: 85, color: "bg-teal-500" }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: faCogs,
    description: "Development tools and technologies I work with daily",
    skills: [
      { name: "Git", level: 92, color: "bg-orange-600" },
      { name: "GitHub", level: 90, color: "bg-gray-800" },
      { name: "VS Code", level: 95, color: "bg-blue-500" },
      { name: "Webpack", level: 78, color: "bg-blue-400" },
      { name: "Vite", level: 82, color: "bg-purple-500" },
      { name: "Jest", level: 75, color: "bg-red-500" },
      { name: "ESLint", level: 88, color: "bg-purple-600" },
      { name: "Prettier", level: 90, color: "bg-gray-700" }
    ]
  }
];

const additionalSkills = [
  { icon: faLaptopCode, title: "Full-Stack Development", description: "End-to-end application development" },
  { icon: faPalette, title: "UI/UX Design", description: "User-centered design principles" },
  { icon: faChartLine, title: "Performance Optimization", description: "Web performance and SEO" },
  { icon: faShieldAlt, title: "Security Best Practices", description: "Secure coding and authentication" },
  { icon: faRocket, title: "Agile Development", description: "Scrum and project management" },
  { icon: faUsers, title: "Team Collaboration", description: "Leadership and mentoring" }
];

const SkillBar = ({ skill }: { skill: any }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
      <span className="text-sm text-gray-500">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
  </div>
);

const SkillCategory = ({ category }: { category: any }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center mb-6">
      <div className="bg-blue-100 p-4 rounded-full mr-4">
        <FontAwesomeIcon icon={category.icon} className="text-blue-500 text-2xl" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
        <p className="text-gray-600">{category.description}</p>
      </div>
    </div>
    <div className="space-y-3">
      {category.skills.map((skill: any, index: number) => (
        <SkillBar key={index} skill={skill} />
      ))}
    </div>
  </div>
);

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            My <span className="text-blue-500">Skills</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A comprehensive overview of my technical skills and expertise in modern web development,
            from frontend frameworks to cloud technologies.
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-500 flex-wrap">
            <span className="bg-gray-100 px-4 py-2 rounded-full">5+ Years Experience</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">Full-Stack Developer</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">50+ Technologies</span>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCategory key={index} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Skills */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Additional Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={skill.icon} className="text-blue-500 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Experience Timeline
          </h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-blue-500 w-4 h-4 rounded-full mt-1 mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold mb-1">Senior Full-Stack Developer</h3>
                <p className="text-blue-400 mb-2">2022 - Present</p>
                <p className="text-gray-300">Leading development of large-scale web applications using React, Node.js, and cloud technologies.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500 w-4 h-4 rounded-full mt-1 mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold mb-1">Frontend Developer</h3>
                <p className="text-blue-400 mb-2">2020 - 2022</p>
                <p className="text-gray-300">Specialized in React and modern frontend frameworks, building responsive and interactive user interfaces.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500 w-4 h-4 rounded-full mt-1 mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold mb-1">Junior Web Developer</h3>
                <p className="text-blue-400 mb-2">2019 - 2020</p>
                <p className="text-gray-300">Started my journey in web development, learning HTML, CSS, JavaScript, and basic backend technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Interested in collaborating? Let's discuss how my skills can help bring your project to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
