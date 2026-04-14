"use client";

import { motion } from "framer-motion";
import { EyesAnimation } from "./eyes-animation";

export function DeepDive() {
  return (
    <section id="section-deepdive" className="w-full min-h-screen bg-[#F8F8F4] text-black flex flex-col pt-24 pb-16 px-6 md:px-12 selection:bg-black selection:text-[#F8F8F4] overflow-hidden">
      
      {/* Top Left Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 
          className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 pointer-events-none font-sans font-bold tracking-tight text-left"
          style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", lineHeight: "0.95" }}
        >
          TAKE A LOOK AROUND
        </h2>
      </motion.div>

      {/* Eyes animation — centered between heading and bottom text */}
      <div className="flex-1 flex items-center justify-center mt-20">
        <EyesAnimation />
      </div>

      {/* Bottom Right Text */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-6 md:px-12 mt-auto pt-20 pb-10 flex justify-end"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        <p className="max-w-3xl text-base md:text-2xl font-medium tracking-wide text-neutral-800 leading-relaxed text-left md:text-right">
          Hey there! I&apos;m <strong>Naufal Labib Nugroho</strong>, an undergraduate
          Computer Engineering student from Diponegoro University I focus on building intelligent applications at the intersection of
          machine learning and full-stack development, turning ideas into
          impactful digital experiences.
        </p>
      </motion.div>

    </section>
  );
}
