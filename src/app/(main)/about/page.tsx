import { HeroSection } from "./_components/hero-section";
import ProfileSection from "./_components/profile-section";
import { ExperiencesSection } from "./_components/experiences-section";
import { ProjectSection } from "./_components/project-section";
import { ActivitiesSection } from "./_components/activities-section";
import { MainFooter } from "../_components/main-footer"; // assuming MainFooter is in src/app/(main)/_components

export const dynamic = "force-dynamic";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full selection:bg-purple-500/30">
      <HeroSection />
      
      <div className="relative">
        <ProfileSection />
        <ExperiencesSection />
        <ProjectSection />
        <ActivitiesSection />
        <MainFooter />
      </div>
    </div>
  );
}
