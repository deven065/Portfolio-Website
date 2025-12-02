import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import StatisticsSection from "./Components/StatisticsSection";
import ProjectsSection from "./Components/ProjectSection";
import SkillsSection from "./Components/SkillsSection";
import ContactForm from "./Components/ContactForm";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <StatisticsSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactForm />
      <Testimonials />
      <Footer />
    </>
  );
}