type Experience = {
  company: string;
  role: string;
  period: string;
};

const experiences: Experience[] = [
  {
    company: "CV. Rekayasa Desain Manufaktur (REDESMA)",
    role: "Junior Software Developer",
    period: "Juni – Desember 2025",
  },
  {
    company: "Freelance Web Developer (Self-Employed)",
    role: "Fullstack Web Developer",
    period: "2024 – Present",
  },
];

export const ExperiencesSection = () => {
  return (
    <section className="w-full bg-black px-6 py-16 md:px-16 lg:px-32 xl:px-48">
      <h2
        className="font-serif font-bold text-white mb-8 tracking-tight leading-tight"
        style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
      >
        Experiences
      </h2>

      <hr className="border-t border-white/20 mb-0" />

      {experiences.map((exp, i) => (
        <div key={i}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 items-start">
            <p
              className="text-white font-bold leading-snug"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)" }}
            >
              {exp.company}
            </p>
            <p className="text-white text-sm md:text-base">{exp.role}</p>
            <p className="text-white text-sm md:text-base">{exp.period}</p>
          </div>
          <hr className="border-t border-white/20" />
        </div>
      ))}
    </section>
  );
};