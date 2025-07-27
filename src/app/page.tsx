import HeroImage from "@/Components/HeroImage";
import Hero from "@/Components/Hero";
import AboutMe from "@/Components/AboutMe";
import ProjectsSection from "@/Components/ProjectSection";
import Testimonials from "./Components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroImage
        src="/1st-image.webp"
        alt="Developer working at desk"
      />
      <AboutMe />
      <HeroImage
        src="/image-2.webp"
        alt="Developer with laptop and coffee"
      />
      <ProjectsSection />
      <Testimonials />

      {/* Call to Action Section */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to bring your ideas to life with modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/projects"
              className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-full transition-all duration-200 font-medium"
            >
              View My Work
            </a>
            <a
              href="/skills"
              className="px-8 py-3 border border-gray-400 text-gray-300 hover:bg-gray-700 hover:text-white rounded-full transition-all duration-200 font-medium"
            >
              See My Skills
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-blue-500 text-white hover:bg-blue-600 rounded-full transition-all duration-200 font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
