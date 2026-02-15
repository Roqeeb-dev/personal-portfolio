import ProjectCard from "./ProjectCard";
import Button from "./Button";

export default function Projects() {
  return (
    <main id="projects" className="bg-gray-200/10">
      <section className="max-w-[1400px] mx-auto px-6 py-20">
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
            A curated selection of my recent work, showcasing expertise in
            design, development, and delivering exceptional user experiences.
          </p>
        </div>

        <ProjectCard />

        <div className="flex items-center justify-center w-full mt-10">
          <Button variant="secondary" text="View all projects" />
        </div>
      </section>
    </main>
  );
}
