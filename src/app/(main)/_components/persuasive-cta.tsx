"use client";

import { motion } from "framer-motion";

export function PersuasiveCTA() {
  return (
    <section id="section-persuasive" className="w-full min-h-screen bg-[#F8F8F4] text-black flex flex-col pt-24 pb-16 px-6 md:px-12 selection:bg-black selection:text-[#F8F8F4] overflow-hidden">
      
      {/* Top Left Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 
          className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 pointer-events-none font-sans font-bold tracking-tight text-left"
          style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", lineHeight: "1" }}
        >
          Let&apos;s Build Something Great
        </h2>
      </motion.div>

      {/* spacer to push text to bottom */}
      <div className="flex-1" />

      {/* Bottom Left Text */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-6 md:px-12 mt-auto text-left pt-20 pb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        <p className="text-lg md:text-2xl font-medium tracking-wide text-neutral-800 leading-relaxed font-sans  ml-8 md:ml-16">
          I&apos;m not just an <strong>Engineer</strong> — Creative thinker, problem solver, and your partner in building digital experiences. From idea to execution, I focus on creating solutions that truly make an impact. Let&apos;s build something great together.
        </p>
      </motion.div>

    </section>
  );
}
