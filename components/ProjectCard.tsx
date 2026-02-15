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
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
            {/* Image */}
            <Image
              src={project.image}
              alt={`${project.title} image`}
              fill
              className="object-contain md:object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 rounded-t-xl"></div>

            {/* Centered Icons */}
            <div className="absolute inset-0 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.githubRepoLink && (
                <a
                  href={project.githubRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform duration-200"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          <section className="p-6">
            <p className="my-2 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
              {project.title}
            </p>

            <p className="my-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-2 mt-4">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="rounded-md bg-blue-50 text-blue-800 px-3 py-1 text-sm font-medium transition-all hover:bg-blue-100"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>
        </article>
      ))}
    </section>
  );
}
