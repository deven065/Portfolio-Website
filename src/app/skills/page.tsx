import AdditionalExpertise from "../Components/Skills/AdditionalExpertise";
import { ContactCTA } from "../Components/Skills/ContactCTA";
import { ExperienceTimeline } from "../Components/Skills/ExperienceTimeline";
import SkillsGrid from "../Components/Skills/SkillsGrid";
import SkillsHero from "../Components/Skills/SkillsHero";

export default function SkillsPage() {
    return (
        <div>
            <SkillsHero />
            <SkillsGrid />
            <AdditionalExpertise />
            <ExperienceTimeline />
            <ContactCTA />
        </div>
    )
}