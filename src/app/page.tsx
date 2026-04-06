import { HeroSection } from "./(main)/_components/hero-section";
import { Introduction } from "./(main)/_components/introduction";
import { Quotes } from "./(main)/_components/quotes";
import { DeepDive } from "./(main)/_components/deep-dive";
import { TechStack } from "./(main)/_components/tech-stack";
import { PersuasiveCTA } from "./(main)/_components/persuasive-cta";
import { MainFooter } from "./(main)/_components/main-footer";

export const dynamic = "force-dynamic";

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full selection:bg-purple-500/30">
      <HeroSection />
      <Introduction />
      <Quotes />

      {/*
        Veil zone — the MainFooter is sticky bottom-0 INSIDE this container.
        As the user scrolls through DeepDive → TechStack → PersuasiveCTA,
        the black footer card rises from the bottom and slides over them.
        The `relative` is required for sticky children to work correctly.
      */}
      <div className="relative">
        <DeepDive />
        <TechStack />
        <PersuasiveCTA />
        <MainFooter />
      </div>
    </div>
  );
}
