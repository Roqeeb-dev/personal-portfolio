"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectData } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { useViewModeStore } from "@/store/viewModeStore";

type Filter = "all" | "frontend" | "fullstack";

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Full-stack", value: "fullstack" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const { mode } = useViewModeStore();
  const isRecruiter = mode === "recruiter";

  const filtered = projectData.filter((p) =>
    activeFilter === "all" ? true : p.category === activeFilter,
  );

  return (
    <section id="projects" className="max-w-[1400px] mx-auto px-6 py-20">
      {/* Section header */}
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
          Work
        </p>
        <AnimatePresence mode="wait">
          <motion.h2
            key={mode}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900"
          >
            {isRecruiter
              ? "Projects & outcomes"
              : "Projects & technical decisions"}
          </motion.h2>
        </AnimatePresence>
        <p className="mt-3 text-gray-500 text-base max-w-xl">
          {isRecruiter
            ? "What I shipped, the problems each project solved, and the outcomes."
            : "The architectural decisions, patterns, and trade-offs behind each build."}
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex items-center gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
              activeFilter === f.value
                ? "text-white"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            {activeFilter === f.value && (
              <motion.span
                layoutId="filter-bg"
                className="absolute inset-0 bg-black rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{f.label}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filtered.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="text-gray-400 text-sm text-center py-16">
          No projects in this category yet.
        </p>
      )}
    </section>
  );
}
