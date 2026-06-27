"use client";

import { motion, AnimatePresence } from "framer-motion";
import { techStackData } from "@/lib/data";
import { useViewModeStore } from "@/store/viewModeStore";

const categoryMeta: Record<
  string,
  {
    label: string;
    description: string;
    color: string;
    dotColor: string;
    borderColor: string;
  }
> = {
  frontend: {
    label: "Frontend",
    description:
      "Where interfaces come to life — components, layout, animation, and everything the user actually sees and touches.",
    color: "text-primary",
    dotColor: "bg-primary",
    borderColor: "border-primary/15",
  },
  language: {
    label: "Languages",
    description:
      "The foundation everything else is built on. TypeScript is my default — JavaScript when I need to move fast.",
    color: "text-accent",
    dotColor: "bg-accent",
    borderColor: "border-accent/15",
  },
  backend: {
    label: "Backend & Data",
    description:
      "APIs, databases, and ORMs. Enough depth to build and debug full-stack features without waiting on a backend developer.",
    color: "text-primary",
    dotColor: "bg-primary",
    borderColor: "border-primary/15",
  },
  tooling: {
    label: "Tooling & Infra",
    description:
      "Git, deployment pipelines, media management, and the glue that holds production apps together.",
    color: "text-accent",
    dotColor: "bg-accent",
    borderColor: "border-accent/15",
  },
};

const categoryOrder = ["frontend", "language", "backend", "tooling"] as const;

function TechCircle({ label }: { label: string }) {
  const abbr = label
    .replace(/\.(js|ts|css)$/i, "")
    .split(/[\s/]+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      title={label}
      className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center text-[10px] font-bold tracking-tight flex-shrink-0 border-2 border-background shadow-sm -ml-2 first:ml-0"
    >
      {abbr}
    </div>
  );
}

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
      {/* Header */}
      <div className="mb-14">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="uppercase text-foreground-muted tracking-widest text-xs font-semibold mb-4"
        >
          Expertise
        </motion.p>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <AnimatePresence mode="wait">
            <motion.h2
              key={`heading-${mode}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] tracking-tight font-bold text-foreground"
            >
              {isRecruiter ? (
                <>
                  What I <span className="text-primary">work with.</span>
                </>
              ) : (
                <>
                  Skills & <span className="text-primary">Tools.</span>
                </>
              )}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${mode}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-sm text-foreground-muted leading-relaxed max-w-xs sm:text-right pb-1"
            >
              {isRecruiter
                ? "My core stack across every production app I've shipped — grouped by concern."
                : "The tools I reach for in production. Grouped by layer, not by hype."}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Category rows */}
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25 }}
          className="divide-y divide-border border-t border-border"
        >
          {grouped.map(({ cat, meta, items }, groupIdx) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: groupIdx * 0.07 }}
              viewport={{ once: true }}
              className="py-10 grid grid-cols-1 md:grid-cols-[200px_1fr_auto] gap-6 md:gap-12 items-start"
            >
              {/* Category label */}
              <div>
                <p className={`text-base font-bold mb-1.5 ${meta.color}`}>
                  {meta.label}
                </p>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  {meta.description}
                </p>
              </div>

              {/* Skills */}
              {isRecruiter ? (
                <div className="flex flex-wrap gap-x-8 gap-y-2">
                  {items.map((item) => (
                    <span
                      key={item.text}
                      className="text-base font-semibold text-foreground"
                    >
                      {item.text}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                  {items.map((item, itemIdx) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.25,
                        delay: groupIdx * 0.05 + itemIdx * 0.04,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ x: 3 }}
                      className={`flex items-center gap-2.5 px-3 py-2.5 border ${meta.borderColor} bg-card hover:shadow-sm transition-all duration-200 group`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full flex-shrink-0 ${meta.dotColor}`}
                      />
                      <span className="text-sm font-medium text-foreground group-hover:text-foreground transition-colors">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Icon circles */}
              <div className="flex items-center">
                {items.map((item) => (
                  <TechCircle key={item.text} label={item.text} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
