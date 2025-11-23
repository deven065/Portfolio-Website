"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
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
    const cardRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const image = imageRef.current;

        // Subtle 3D tilt effect
        const handleMouseMove = (e: MouseEvent) => {
            if (!card) return;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(card, {
                rotationY: x / 50,
                rotationX: -y / 50,
                transformPerspective: 1000,
                duration: 0.3,
                ease: "power1.out",
            });

            if (image) {
                gsap.to(image, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power1.out",
                });
            }
        };

        const handleMouseLeave = () => {
            if (!card) return;
            
            gsap.to(card, {
                rotationY: 0,
                rotationX: 0,
                duration: 0.3,
                ease: "power1.out",
            });

            if (image) {
                gsap.to(image, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power1.out",
                });
            }
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            card.removeEventListener("mousemove", handleMouseMove);
            card.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, { scope: cardRef });

    return (
        <div 
            ref={cardRef}
            className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 mb-10"
            style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        >
            {/* Image */}
            <div ref={imageRef} className="w-full relative overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    width={1200}
                    height={700}
                    className="w-full h-auto object-cover will-change-transform"
                />
            </div>

            {/* Black Overlay */}
            <div ref={contentRef} className="bg-black text-white flex flex-col md:flex-row justify-between p-6 rounded-b-2xl">
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