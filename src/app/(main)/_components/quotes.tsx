"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export function Quotes() {
    return (
      <section id="section-quotes" className="relative w-full bg-black text-white flex flex-col justify-start items-center overflow-hidden pt-16 pb-0">
        
        {/* Top Badge */}
        <div className="border border-white/30 rounded-full px-6 py-2 text-sm md:text-base font-sans mb-16 md:mb-24 shrink-0">
          Words That Drive Me Forward
        </div>

        {/* Quote — fills full viewport height, user sees this first */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 pointer-events-none">
          <h2 
            className="font-serif text-white tracking-tight leading-[1.1] text-left relative z-20"
            style={{ fontSize: "clamp(2rem, 5vw, 5.5rem)" }}
          >
            &quot;It is a shame for a man to<br className="hidden lg:block" />
            grow old without seeing the beauty and strength of which
            his body is capable,&quot;
          </h2>
        </div>

        {/* Socrates & Arrow Block — scroll to reveal */}
        <div className="w-full max-w-5xl mx-auto px-6 pb-24 mr-2">
          <motion.div
            className="flex items-end justify-center md:justify-end gap-4"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
          >
            {/* Arrow & Label */}
            <div className="flex flex-col items-end pb-12 md:pb-20 shrink-0">
              <div className="relative w-32 h-16 md:w-56 md:h-24">
                <Image
                  src="/Images/Arrow 1.png"
                  alt="Arrow pointing to Socrates"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
              <p className="font-sans text-xs md:text-base text-white/90 mr-2 md:mr-6 mt-1 md:mt-3 whitespace-nowrap">
                This Guy Said It
              </p>
            </div>

            {/* Socrates Image — rises up from below */}
            <motion.div
              className="relative w-44 h-64 md:w-87.5 md:h-112.5 shrink-0"
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1.2,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
            >
              <Image
                src="/Images/socrates.png"
                alt="Socrates"
                fill
                className="object-contain object-bottom pointer-events-none"
              />
            </motion.div>
          </motion.div>
        </div>

      </section>
    );
}
