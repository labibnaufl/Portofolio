"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const socialLinks = [
  {
    label: "Gmail",
    href: "mailto:naufallabibnugroho@gmail.com",
    icon: "/Images/Techstack/4202011emailgmaillogomailsocialsocialmedia-115677_115624.png",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: "/Images/Techstack/LinkedIn.png",
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: "/Images/Techstack/GitHub.png",
  },
];

const TARGET_W = 1064;
const TARGET_H = 672;

export function MainFooter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const progress = useMotionValue(0);

  // Track viewport size reactively (needed to compute centered insets)
  const [vp, setVp] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const update = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  // Scroll progress relative to this section
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    const trackLength = el.offsetHeight - window.innerHeight;
    const update = () => {
      if (trackLength <= 0) return;
      const p = Math.max(0, Math.min(1, (window.scrollY - sectionTop) / trackLength));
      progress.set(p);
    };
    update();
    const unsub = scrollY.on("change", update);
    return unsub;
  }, [scrollY, progress]);
  // ── Morph: full-bleed → exactly 1064×672 centered card ──────────────────
  const sideInset   = Math.max((vp.w - TARGET_W) / 2, 24);
  const vertInset   = Math.max((vp.h - TARGET_H) / 2, 24);
  const leftInset   = useTransform(progress, [0.15, 0.9], [0, sideInset]);
  const rightInset  = useTransform(progress, [0.15, 0.9], [0, sideInset]);
  const topInset    = useTransform(progress, [0.15, 0.9], [0, vertInset]);
  const bottomInset = useTransform(progress, [0.15, 0.9], [0, vertInset]);
  const borderRad   = useTransform(progress, [0.15, 0.9], [0, 24]);
  const background  = useTransform(progress, [0.15, 0.65], ["#FFFFFF", "#000000"]);
  const headingColor = useTransform(progress, [0.15, 0.65], ["#0a0a0a", "#ffffff"]);
  const mutedColor   = useTransform(progress, [0.15, 0.65], ["#555555", "rgba(255,255,255,0.45)"]);
  const linkColor    = useTransform(progress, [0.15, 0.65], ["#0a0a0a", "rgba(255,255,255,0.7)"]);
  const iconBg       = useTransform(progress, [0.15, 0.65], ["rgba(0,0,0,0.07)", "rgba(255,255,255,0.1)"]);


  return (
    <section id="section-footer" ref={containerRef} className="relative w-full h-[200vh] bg-[#FFFFFF]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Absolutely positioned morphing card */}
        <motion.div
          className="absolute"
          style={{
            top: topInset,
            left: leftInset,
            right: rightInset,
            bottom: bottomInset,
            background,
            borderRadius: borderRad,
            overflow: "hidden",
          }}
        >
          {/* Content — always visible, just colour-inverted */}
          <div className="h-full w-full px-8 md:px-12 py-10 md:py-12 flex flex-col justify-center items-center text-center gap-10">

            {/* Top: heading */}
            <motion.h2
              style={{
                color: headingColor,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1.05,
              }}
              className="font-sans font-bold text-center mt-10"
            >
              What&apos;s next —<br />
              shall we build it<br />
              together?
            </motion.h2>

            {/* Bottom row */}
            <div className="w-full flex flex-col items-center gap-6">

              {/* Social icons — centered */}
              <div className="flex items-center justify-center gap-3">
                {socialLinks.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{ background: iconBg }}
                    className="relative w-10 h-10 rounded-md overflow-hidden flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={s.icon}
                      alt={s.label}
                      fill
                      sizes="40px"
                      className="object-contain p-1.5"
                    />
                  </motion.a>
                ))}
              </div>

              {/* About Me + copyright — centered */}
              <div className="flex flex-col items-center gap-3">
                <Link
                  href="/about"
                  className="group flex items-center gap-2 hover:opacity-80 transition-opacity text-sm md:text-base font-sans tracking-wide"
                >
                  <motion.span style={{ color: linkColor }}>About Me</motion.span>
                  <motion.span
                    style={{ color: linkColor }}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </motion.span>
                </Link>
                <motion.p
                  style={{ color: mutedColor }}
                  className="text-xs md:text-sm font-sans"
                >
                  © bibbb – 2026
                </motion.p>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
