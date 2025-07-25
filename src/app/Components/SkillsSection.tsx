import { faCloud, faCode, faCogs, faDatabase, faMobileAlt, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            "Skilled in Node.js, Express, and Puthon. Experienced with MongoDB, PostgreSQL, and MySQL. Creating robust and scalable server-side solutions.",
    },
    {
        icon: faMobileAlt,
        title: "Mobile Development",
        description:
            "Experienced in developing mobile applications using React Native and Flutter. Building cross-platform applications that deliver seamless user experiences on both ios and Android."
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
        <section className="py-16 px-4 max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-black">My Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <FontAwesomeIcon
                            icon={skill.icon}
                            className="text-sky-400 mb-4 h-7 w-7"
                        />
                        <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                        <p className="text-base text-black max-w-xs">
                            {skill.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SkillsSection;