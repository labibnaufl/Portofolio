"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/_cursorAnimation/scroll-reveal";

type Projects = {
  name: string;
  role: string;
  type: string;
  thumbnail: string;
  link?: string;
};

const projects: Projects[] = [
  {
    name: "PATRA GANESHA",
    role: "Fullstack Developer",
    type: "Freelance",
    thumbnail: "/Images/projects/patra-ganesha.png",
    link: "https://patraganesha.org/",
  },
  {
    name: "23FLEX",
    role: "Fullstack Developer",
    type: "Academic Project",
    thumbnail: "/Images/projects/23flex.png",
    link: "https://23-fit.vercel.app/",
  },
  {
    name: "PLTU Machine Monitoring",
    role: "Fullstack & ML Developer",
    type: "Part Time Project",
    thumbnail: "/Images/projects/pltu.png",
  },
  {
    name: "Cypher Calculator",
    role: "Frontend Developer",
    type: "Academic Project",
    thumbnail: "/Images/projects/cypher.png",
    link: "https://classis-cypher-calculator.vercel.app/",
  },
];

export const ProjectSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      {/* Floating cursor image — only visible on desktop pointer devices */}
      <div className="hidden md:block">
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              key={hoveredIndex}
              className="fixed z-[9999] pointer-events-none overflow-hidden rounded-sm"
              style={{
                left: mousePos.x + 20,
                top: mousePos.y - 80,
                width: 220,
                height: 150,
              }}
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Image
                src={projects[hoveredIndex].thumbnail}
                alt={projects[hoveredIndex].name}
                fill
                className="object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <section
        id="about-projects"
        className="w-full bg-black px-6 pt-14 pb-12 md:px-16 md:pt-24 md:pb-16 lg:px-32 xl:px-48"
        onMouseMove={handleMouseMove}
      >
        <ScrollReveal delay={0.2} direction="up">
          <h2
            className="font-serif font-bold text-white mb-8 tracking-tight leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)" }}
          >
            Highlighted Works
          </h2>
          <div>
            <div className="border-t-2 border-white/40" />
            {projects.map((exp, i) => (
              <motion.div
                key={i}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                transition={{ duration: 0.2 }}
                className="group border-b-2 border-white/40 cursor-none"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-1 py-16 items-center">
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-sans font-bold leading-none tracking-tight hover:underline underline-offset-4"
                      style={{ fontSize: "clamp(1.8rem, 4vw, 3.0rem)" }}
                    >
                      {exp.name}
                    </a>
                  ) : (
                    <p
                      className="text-white font-sans font-bold leading-none tracking-tight"
                      style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
                    >
                      {exp.name}
                    </p>
                  )}
                  <p className="text-white font-sans text-sm md:text-base md:pl-24">
                    {exp.type}
                  </p>
                  <p className="text-white font-sans text-sm md:text-base">
                    {exp.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};
