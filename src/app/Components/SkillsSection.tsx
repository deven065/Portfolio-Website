"use client";

import { faCloud, faCode, faCogs, faDatabase, faMobileAlt, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!cardsRef.current) return;

        // Animate skill cards with 3D effect
        gsap.fromTo(
            cardsRef.current.children,
            {
                opacity: 0,
                y: 100,
                rotationX: -45,
                scale: 0.8,
            },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                scale: 1,
                stagger: 0.1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="skills" className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center mb-20"
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-sm md:text-base text-blue-600 dark-mode-text-secondary font-mono tracking-wider mb-4 uppercase"
                >
                    Expertise
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-extrabold mb-6 gradient-text"
                >
                    Technologies & Skills
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl text-gray-600 dark-mode-text-secondary max-w-3xl mx-auto leading-relaxed"
                >
                    A comprehensive range of skills across the full development stack, delivering enterprise-grade solutions
                </motion.p>
            </motion.div>

            <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-8 rounded-2xl bg-white dark-mode-hover border border-gray-200 dark-mode-border-gray-200 hover:shadow-2xl transition-all duration-300 group"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <div className="mb-6">
                            <FontAwesomeIcon
                                icon={skill.icon}
                                className="text-4xl text-blue-600 dark-mode-text-secondary group-hover:text-purple-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-gray-900 dark-mode-text-secondary">
                            {skill.title}
                        </h3>
                        <p className="text-base text-gray-700 dark-mode-text-secondary text-center leading-relaxed">
                            {skill.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SkillsSection;