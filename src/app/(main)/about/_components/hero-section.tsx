"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef(null);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scroll animations
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]); // Moves up significantly
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]); // Fades out
  const blurValue = useTransform(scrollYProgress, [0, 1], [0, 20]); // Blur amount
  const filter = useMotionTemplate`blur(${blurValue}px)`; // Valid CSS filter string

  // Container (stagger parent)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Item (each line)
  const item = {
    hidden: { opacity: 0, y: 80, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // smooth luxury easing
      },
    },
  };

  return (
    <section
      id="about-hero"
      ref={ref}
      className="relative w-full min-h-[calc(100vh-3.5rem)] bg-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Headline ──────────────────────────────────────── */}
      <motion.div
        style={{ y, opacity, filter }}
        variants={container}
        initial="hidden"
        animate="show"
        className="px-4 text-center select-none w-full"
      >
        <h1 
          className="font-serif text-black leading-[1.15]"
          style={{ fontSize: "clamp(1.5rem, 4vw, 4.5rem)" }}
        >
          
          {/* Line 1 */}
          <motion.span
            variants={item}
            className="flex items-center justify-center gap-4 flex-wrap my-1 md:my-2"
          >
            <span>Naufal Labib Nugroho</span>

          </motion.span>

        </h1>
      </motion.div>

      {/* ── Bottom CTA ────────────────────────────────────── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <a
          href="#about"
          className="text-white/60 text-sm tracking-widest font-sans hover:text-white transition-colors duration-300"
        >
          Get to Know Me
        </a>
      </div>
    </section>
  );
}