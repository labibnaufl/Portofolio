export default function About() {
  return (
    <div className="flex-1 flex flex-col items-center justify-start min-h-[calc(100vh-5rem)] py-24 px-6 relative w-full">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="z-10 w-full max-w-4xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Me</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-lg text-neutral-300 leading-relaxed font-light">
            <p>
              Hi there! I am a passionate web developer with a keen eye for design and a strong foundation in modern web technologies. 
              My journey started with a curiosity for how things work on the internet, and it has evolved into a career 
              dedicated to building seamless, interactive, and accessible digital products.
            </p>
            <p>
              I specialize in React, Next.js, and TypeScript, continuously exploring the bleeding edge of the front-end ecosystem.
              Whether it is crafting pixel-perfect user interfaces, optimizing performance, or writing clean and maintainable code,
              I tackle each project with dedication and enthusiasm.
            </p>
            <p>
              When I'm not coding, you can find me exploring new design trends, contributing to open-source, or enjoying a good cup of coffee while reading about the latest tech innovations.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="text-xl font-semibold text-white mb-6">Tech Stack</h3>
            
            <div className="flex flex-wrap gap-3">
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Figma', 'Git', 'Vercel'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-neutral-300 hover:bg-white/10 hover:text-white transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-white mb-6">Experience</h3>
              <div className="space-y-6">
                <div className="relative pl-6 border-l border-white/10">
                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5 ring-4 ring-neutral-950"></div>
                  <h4 className="text-white font-medium">Senior Frontend Engineer</h4>
                  <p className="text-sm text-neutral-500 mt-1">Tech Innovations Inc. • 2021 - Present</p>
                </div>
                <div className="relative pl-6 border-l border-white/10">
                  <div className="absolute w-3 h-3 bg-neutral-600 rounded-full -left-[6.5px] top-1.5 ring-4 ring-neutral-950"></div>
                  <h4 className="text-white font-medium">Web Developer</h4>
                  <p className="text-sm text-neutral-500 mt-1">Creative Agency • 2018 - 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
