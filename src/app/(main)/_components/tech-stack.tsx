"use client";

import { motion, useScroll, useTransform, MotionValue, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";

// ─── Logo Data ────────────────────────────────────────────────────────────────

const groupA = [
  // Sharp starters — same positions as Group B sharp starters
  { src: "/Images/Techstack/Next.js.png",     alt: "Next.js",    startX:  60, startY: -60, width: 160, startsSharp: true  },
  { src: "/Images/Techstack/React.png",        alt: "React",      startX: -80, startY: -35, width: 180, startsSharp: true  },
  { src: "/Images/Techstack/TypeScript.png",   alt: "TypeScript", startX:  80, startY:  55, width: 140, startsSharp: true  },
  { src: "/Images/Techstack/Node.js.png",      alt: "Node.js",    startX: -50, startY:  68, width: 170, startsSharp: true  },
  // Blurred starters — same positions as Group B blurred starters
  { src: "/Images/Techstack/Python.png",       alt: "Python",     startX: -40, startY: -65, width: 150, startsSharp: false },
  { src: "/Images/Techstack/Visual Studio Code (VS Code).png", alt: "VS Code", startX: 85, startY: -20, width: 160, startsSharp: false },
  { src: "/Images/Techstack/PostgresSQL.png",  alt: "Postgres",   startX:  15, startY:  68, width: 170, startsSharp: false },
  { src: "/Images/Techstack/GitHub.png",       alt: "GitHub",     startX: -85, startY:  25, width: 190, startsSharp: false },
];

const groupB = [
  // Sharp starters (visible first)
  { src: "/Images/Techstack/Vercel.png",       alt: "Vercel",           startX:  60, startY: -60, width: 160, startsSharp: true  },
  { src: "/Images/Techstack/NPM.png",          alt: "NPM",              startX: -80, startY: -35, width: 190, startsSharp: true  },
  { src: "/Images/Techstack/prisma-svgrepo-com.png", alt: "Prisma",     startX:  80, startY:  55, width: 160, startsSharp: true  },
  { src: "/Images/Techstack/Bun.png",          alt: "Bun",              startX: -50, startY:  68, width: 150, startsSharp: true  },
  // Blurred starters (unfocused first)
  { src: "/Images/Techstack/Laravel.png",      alt: "Laravel",          startX: -40, startY: -65, width: 180, startsSharp: false },
  { src: "/Images/Techstack/PHP.png",          alt: "PHP",              startX:  85, startY: -20, width: 170, startsSharp: false },
  { src: "/Images/Techstack/Tailwind CSS.png", alt: "Tailwind",         startX:  15, startY:  68, width: 190, startsSharp: false },
  { src: "/Images/Techstack/Android Studio.png", alt: "Android Studio", startX: -85, startY:  25, width: 170, startsSharp: false },
];

// ─── Logo Component ───────────────────────────────────────────────────────────

interface LogoProps {
  logo: (typeof groupA)[0];
  progress: MotionValue<number>;
  windowStart: number;
  windowEnd: number;
}

function FloatingLogo({ logo, progress, windowStart, windowEnd }: LogoProps) {
  const dur = windowEnd - windowStart;

  // Six named checkpoints inside this group's window:
  const t0 = windowStart;               // invisible, off-screen
  const t1 = windowStart + dur * 0.08;  // fully faded in
  const t2 = windowStart + dur * 0.48;  // blur swap begins
  const t3 = windowStart + dur * 0.56;  // blur swap ends
  const t4 = windowStart + dur * 0.88;  // fade-out begins
  const t5 = windowEnd;                 // invisible, sucked into center

  // Position: flies from screen edge → center
  const x = useTransform(progress, [t0, t5], [`${logo.startX}vw`, "0vw"]);
  const y = useTransform(progress, [t0, t5], [`${logo.startY}vh`, "0vh"]);

  // Scale: large → 0 (sucked behind the text)
  const scale = useTransform(progress, [t0, t5], [1.8, 0]);

  // Opacity: 0 strictly outside the window — logos are INVISIBLE before t0 and after t5
  const mOpacity = useTransform(
    progress,
    [t0, t1, t4, t5],
    [0,   1,  1,  0],
  );

  // Blur: swaps between t2 and t3 (mid-window, after logos have fully appeared)
  const blurVals = logo.startsSharp
    ? [0, 0, 12, 12]   // starts sharp → becomes blurred as it approaches center
    : [12, 12, 0, 0];  // starts blurred → snaps into focus mid-flight
  const mBlur = useTransform(progress, [t0, t2, t3, t5], blurVals);
  const filter = useTransform(mBlur, (v) => `blur(${v}px)`);

  return (
    <motion.div
      className="absolute top-[50%] left-[50%] z-10 pointer-events-none"
      style={{
        opacity: mOpacity,
        filter,
        x,
        y,
        scale,
        marginLeft: -(logo.width / 2),
        marginTop: -(logo.width / 2),
      }}
    >
      <div className="relative" style={{ width: logo.width, height: logo.width }}>
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          sizes={`${logo.width}px`}
          className="object-contain"
        />
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  // ── Manual progress calculation ──────────────────────────────────────────────
  // We bypass useScroll({target}) because it miscalculates the section's offset
  // when the section is inside a `relative` parent wrapper in the page layout.
  //
  // Instead: we track global scrollY and manually derive section-relative progress.
  //   progress = 0 → section top hits viewport top
  //   progress = 1 → section bottom hits viewport bottom
  //   (equivalent to scrolling `sectionHeight - viewportHeight` px through the section)
  const { scrollY } = useScroll();
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // getBoundingClientRect().top + scrollY gives true distance from document top.
    // el.offsetTop alone is relative to the nearest `position:relative` ancestor
    // (the wrapper div in page.tsx), which makes it wrong for scroll math!
    const rect = el.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    const sectionHeight = el.offsetHeight;
    const trackLength = sectionHeight - window.innerHeight;

    const updateProgress = () => {
      if (trackLength <= 0) return;
      const scrolled = window.scrollY - sectionTop;
      const progress = Math.max(0, Math.min(1, scrolled / trackLength));
      scrollYProgress.set(progress);
    };

    // Set initial value immediately, then track changes
    updateProgress();
    const unsubscribe = scrollY.on("change", updateProgress);
    return unsubscribe;
  }, [scrollY, scrollYProgress]);

  return (
    // 600vh gives a luxuriously slow scroll track for all 3 stages
    <section
      id="section-techstack"
      ref={containerRef}
      className="relative w-full h-[600vh] bg-[#F8F8F4] text-black"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* ── Center text — visible throughout ── */}
        <div className="relative z-30 text-center max-w-4xl px-4">
          {/* Halo eats logos as they pass behind the text */}
          <div className="absolute -inset-16 md:-inset-28 bg-[#F8F8F4] blur-3xl rounded-[140px] z-[-1]" />
          <div className="absolute -inset-6 bg-[#F8F8F4] opacity-95 blur-xl rounded-full z-[-1]" />

          <h2
            className="relative font-sans font-black uppercase tracking-tight mb-4 z-10 text-neutral-900"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            What I Work With
          </h2>
          <p
            className="relative font-sans text-neutral-700 font-medium tracking-wide z-10 max-w-2xl mx-auto"
            style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
          >
            Tools I trust to get things done, from the first line of code to production
          </p>
        </div>

        {/* ── Group A: 10% → 48% of total scroll progress ── */}
        {groupA.map((logo, i) => (
          <FloatingLogo
            key={`a-${i}`}
            logo={logo}
            progress={scrollYProgress}
            windowStart={0.10}
            windowEnd={0.48}
          />
        ))}

        {/* ── Group B: 56% → 96% of total scroll progress ── */}
        {groupB.map((logo, i) => (
          <FloatingLogo
            key={`b-${i}`}
            logo={logo}
            progress={scrollYProgress}
            windowStart={0.56}
            windowEnd={0.96}
          />
        ))}

      </div>
    </section>
  );
}
