"use client";

import Image from "next/image";
import Particles from "./particles";

export function Introduction() {
  return (
    <section id="section-intro" className="relative w-full min-h-[calc(100vh-3.5rem)] bg-white text-black flex flex-col overflow-hidden pt-24 pb-12 md:pt-36 md:pb-16">
      
      {/* ── Background Particles ────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Particles
          particleColors={["#000000", "#222222", "#444444"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* ── Main Content Container ── */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 pointer-events-none">
        <h2
          className="font-sans font-black uppercase leading-[1.05] tracking-normal text-left"
          style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
        >
          <span className="block mb-3 md:mb-4">Software Engineer</span>

          <span className="flex items-center justify-start gap-4 md:gap-6 flex-wrap mb-3 md:mb-4">
            <span>Based</span>

            <span
              className="relative overflow-hidden inline-block align-middle rounded-sm"
              style={{
                height: "0.9em",
                aspectRatio: "16/9",
                transform: "translateY(-4%)",
              }}
            >
              <Image
                src="/Images/AdaIndonesiaCoy.png"
                alt="Indonesia"
                fill
                className="object-contain object-center"
              />
            </span>
          </span>

          <span className="block">At Indonesia</span>
        </h2>
      </div>

      {/* ── Bottom Text ─────────────────────────────────── */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-base md:text-lg font-medium tracking-wide text-neutral-800">
          Interested In Machine Learning and Fullstack Development
        </p>
      </div>
    </section>
  );
}
