"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ProjectData } from "@/lib/data";
import Image from "next/image";
import { Github, ExternalLink, Clock, ChevronRight } from "lucide-react";
import { useViewModeStore } from "@/store/viewModeStore";

interface ProjectCardProps {
  project: ProjectData;
  idx: number;
}

export function ProjectCard({ project, idx }: ProjectCardProps) {
  const { mode } = useViewModeStore();
  const isRecruiter = mode === "recruiter";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden border border-border bg-card shadow-sm transition-shadow duration-300 ease-out hover:shadow-md flex flex-col"
    >
      {/* Image */}
      <div className="relative w-full h-56 sm:h-64 overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />

        {/* Status pill */}
        <div className="absolute top-3 left-3 z-10">
          {project.comingSoon ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-warning/10 text-warning border border-warning/20 shadow-sm">
              <Clock className="w-3 h-3" />
              Coming Soon
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-success/10 text-success border border-success/20 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              Live
            </span>
          )}
        </div>

        {/* Role badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-foreground/80 text-background backdrop-blur-sm">
            {project.role}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-all duration-300" />
        {!project.comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.githubRepoLink && (
              <motion.a
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                href={project.githubRepoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center shadow-lg"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            )}
            {project.liveLink && (
              <motion.a
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center shadow-lg"
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            )}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted mb-2">
          {project.category === "fullstack" ? "Full-stack" : "Frontend"}
        </p>
        <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground mb-3">
          {project.shortTitle}
        </h3>

        <AnimatePresence mode="wait">
          {isRecruiter ? (
            <motion.div
              key="recruiter"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col flex-1"
            >
              <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                {project.recruiterSummary}
              </p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="bg-background-subtle border border-border rounded-lg px-3 py-2 text-center"
                  >
                    <p className="text-sm font-bold text-primary">{m.value}</p>
                    <p className="text-[11px] text-foreground-muted mt-0.5">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.technologies.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-muted text-foreground-muted px-2.5 py-0.5 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="rounded-md bg-muted text-foreground-muted px-2.5 py-0.5 text-xs font-medium">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="engineer"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col flex-1"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted mb-1">
                Problem
              </p>
              <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                {project.problem}
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted mb-2">
                Key decisions
              </p>
              <ul className="space-y-2 mb-4">
                {project.engineerHighlights.slice(0, 3).map((h, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm text-foreground-muted"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.technologies.map((t) => (
                  <motion.span
                    key={t}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-md bg-muted text-foreground-muted px-2.5 py-0.5 text-xs font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer links */}
        {!project.comingSoon && (
          <div className="flex items-center gap-4 mt-5 pt-4 border-t border-border flex-wrap">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live site
              </a>
            )}
            {project.githubRepoLink && (
              <a
                href={project.githubRepoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground-muted hover:text-foreground transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                Source
              </a>
            )}
            {project.featured && (
              <a
                href={`/projects/${project.shortTitle.toLowerCase().replace(/\s+/g, "-")}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover transition-colors ml-auto"
              >
                Case study
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
