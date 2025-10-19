import Image from "next/image";
interface ProjectCardProps {
    image: string;
    title: string;
    features: string[];
    description: string;
    cta?: string;
    ctaLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    image,
    title,
    features,
    description,
    cta = "View Projects",
    ctaLink,
}) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-md mb-10">
            {/* Image */}
            <div className="w-full">
                <Image
                    src={image}
                    alt={title}
                    width={1200}
                    height={700}
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Black Overlay */}
            <div className="bg-black text-white flex flex-col md:flex-row justify-between p-6 rounded-b-2xl">
                {/* Left side : Title + Features */}
                <div className="md:w-1/2">
                    <h3 className="text-lg md:text-xl font-bold mb-3">
                        {title}
                    </h3>
                    <ul className="text-sm space-y-1 mb-4 md:mb-0">
                        {features.map((feature, i) => (
                            <li key={i}># {feature}</li>
                        ))}
                    </ul>
                    {ctaLink ? (
                        <a
                            href={ctaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium underline hover:text-gray-300 transition"
                        >
                            {cta} →
                        </a>
                    ) : (
                        <button className="text-sm font-medium underline hover:text-gray-300 transition">
                            {cta} →
                        </button>
                    )}
                </div>

                {/* Right side : description */}
                <div className="md:w-1/2 md:pl-6 text-sm md:text-base mt-4 md:mt-0">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;