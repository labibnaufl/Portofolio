type Activities = {
  organization: string;
  role: string;
  date: string;
};

const experiences: Activities[] = [
  {
    organization: 'Computer Engineering Research Club (CERC)',
    role:'Chairman',
    date:'2025 - Present',
  },
  {
    organization: 'Al Muharrik ',
    role:'Head of Public Relations',
    date:'2025 - 2026',
  },
  {
    organization: 'The ACE 2025: Competition Series',
    role:'Chief Organizer',
    date:'September 2025',
  },
  {
    organization: 'Simpul Negeri',
    role:'Public Relations Division Member',
    date:'2024 – Present',
  },
];

export const ActivitiesSection = () => {
  return (
    <section className="w-full bg-black px-6 py-16 md:px-16 lg:px-32 xl:px-48">
      <h2
        className="font-serif font-bold text-white mb-8 tracking-tight leading-tight"
        style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
      >
        Highlighted Work
      </h2>

      <hr className="border-t border-white/20 mb-0" />

      {experiences.map((exp, i) => (
        <div key={i}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 items-start">
            <p
              className="text-white font-bold leading-snug"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)" }}
            >
              {exp.organization}
            </p>
            <p className="text-white text-sm md:text-base">{exp.role}</p>
            <p className="text-white text-sm md:text-base">{exp.date}</p>
          </div>
          <hr className="border-t border-white/20" />
        </div>
      ))}
    </section>
  );
};