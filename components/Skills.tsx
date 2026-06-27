"use client";

import { motion, AnimatePresence } from "framer-motion";
import { techStackData } from "@/lib/data";
import { useViewModeStore } from "@/store/viewModeStore";

const categoryMeta: Record<
  string,
  { label: string; description: string; color: string; bg: string }
> = {
  frontend: {
    label: "Frontend",
    description: "UI, components, animation",
    color: "text-blue-700",
    bg: "bg-blue-50 border-blue-100",
  },
  language: {
    label: "Languages",
    description: "JavaScript & TypeScript",
    color: "text-violet-700",
    bg: "bg-violet-50 border-violet-100",
  },
  backend: {
    label: "Backend & Data",
    description: "APIs, databases, ORMs",
    color: "text-emerald-700",
    bg: "bg-emerald-50 border-emerald-100",
  },
  tooling: {
    label: "Tooling & Infra",
    description: "Git, deployment, integrations",
    color: "text-amber-700",
    bg: "bg-amber-50 border-amber-100",
  },
};

const categoryOrder = ["frontend", "language", "backend", "tooling"] as const;

export default function Skills() {
  const { mode } = useViewModeStore();
  const isRecruiter = mode === "recruiter";

  const grouped = categoryOrder.map((cat) => ({
    cat,
    meta: categoryMeta[cat],
    items: techStackData.filter((t) => t.category === cat),
  }));

  return (
    <main id="skills" className="max-w-[1400px] mx-auto px-6 py-20">
      {/* ── Section header ── */}
      <div className="mb-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="uppercase text-gray-400 tracking-widest text-xs font-semibold mb-2"
        >
          Expertise
        </motion.p>

        <AnimatePresence mode="wait">
          <motion.h2
            key={`heading-${mode}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="text-[clamp(2.5rem,7vw,4rem)] leading-[1.05] tracking-tight text-slate-900"
          >
            {isRecruiter ? (
              <>
                What I <br />
                <span className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 bg-clip-text text-transparent font-bold">
                  work with
                </span>
              </>
            ) : (
              <>
                Skills & <br />
                <span className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 bg-clip-text text-transparent font-bold">
                  Technologies
                </span>
              </>
            )}
          </motion.h2>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg leading-relaxed text-slate-500 max-w-xl mt-3"
        >
          {isRecruiter
            ? "My core stack across every project I've shipped — grouped by concern."
            : "Proficient in modern tools and frameworks, with a focus on scalable, performant frontend architecture."}
        </motion.p>
      </div>

      <AnimatePresence mode="wait">
        {isRecruiter ? (
          <motion.div
            key="recruiter"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {grouped.map(({ cat, meta, items }, groupIdx) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: groupIdx * 0.07 }}
                viewport={{ once: true }}
                className={`border rounded-2xl p-5 ${meta.bg}`}
              >
                <div className="mb-4">
                  <p className={`text-sm font-bold ${meta.color}`}>
                    {meta.label}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {meta.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item.text}
                      className="px-3 py-1.5 rounded-lg bg-white border border-white/80 text-xs font-semibold text-gray-700 shadow-sm"
                    >
                      {item.text}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="engineer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            {grouped.map(({ cat, meta, items }, groupIdx) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: groupIdx * 0.06 }}
                viewport={{ once: true }}
              >
                {/* Group heading */}
                <div className="flex items-center gap-3 mb-4">
                  <p
                    className={`text-xs font-bold uppercase tracking-widest ${meta.color}`}
                  >
                    {meta.label}
                  </p>
                  <div className="flex-1 h-px bg-gray-100" />
                </div>

                {/* Skill chips */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {items.map((item, itemIdx) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: groupIdx * 0.06 + itemIdx * 0.04,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ y: -3 }}
                      className="group flex items-center gap-2.5 p-3 border border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-200"
                    >
                      {/* Colour dot */}
                      <span
                        className={`w-2 h-2 rounded-full flex-shrink-0 ${
                          cat === "frontend"
                            ? "bg-blue-500"
                            : cat === "language"
                              ? "bg-violet-500"
                              : cat === "backend"
                                ? "bg-emerald-500"
                                : "bg-amber-500"
                        }`}
                      />
                      <p className="text-sm font-medium text-slate-800 group-hover:text-slate-900 transition-colors">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
