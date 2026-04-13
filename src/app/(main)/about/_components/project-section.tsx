type Projects = {
  name: string;
  role: string;
  type: string;
};

const experiences: Projects[] = [
  {
    name: "PATRA GANESHA",
    role: "Fullstack Developer",
    type: "Freelance",
  },
  {
    name: "23FLEX",
    role: "Fullstack Developer",
    type: "Academic Project",
  },

  {
    name: "PLTU Machine Monitoring",
    role: "Fullstack and Machine Learning Developer",
    type: "Part Time Project",
  },

  {
    name: "Cypher Calculator",
    role: "FrontEnd Developer",
    type: "Academic Project",
  },
];

export const ProjectSection = () => {
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
              {exp.name}
            </p>
            <p className="text-white text-sm md:text-base">{exp.role}</p>
            <p className="text-white text-sm md:text-base">{exp.type}</p>
          </div>
          <hr className="border-t border-white/20" />
        </div>
      ))}
    </section>
  );
};