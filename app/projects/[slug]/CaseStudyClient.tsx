"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  ChevronRight,
  AlertTriangle,
  Zap,
} from "lucide-react";
import type { CaseStudyData } from "@/lib/data";

const SECTIONS = [
  { key: "problem", label: "Problem", emoji: "🎯" },
  { key: "discovery", label: "Discovery", emoji: "🔍" },
  { key: "strategy", label: "Strategy", emoji: "🧭" },
  { key: "design", label: "Design", emoji: "🛠️" },
  { key: "validation", label: "Validation", emoji: "✅" },
  { key: "tradeoffs", label: "Trade-offs", emoji: "⚖️" },
  { key: "impact", label: "Impact", emoji: "🚀" },
] as const;

type SectionKey = (typeof SECTIONS)[number]["key"];

interface Props {
  data: CaseStudyData;
}

function SectionHeading({ emoji, label }: { emoji: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-xl">{emoji}</span>
      <h2 className="text-lg font-bold text-foreground uppercase tracking-widest text-sm">
        {label}
      </h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

export default function CaseStudyClient({ data }: Props) {
  const [activeSection, setActiveSection] = useState<SectionKey>("problem");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach(({ key }) => {
      const el = sectionRefs.current[key];
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(key);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (key: SectionKey) => {
    sectionRefs.current[key]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
        <Image
          src={data.coverImage}
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 sm:px-10 pb-8 max-w-5xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-background/70 hover:text-background text-sm font-medium transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>
          <p className="text-background/60 text-xs font-semibold uppercase tracking-widest mb-2">
            Case Study
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-background leading-tight mb-2">
            {data.title}
          </h1>
          <p className="text-background/70 text-sm sm:text-base max-w-2xl">
            {data.subtitle}
          </p>
        </div>
      </div>

      {/* ── Meta strip ── */}
      <div className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-5 flex flex-wrap gap-6 items-center justify-between">
          <div className="flex flex-wrap gap-6">
            {[
              { label: "Role", value: data.role },
              { label: "Timeline", value: data.timeline },
              { label: "Team", value: data.team },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-foreground-muted mb-0.5">
                  {m.label}
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {m.value}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {data.githubLink && (
              <a
                href={data.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground-muted hover:text-foreground border border-border px-3 py-1.5 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                Source
              </a>
            )}
            {data.liveLink && (
              <a
                href={data.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-foreground bg-primary hover:bg-primary-hover px-3 py-1.5 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live site
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Tech tags ── */}
      <div className="border-b border-border bg-background-subtle">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-3 flex flex-wrap gap-2">
          {data.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium bg-card border border-border text-foreground-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Body: sidebar + content ── */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-12 flex gap-12 items-start">
        {/* Sticky sidebar nav — desktop only */}
        <aside className="hidden lg:flex flex-col gap-1 w-44 flex-shrink-0 sticky top-28">
          <p className="text-[10px] font-bold uppercase tracking-widest text-foreground-muted mb-3">
            Sections
          </p>
          {SECTIONS.map(({ key, label, emoji }) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className={`flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-left transition-all duration-200 rounded-sm ${
                activeSection === key
                  ? "bg-primary/8 text-primary border-l-2 border-primary"
                  : "text-foreground-muted hover:text-foreground hover:bg-background-subtle"
              }`}
            >
              <span className="text-base leading-none">{emoji}</span>
              {label}
            </button>
          ))}
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0 space-y-16">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-6 bg-card border border-border"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-foreground-muted mb-2">
              Overview
            </p>
            <p className="text-base text-foreground leading-relaxed">
              {data.overview}
            </p>
          </motion.div>

          {/* Problem */}
          <section
            ref={(el) => {
              sectionRefs.current["problem"] = el;
            }}
          >
            <SectionHeading emoji="🎯" label="Problem" />
            <p className="text-base text-foreground-muted leading-relaxed">
              {data.sections.problem}
            </p>
          </section>

          {/* Discovery */}
          <section
            ref={(el) => {
              sectionRefs.current["discovery"] = el;
            }}
          >
            <SectionHeading emoji="🔍" label="Discovery" />
            <ul className="space-y-4">
              {data.sections.discovery.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="flex gap-3"
                >
                  <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <p className="text-base text-foreground-muted leading-relaxed">
                    {point}
                  </p>
                </motion.li>
              ))}
            </ul>
          </section>

          {/* Strategy */}
          <section
            ref={(el) => {
              sectionRefs.current["strategy"] = el;
            }}
          >
            <SectionHeading emoji="🧭" label="Strategy" />
            <p className="text-base text-foreground-muted leading-relaxed">
              {data.sections.strategy}
            </p>
          </section>

          {/* Design */}
          <section
            ref={(el) => {
              sectionRefs.current["design"] = el;
            }}
          >
            <SectionHeading emoji="🛠️" label="Design & Build" />
            <div className="space-y-4">
              {data.sections.design.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex gap-3 p-4 bg-card border border-border"
                >
                  <Zap className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                  <p className="text-sm text-foreground leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Validation */}
          <section
            ref={(el) => {
              sectionRefs.current["validation"] = el;
            }}
          >
            <SectionHeading emoji="✅" label="Validation" />
            <p className="text-base text-foreground-muted leading-relaxed">
              {data.sections.validation}
            </p>
          </section>

          {/* Trade-offs */}
          <section
            ref={(el) => {
              sectionRefs.current["tradeoffs"] = el;
            }}
          >
            <SectionHeading emoji="⚖️" label="Trade-offs" />
            <div className="space-y-4">
              {data.sections.tradeoffs.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex gap-3 p-4 bg-background-subtle border border-border"
                >
                  <AlertTriangle className="w-4 h-4 text-warning flex-shrink-0 mt-1" />
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Impact */}
          <section
            ref={(el) => {
              sectionRefs.current["impact"] = el;
            }}
          >
            <SectionHeading emoji="🚀" label="Impact" />
            <div className="p-6 bg-primary/5 border border-primary/15">
              <p className="text-base text-foreground leading-relaxed">
                {data.sections.impact}
              </p>
            </div>
          </section>

          {/* Footer nav */}
          <div className="flex items-center justify-between pt-8 border-t border-border">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground-muted hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All projects
            </Link>
            <div className="flex gap-3">
              {data.githubLink && (
                <a
                  href={data.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground-muted hover:text-foreground border border-border px-3 py-1.5 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" /> Source
                </a>
              )}
              {data.liveLink && (
                <a
                  href={data.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-foreground bg-primary hover:bg-primary-hover px-3 py-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Live site
                </a>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
