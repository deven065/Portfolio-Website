import ProjectsHero from "../Components/Projects/ProjectsHero";
import FeaturedProjects from "../Components/Projects/FeaturedProjects";
import AllProjects from "../Components/Projects/AllProjects";
import ProjectFooter from "../Components/Projects/ProjectFooter";

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <FeaturedProjects />
      <AllProjects />
      <ProjectFooter />
    </>
  );
}
