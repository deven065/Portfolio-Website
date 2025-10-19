import HeroImage from "./Components/HeroImage";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import ProjectsSection from "./Components/ProjectSection";
import SkillsSection from "./Components/SkillsSection";
import ContactForm from "./Components/ContactForm";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

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
  <ProjectsSection id="projects" />
      <SkillsSection />
  <ContactForm id="contact" />
      <Testimonials />
      <Footer />
    </>
  );
}