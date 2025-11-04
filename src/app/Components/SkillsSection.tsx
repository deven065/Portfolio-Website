"use client";

import { faCloud, faCode, faCogs, faDatabase, faMobileAlt, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const skills = [
    {
        icon: faCode,
        title: "Front-End Development",
        description:
            "Proficient in HTML, CSS, and JavaScript. Experienced with React, Angular, and Vue.js frameworks. Building responsive and user-friendly interfaces is my passion.",
    },
    {
        icon: faServer,
        title: "Back-End Development",
        description:
            "Skilled in Node.js, Express, and Python. Experienced with MongoDB, PostgreSQL, and MySQL. Creating robust and scalable server-side solutions.",
    },
    {
        icon: faMobileAlt,
        title: "Mobile Development",
        description:
            "Experienced in developing mobile applications using React Native and Flutter. Building cross-platform applications that deliver seamless user experiences on both iOS and Android."
    },
    {
        icon: faCloud,
        title: "Cloud Technologies",
        description :
            "Familiar with cloud platforms such as AWS, Azure and Google Cloud. Deploying and managing applications in the cloud, ensuring high scalability."
    },
    {
        icon: faDatabase,
        title: "Database Management",
        description:
            "Experienced in designing and managing databases using SQL and NoSQL technologies. Optimizing database performance and ensuring data integrity."
    },
    {
        icon: faCogs,
        title: "DevOps",
        description:
            "Knowledge in DevOps practices, including CI/CD pipelines, containerization with Docker, and Orchestration with Kubernetes. Automating software delivery and deployment processes."
    }
]

const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center mb-16"
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-sm md:text-base text-blue-600 dark-mode-text-secondary font-mono tracking-wider mb-4"
                >
                    My Skills
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-extrabold mb-4"
                >
                    Technologies & Expertise
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-lg text-gray-600 dark-mode-text-secondary max-w-2xl mx-auto"
                >
                    A comprehensive range of skills across the full development stack
                </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="flex flex-col items-center p-8 rounded-2xl bg-white dark-mode-hover border border-gray-200 dark-mode-border-gray-200 hover:shadow-xl transition-all duration-300 group"
                    >
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="mb-6"
                        >
                            <FontAwesomeIcon
                                icon={skill.icon}
                                className="text-4xl text-blue-600 dark-mode-text-secondary group-hover:text-purple-600 transition-colors duration-300"
                            />
                        </motion.div>
                        <h3 className="text-xl font-bold mb-4 text-gray-900 dark-mode-text-secondary">
                            {skill.title}
                        </h3>
                        <p className="text-base text-gray-700 dark-mode-text-secondary text-center leading-relaxed">
                            {skill.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default SkillsSection;