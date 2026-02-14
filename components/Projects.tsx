import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <main id="projects" className="max-w-[1400px] mx-auto px-6 py-20">
      <div className="mb-5">
        <p className="uppercase text-gray-500 tracking-widest text-sm font-medium">
          Selected Work
        </p>

        <h1 className="text-[clamp(2.5rem,7vw,4rem)] leading-[1.05] tracking-tight my-3">
          Featured <br />
          <span className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 bg-clip-text text-transparent font-bold">
            Projects
          </span>
        </h1>

        <p className="text-xl leading-relaxed text-gray-800 max-w-2xl">
          A curated selection of my recent work, showcasing expertise in design,
          development, and delivering exceptional user experiences.
        </p>
      </div>

      <ProjectCard />
    </main>
  );
}
