"use client";

import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Briefcase,
  Mouse,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useViewModeStore } from "@/store/viewModeStore";
import { experienceData } from "@/lib/data";
import Link from "next/link";

const infoPills = [
  { icon: Briefcase, label: "Open to Remote & Hybrid" },
  { icon: MapPin, label: "Based in Lagos, Nigeria" },
];

const stats = [
  { value: "3", label: "Production apps", sub: "shipped solo" },
  { value: "500+", label: "Cognify visitors", sub: "since launch" },
  { value: "16wk", label: "Curriculum", sub: "designed & taught" },
  { value: "2026", label: "First Class grad", sub: "Lagos State Uni" },
];

const timelineIcons: Record<string, string> = {
  work: "💼",
  award: "🏆",
  education: "🎓",
};

const heroCopy = {
  recruiter: {
    eyebrow: "Available for opportunities",
    heading: ["Frontend engineer,", "already", "shipping."],
    accentLine: 1,
    description:
      "I've shipped 3 production apps solo across edtech, circular economy, and GIS. Graduating First Class from Lagos State University in August 2026 and actively looking for remote frontend roles.",
  },
  engineer: {
    eyebrow: "Frontend · Next.js · TypeScript",
    heading: ["I build things", "people", "actually use."],
    accentLine: 1,
    description:
      "I specialise in Next.js 15, TypeScript, and Tailwind CSS. I care about clean architecture, predictable state management, and interfaces that feel instant.",
  },
};

export default function Hero() {
  const { mode } = useViewModeStore();
  const isRecruiter = mode === "recruiter";
  const copy = heroCopy[mode];

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden bg-background">
      {/* Grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiAvPjwvc3ZnPg==')]" />
      {/* Orbs */}
      <div className="pointer-events-none absolute top-0 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

      {/* ── Main content ── */}
      <div className="relative flex-1 flex flex-col items-center justify-center w-full px-5 sm:px-8 pt-20 pb-10">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center">
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-xs font-semibold text-foreground-muted tracking-wide mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <AnimatePresence mode="wait">
              <motion.span
                key={`eyebrow-${mode}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {copy.eyebrow}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Heading */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`heading-${mode}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="text-[clamp(2.8rem,9vw,5.5rem)] font-bold leading-[1.0] tracking-[-0.03em] text-foreground mb-6"
            >
              {copy.heading.map((line, i) => (
                <span key={i} className="block">
                  {i === copy.accentLine ? (
                    <span className="text-primary">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </motion.h1>
          </AnimatePresence>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${mode}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="text-base sm:text-lg text-foreground-muted leading-relaxed mb-8"
            >
              {copy.description}
            </motion.p>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-8"
          >
            {infoPills.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-5 py-3 border border-border bg-card text-sm font-medium text-foreground-muted"
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                {label}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.28 }}
            className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-10"
          >
            <Link
              href="#projects"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-foreground text-background px-8 py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/my-resume.pdf"
              target="_blank"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-border bg-transparent text-foreground px-8 py-3.5 text-sm font-semibold hover:border-foreground transition-colors"
            >
              View Resume
            </Link>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="flex items-center gap-4 mb-10"
          >
            {[
              {
                href: "https://github.com/Roqeeb-dev",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/roqeeb-shafiriyu-51288b29a/",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "mailto:shafiriyuroqeeb@gmail.com",
                icon: Mail,
                label: "Email",
              },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center border border-border text-foreground-muted hover:border-foreground hover:text-foreground transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>

          {/* Experience strip — recruiter only */}
          <AnimatePresence>
            {isRecruiter && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35 }}
                className="w-full overflow-hidden"
              >
                <div className="border border-border bg-card px-5 py-4 text-left">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-foreground-muted mb-3">
                    Experience & recognition
                  </p>
                  <div className="space-y-3">
                    {experienceData.map((item, i) => (
                      <div key={i} className="flex gap-2.5 items-start">
                        <span className="text-sm mt-0.5 flex-shrink-0">
                          {timelineIcons[item.type]}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline justify-between gap-2 flex-wrap">
                            <p className="text-xs font-semibold text-foreground">
                              {item.role}
                            </p>
                            <span className="text-[10px] text-foreground-muted flex-shrink-0">
                              {item.period}
                            </span>
                          </div>
                          <p className="text-[11px] text-foreground-muted mt-0.5 leading-snug">
                            {item.company}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Stats strip — always full width ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative w-full border-t border-border grid grid-cols-2 sm:grid-cols-4"
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-center justify-center py-6 px-4 text-center
              ${i !== stats.length - 1 ? "border-r border-border" : ""}
              ${i >= 2 ? "border-t border-border sm:border-t-0" : ""}
            `}
          >
            <span className="text-2xl sm:text-3xl font-bold text-foreground">
              {s.value}
            </span>
            <span className="text-xs font-semibold text-foreground mt-0.5">
              {s.label}
            </span>
            <span className="text-[10px] text-foreground-muted mt-0.5">
              {s.sub}
            </span>
          </div>
        ))}
      </motion.div>

      {/* ── Scroll indicator — desktop only ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="hidden sm:flex flex-col items-center gap-2 py-5 border-t border-border"
      >
        <Mouse className="w-5 h-5 text-foreground-muted" />
        <span className="text-[10px] font-semibold uppercase tracking-widest text-foreground-muted">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}
