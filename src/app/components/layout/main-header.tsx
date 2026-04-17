"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";

// ── Section → header color map ─────────────────────────────────────────────
type HeaderTheme = { bg: string; color: string };

const SECTION_THEMES: Record<string, HeaderTheme> = {
  "section-hero": { bg: "#000000", color: "#ffffff" },
  "section-intro": { bg: "#ffffff", color: "#000000" },
  "section-quotes": { bg: "#000000", color: "#ffffff" },
  "section-deepdive": { bg: "#F8F8F4", color: "#000000" },
  "section-techstack": { bg: "#F8F8F4", color: "#000000" },
  "section-persuasive": { bg: "#F8F8F4", color: "#000000" },
  "section-footer": { bg: "#ffffff", color: "#000000" },
  "about-hero": { bg: "#ffffff", color: "#000000" },
  "about-profile": { bg: "#000000", color: "#ffffff" },
  "about-experiences": { bg: "#000000", color: "#ffffff" },
  "about-projects": { bg: "#000000", color: "#ffffff" },
  "about-activities": { bg: "#000000", color: "#ffffff" },
};

const DEFAULT: HeaderTheme = { bg: "#000000", color: "#ffffff" };

// ── Social links ────────────────────────────────────────────────────────────
const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/naufal-labib-nugroho",
    icon: "/Images/Techstack/LinkedIn.png",
  },
  {
    label: "GitHub",
    href: "https://github.com/labibnaufl",
    icon: "/Images/Techstack/GitHub.png",
  },
  {
    label: "Gmail",
    href: "mailto:naufallabibnugroho@gmail.com",
    icon: "/Images/Techstack/4202011emailgmaillogomailsocialsocialmedia-115677_115624.png",
  },
];

// ── Framer Motion variants ──────────────────────────────────────────────────
const sidebarVariants: Variants = {
  hidden: { y: "100%" },
  visible: { y: 0 },
  exit: { y: "-100%" },
};

const sidebarTransition = {
  duration: 0.6,
  ease: [0.76, 0, 0.24, 1] as const,
};

const navContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -24,
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] as const },
  },
};

const bottomVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.45, ease: [0.33, 1, 0.68, 1] as const },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Home", href: "/" },
];

// ── Close Button with crossed-X design ─────────────────────────────────────
function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      aria-label="Close menu"
      onClick={onClick}
      className="group relative flex items-center justify-center hover:opacity-60 transition-opacity duration-300"
    >
      {/* CLOSE label */}
      <span
        className="text-xl md:text-3xl font-sans font-semibold tracking-[0.25em] pl-[0.25em] uppercase text-black select-none"
      >
        CLOSE
      </span>
    </button>
  );
}

export function MainHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<HeaderTheme>(DEFAULT);
  const pathname = usePathname();

  // Reset theme & close sidebar on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setSidebarOpen(false);
    setTheme(DEFAULT);
  }

  // IntersectionObserver for header theme
  useEffect(() => {
    const ids = Object.keys(SECTION_THEMES);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTheme(SECTION_THEMES[entry.target.id] ?? DEFAULT);
          }
        });
      },
      { rootMargin: "-56px 0px -93% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  // Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <>
      {/* ── Navbar ─────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-14 transition-colors duration-300"
        style={{ backgroundColor: theme.bg }}
      >
        <Link
          href="/"
          className="text-xl md:text-2xl font-normal tracking-wide hover:opacity-60 transition-opacity duration-300"
          style={{ color: theme.color }}
        >
          bibbb
        </Link>

        <button
          aria-label="Toggle menu"
          aria-expanded={sidebarOpen}
          onClick={() => setSidebarOpen((v) => !v)}
          className="text-sm font-semibold font-sans tracking-[0.25em] uppercase hover:opacity-60 transition-opacity duration-300"
          style={{ color: theme.color }}
        >
          MENU
        </button>
      </header>

      {/* ── Fullscreen Sidebar ─────────────────────────────── */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            key="sidebar"
            aria-label="Navigation sidebar"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={sidebarTransition}
            className="fixed inset-0 z-[60] flex flex-col"
            style={{ backgroundColor: "#F0EFEB" }}
          >
            {/* ── Top bar: only Close button on the right ── */}
            <div className="flex items-center justify-end px-8 h-14 shrink-0">
              <CloseButton onClick={() => setSidebarOpen(false)} />
            </div>

            {/* ── Nav links — top-left, large thin uppercase ── */}
            <motion.nav
              className="flex flex-col px-8 md:px-16 lg:px-20 pt-8 md:pt-12 flex-1"
              variants={navContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <motion.div key={label} variants={navItemVariants}>
                  <Link
                    href={href}
                    onClick={() => setSidebarOpen(false)}
                    className="block font-sans font-light text-black hover:opacity-40 transition-opacity pt-6 md:pt-10 duration-200 uppercase leading-none"
                    style={{
                      fontSize: "clamp(3rem, 9vw, 7rem)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* ── Bottom bar ── */}
            <motion.div
              variants={bottomVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="shrink-0 px-8 md:px-16 lg:px-20 pb-8 md:pb-10"
            >
              {/* Horizontal rule */}
              <div className="w-full border-t border-black/30 mb-5" />

              <div className="flex items-end sm:items-center justify-between gap-4">
                {/* Left: Name + social icons */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <p
                    className="font-sans font-bold text-black uppercase tracking-tight leading-none"
                    style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)" }}
                  >
                    Naufal Labib Nugroho
                  </p>
                  <div className="flex items-center gap-2">
                    {SOCIAL_LINKS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="relative w-8 h-8 rounded-sm overflow-hidden flex items-center justify-center bg-black/8 hover:bg-black/15 transition-colors duration-200"
                      >
                        <Image
                          src={s.icon}
                          alt={s.label}
                          fill
                          sizes="32px"
                          className="object-contain p-1"
                        />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right: Arrow button */}
                <Link
                  href="/about"
                  onClick={() => setSidebarOpen(false)}
                  aria-label="Go to About"
                  className="group flex shrink-0 items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black hover:bg-black/80 transition-colors duration-300"
                  style={{ borderRadius: "4px" }}
                >
                  <span className="text-white text-2xl font-light transition-transform duration-300 group-hover:translate-x-1 inline-block">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
