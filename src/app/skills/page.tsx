import AdditionalExpertise from "../Components/Skills/AdditionalExpertise";
import SkillsGrid from "../Components/Skills/SkillsGrid";
import SkillsHero from "../Components/Skills/SkillsHero";

export default function SkillsPage() {
    return (
        <div>
            <SkillsHero />
            <SkillsGrid />
            <AdditionalExpertise />
        </div>
    )
}