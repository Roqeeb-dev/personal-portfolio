import { projectData } from "@/lib/data";

export default function ProjectCard() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5">
      {projectData.map((project) => (
        <article key={project.title}>
          <div className="w-full">
            <img
              src={project.image}
              alt={`${project.title} image`}
              className="w-full h-full object-cover"
            />
          </div>

          <section className="px-3 py-2">
            <p>{project.title}</p>
            <p>{project.description}</p>
            <div>
              {project.technologies.map((t, idx) => (
                <p key={idx}>{t}</p>
              ))}
            </div>
          </section>
        </article>
      ))}
    </section>
  );
}
