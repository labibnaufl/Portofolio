"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ── Section → header color map ─────────────────────────────────────────────
type HeaderTheme = { bg: string; color: string };

const SECTION_THEMES: Record<string, HeaderTheme> = {
  // Home page
  "section-hero":             { bg: "#000000", color: "#ffffff" },
  "section-intro":            { bg: "#ffffff", color: "#000000" },
  "section-quotes":           { bg: "#000000", color: "#ffffff" },
  "section-deepdive":         { bg: "#F8F8F4", color: "#000000" },
  "section-techstack":        { bg: "#F8F8F4", color: "#000000" },
  "section-persuasive":       { bg: "#F8F8F4", color: "#000000" },
  "section-footer":           { bg: "#ffffff", color: "#000000" },
  // About page
  "about-hero":               { bg: "#ffffff", color: "#000000" },
  "about-profile":            { bg: "#000000", color: "#ffffff" },
  "about-experiences":        { bg: "#000000", color: "#ffffff" },
  "about-projects":           { bg: "#000000", color: "#ffffff" },
  "about-activities":         { bg: "#000000", color: "#ffffff" },
};

const DEFAULT: HeaderTheme = { bg: "#000000", color: "#ffffff" };

export function MainHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<HeaderTheme>(DEFAULT);

  useEffect(() => {
    const ids = Object.keys(SECTION_THEMES);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    // The observer's root margin creates a 1px-tall detection band
    // sitting just below the navbar (56px). Whichever section enters
    // that band sets the header theme.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTheme(SECTION_THEMES[entry.target.id] ?? DEFAULT);
          }
        });
      },
      {
        // top offset = navbar height, bottom offset shrinks the band to ~1px
        rootMargin: "-56px 0px -93% 0px",
        threshold: 0,
      }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Navbar ─────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-14 transition-colors duration-300"
        style={{ backgroundColor: theme.bg }}
      >
        {/* Brand */}
        <Link
          href="/"
          className="font-serif text-xl md:text-2xl font-normal tracking-wide hover:opacity-60 transition-colors duration-300"
          style={{ color: theme.color }}
        >
          bibbb
        </Link>

        {/* MENU button */}
        <button
          id="sidebar-toggle"
          aria-label="Toggle menu"
          aria-expanded={sidebarOpen}
          onClick={() => setSidebarOpen(true)}
          className="text-xl md:text-2xl font-semibold font-sans tracking-[0.25em] uppercase hover:opacity-60 transition-colors duration-300"
          style={{ color: theme.color }}
        >
          MENU
        </button>
      </header>

      {/* ── Overlay ────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 z-40 bg-black/70 transition-opacity duration-500 ${
          sidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── Sidebar ────────────────────────────────────────── */}
      <aside
        aria-label="Navigation sidebar"
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-black border-l border-white/10 flex flex-col transition-transform duration-500 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-8 h-14 border-b border-white/10">
          <span className="text-white text-xs font-sans tracking-[0.25em] uppercase">
            MENU
          </span>
          <button
            aria-label="Close menu"
            onClick={() => setSidebarOpen(false)}
            className="text-white/40 hover:text-white transition-colors text-lg leading-none"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col p-8 flex-1">
          {[
            { label: "Home",     href: "/" },
            { label: "About",    href: "/about" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setSidebarOpen(false)}
              className="py-5 font-serif text-3xl text-white/70 hover:text-white border-b border-white/10 transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
