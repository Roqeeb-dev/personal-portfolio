"use client";

import { motion } from "framer-motion";
import { projectData } from "@/lib/data";
import Image from "next/image";
import { Github, ExternalLink, Clock } from "lucide-react";

export default function ProjectCard() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 my-8">
      {projectData.map((project, idx) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="group overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-300 ease-out hover:shadow-lg"
        >
          <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} image`}
              fill
              className="object-contain md:object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />

            {/* Status Pill */}
            <div className="absolute top-3 left-3 z-10">
              {project.comingSoon ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 border border-amber-300 shadow-sm">
                  <Clock className="w-3 h-3" />
                  Coming Soon
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 border border-emerald-300 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
              )}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 rounded-t-xl" />

            {/* Centered Icons — hidden for coming soon */}
            {!project.comingSoon && (
              <div className="absolute inset-0 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.githubRepoLink && (
                  <motion.a
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubRepoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                )}
                {project.liveLink && (
                  <motion.a
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                )}
              </div>
            )}
          </div>

          <section className="p-6">
            <p className="my-2 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
              {project.title}
            </p>

            <p className="my-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-2 mt-4">
              {project.technologies.map((t, techIdx) => (
                <motion.span
                  key={techIdx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: techIdx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-md bg-blue-50 text-blue-800 px-3 py-1 text-sm font-medium transition-all hover:bg-blue-100"
                >
                  {t}
                </motion.span>
              ))}
            </div>

            {project.liveLink && !project.comingSoon && (
              <div className="lg:hidden mt-6">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </section>
        </motion.article>
      ))}
    </section>
  );
}
