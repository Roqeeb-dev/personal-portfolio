"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Pill from "./Pill";
import Button from "./Button";
import Icon from "./Icon";
import { useViewModeStore } from "@/store/viewModeStore";
import { experienceData } from "@/lib/data";

const credentials = [
  { label: "First Class", sub: "LASU · CGPA 4.69" },
  { label: "IOTB-TECH 2025", sub: "Best Web Dev Graduate" },
  { label: "Tektariq", sub: "Engineering Intern" },
  { label: "Academy", sub: "Instructor · 16-week curriculum" },
];

const heroCopy = {
  recruiter: {
    heading: (
      <>
        Frontend engineer,
        <br />
        <span className="relative inline-block mt-2">
          <span className="relative z-10 text-primary font-semibold tracking-[-0.03em]">
            shipping products
          </span>
          <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/20 -z-10 transform -skew-x-12" />
        </span>
      </>
    ),
    description: (
      <>
        I&apos;ve shipped production apps across{" "}
        <strong className="font-semibold text-foreground">
          edtech, circular economy, and GIS
        </strong>{" "}
        — solo frontend across 3 MVPs, graduating First Class from Lagos State
        University in August 2026 and actively looking for remote frontend
        roles.
      </>
    ),
  },
  engineer: {
    heading: (
      <>
        Crafting Digital
        <br />
        <span className="relative inline-block mt-2">
          <span className="relative z-10 text-primary font-semibold tracking-[-0.03em]">
            Experiences
          </span>
          <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/20 -z-10 transform -skew-x-12" />
        </span>
      </>
    ),
    description: (
      <>
        <span className="inline-block relative px-3 py-1 text-foreground font-medium border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-300">
          Frontend engineer
        </span>{" "}
        specialising in Next.js, TypeScript, and Tailwind. I care about clean
        architecture, predictable state, and interfaces that feel fast.
      </>
    ),
  },
};

const timelineIcons: Record<string, string> = {
  work: "💼",
  award: "🏆",
  education: "🎓",
};

export default function Hero() {
  const { mode } = useViewModeStore();
  const isRecruiter = mode === "recruiter";
  const copy = heroCopy[mode];

  return (
    <main className="relative w-full pb-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      {/* Subtle grain */}
      <div className="absolute inset-0 opacity-[0.025] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiAvPjwvc3ZnPg==')]" />

      {/* Orbs */}
      <div
        className="absolute top-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-40 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "6s", animationDelay: "1s" }}
      />

      <section className="relative min-h-screen max-w-6xl mx-auto px-6 flex flex-col items-center justify-center space-y-8">
        {/* Pill */}
        <div
          className="animate-fadeInDown"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <Pill />
        </div>

        {/* Heading */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={`heading-${mode}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] text-center tracking-[-0.02em] font-light text-foreground"
          >
            {copy.heading}
          </motion.h1>
        </AnimatePresence>

        {/* Description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`desc-${mode}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="max-w-2xl text-xl text-foreground-muted text-center leading-relaxed"
          >
            {copy.description}
          </motion.p>
        </AnimatePresence>

        {/* Credential strip */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 animate-fadeInDown"
          style={{ animationDelay: "0.35s", opacity: 0 }}
        >
          {credentials.map((c, i) => (
            <div
              key={i}
              className="flex flex-col items-center px-4 py-2 rounded-xl border border-border bg-card shadow-sm"
            >
              <span className="text-xs font-bold text-foreground">
                {c.label}
              </span>
              <span className="text-[11px] text-foreground-muted">{c.sub}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col md:flex-row items-center gap-4 pt-2 animate-fadeInDown"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          <Button
            text="View My Work"
            variant="primary"
            icon={ArrowDown}
            href="#projects"
          />
          <Button text="Get in Touch" variant="secondary" href="#contact" />
        </div>

        <AnimatePresence>
          {isRecruiter && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="w-full max-w-2xl overflow-hidden"
            >
              <div className="border border-border rounded-2xl bg-card shadow-sm px-6 py-5 mt-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted mb-4">
                  Experience & recognition
                </p>
                <div className="space-y-4">
                  {experienceData.map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="text-base mt-0.5">
                        {timelineIcons[item.type]}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2 flex-wrap">
                          <p className="text-sm font-semibold text-foreground">
                            {item.role}
                          </p>
                          <span className="text-xs text-foreground-muted flex-shrink-0">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-xs text-foreground-muted mt-0.5">
                          {item.company} — {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Social icons */}
      <div
        className="relative flex items-center justify-center gap-6 animate-fadeInUp"
        style={{ animationDelay: "0.5s", opacity: 0 }}
      >
        <Icon href="https://github.com/Roqeeb-dev" icon={Github} />
        <div className="w-px h-6 bg-border" />
        <Icon
          href="https://www.linkedin.com/in/roqeeb-shafiriyu-51288b29a/"
          icon={Linkedin}
        />
        <div className="w-px h-6 bg-border" />
        <Icon href="mailto:shafiriyuroqeeb@gmail.com" icon={Mail} />
      </div>
    </main>
  );
}
