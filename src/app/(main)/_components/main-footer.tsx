"use client";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const isAbout = pathname === "/about";

  const [vp, setVp] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const update = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    const trackLength = el.offsetHeight - window.innerHeight;
    const update = () => {
      if (trackLength <= 0) return;
      const p = Math.max(
        0,
        Math.min(1, (window.scrollY - sectionTop) / trackLength),
      );
      progress.set(p);
    };
    update();
    const unsub = scrollY.on("change", update);
    return unsub;
  }, [scrollY, progress]);

  const sideInset = Math.max((vp.w - TARGET_W) / 2, 24);
  const vertInset = Math.max((vp.h - TARGET_H) / 2, 24);
  const leftInset = useTransform(progress, [0.15, 0.9], [0, sideInset]);
  const rightInset = useTransform(progress, [0.15, 0.9], [0, sideInset]);
  const topInset = useTransform(progress, [0.15, 0.9], [0, vertInset]);
  const bottomInset = useTransform(progress, [0.15, 0.9], [0, vertInset]);
  const borderRad = useTransform(progress, [0.15, 0.9], [0, 24]);
  const background = useTransform(
    progress,
    [0.15, 0.65],
    ["#FFFFFF", "#000000"],
  );

  // Teks: gelap dulu (di atas bg putih) → terang (di atas bg hitam)
  const headingColor = useTransform(
    progress,
    [0.15, 0.65],
    ["#0a0a0a", "#ffffff"],
  );
  const mutedColor = useTransform(
    progress,
    [0.15, 0.65],
    ["#555555", "rgba(255,255,255,0.45)"],
  );
  const linkColor = useTransform(
    progress,
    [0.15, 0.65],
    ["#0a0a0a", "rgba(255,255,255,0.8)"],
  );
  const iconBg = useTransform(
    progress,
    [0.15, 0.65],
    ["rgba(0,0,0,0.07)", "rgba(255,255,255,0.1)"],
  );

  const navLinks = isAbout
    ? [
        { label: "Home", href: "/" },
        { label: "Get My CV", href: "/cv.pdf" },
      ]
    : [{ label: "About Me", href: "/about" }];

  return (
    <section
      id="section-footer"
      ref={containerRef}
      className="relative w-full h-[200vh] bg-[#FFFFFF]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Layer 1: Morphing card (background only, no content) */}
        <motion.div
          className="absolute inset-0"
          style={{
            top: topInset,
            left: leftInset,
            right: rightInset,
            bottom: bottomInset,
            background,
            borderRadius: borderRad,
          }}
        />

        {/* Layer 2: Content — fixed posisi, tidak ikut morph */}
        <div
          className="absolute grid grid-rows-[1fr_auto] grid-cols-[1fr_auto]"
          style={{
            top: vertInset,
            left: sideInset,
            right: sideInset,
            bottom: vertInset,
            padding: "3rem 3.5rem",
          }}
        >
          {/* TOP LEFT — heading */}
          <div className="flex items-center">
            <motion.h2
              style={{
                color: headingColor,
                fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
                lineHeight: 1.08,
              }}
              className="font-sans font-bold tracking-tight"
            >
              What&apos;s next —<br />
              shall we build it
              <br />
              together?
            </motion.h2>
          </div>

          {/* TOP RIGHT — navigation */}
          <div className="flex flex-col items-end justify-center gap-1 mr-20">
            {navLinks.map((nav) => (
              <Link
                key={nav.label}
                href={nav.href}
                target={nav.href.endsWith(".pdf") ? "_blank" : undefined}
                className="group flex items-center gap-2 hover:opacity-60 transition-opacity"
              >
                <motion.span
                  style={{ color: linkColor }}
                  className="font-sans text-sm md:text-base tracking-wide"
                >
                  {nav.label}
                </motion.span>
                <motion.span
                  style={{ color: linkColor }}
                  className="transition-transform duration-300 group-hover:translate-x-1 text-base"
                >
                  →
                </motion.span>
              </Link>
            ))}
          </div>

          {/* BOTTOM LEFT — social icons */}
          <div className="flex items-end gap-2 w-fit bg-white">
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{ background: iconBg }}
                className="relative w-10 h-10 rounded-md overflow-hidden flex items-center justify-center hover:opacity-70 transition-opacity"
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

          {/* BOTTOM RIGHT — copyright */}
          <div className="flex items-end justify-end">
            <motion.p
              style={{ color: mutedColor }}
              className="font-sans text-xs md:text-sm tracking-wide"
            >
              © bibbb – 2026
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
