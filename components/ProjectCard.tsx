import { projectData } from "@/lib/data";

export default function ProjectCard() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 my-8">
      {projectData.map((project) => (
        <article
          key={project.title}
          className="group overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className="relative w-full h-96 overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} image`}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>

          <section className="p-6">
            <p className="my-2 text-2xl font-semibold tracking-tight text-gray-900">
              {project.title}
            </p>

            <p className="my-4 text-gray-600 text-lg leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              {project.technologies.map((t, idx) => (
                <p
                  key={idx}
                  className="rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-900"
                >
                  {t}
                </p>
              ))}
            </div>
          </section>
        </article>
      ))}
    </section>
  );
}
