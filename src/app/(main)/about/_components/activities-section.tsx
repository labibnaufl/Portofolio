"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/_cursorAnimation/scroll-reveal";

type Activities = {
  organization: string;
  role: string;
  date: string;
};

const experiences: Activities[] = [
  {
    organization: "Computer Engineering Research Club (CERC)",
    role: "Chairman",
    date: "2025 - Present",
  },
  {
    organization: "Al Muharrik",
    role: "Head of Public Relations",
    date: "2025 - 2026",
  },
  {
    organization: "The ACE 2025: Competition Series",
    role: "Chief Organizer",
    date: "September 2025",
  },
  {
    organization: "Simpul Negeri",
    role: "Public Relations Division Member",
    date: "2024 – Present",
  },
];

export const ActivitiesSection = () => {
  return (
    <section
      id="about-activities"
      className="w-full bg-black px-6 pt-14 pb-12 md:px-16 md:pt-24 md:pb-16 lg:px-32 xl:px-48"
    >
      <ScrollReveal delay={0.2} direction="up">
        <h2
          className="font-serif font-bold text-white mb-8 tracking-tight leading-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          My Activities
        </h2>
        <div>
          <div className="border-t-2 border-white/40" />
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              transition={{ duration: 0.2 }}
              className="group border-b-2 border-white/40 cursor-default"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-1 py-10 items-center">
                <p
                  className="text-white font-sans font-bold leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.5rem, 4vw, 3.0rem)" }}
                >
                  {exp.organization}
                </p>
                <p className="text-white font-sans text-sm md:text-base md:pl-24">{exp.date}</p>
                <p className="text-white font-sans text-sm md:text-base">{exp.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};