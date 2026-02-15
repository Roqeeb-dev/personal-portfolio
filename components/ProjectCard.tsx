import { projectData } from "@/lib/data";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 my-8">
      {projectData.map((project) => (
        <article
          key={project.title}
          className="group overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-300 ease-out hover:shadow-lg"
        >
          <div className="relative w-full h-96 overflow-hidden">
            {/* Image */}
            <Image
              src={project.image}
              alt={`${project.title} image`}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black transition-opacity duration-300 opacity-0 group-hover:opacity-60"></div>

            {/* Centered Icons */}
            <div className="absolute inset-0 flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href={project.githubRepoLink} target="__blank">
                <Github className="w-10 h-10 bg-white hover:bg-gray-100 text-black p-2 cursor-pointer transition-transform duration-200" />
              </a>
              <a href={project.liveLink} target="__blank">
                <ExternalLink className="w-10 h-10 bg-white hover:bg-gray-100 text-black p-2 cursor-pointer transition-transform duration-200" />
              </a>
            </div>
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
