"use client";

import { motion } from "framer-motion";
import { Code2, BookOpen, Layers, Zap } from "lucide-react";

const cards = [
  {
    icon: Layers,
    iconColor: "text-primary",
    iconBg: "bg-primary/5 border-primary/10",
    tag: "Architecture",
    title: "State that makes sense",
    body: "I keep Zustand for UI-only state and TanStack Query for server state — strictly separated, no cache duplication. Components stay thin and testable.",
  },
  {
    icon: Code2,
    iconColor: "text-accent",
    iconBg: "bg-accent/5 border-accent/10",
    tag: "Stack",
    title: "Next.js · TypeScript · Tailwind",
    body: "My core trio across every project. I reach for Framer Motion for animation, Mapbox GL JS for geo, and Cloudinary for media — tools I've used in production, not just tutorials.",
  },
  {
    icon: Zap,
    iconColor: "text-primary",
    iconBg: "bg-primary/5 border-primary/10",
    tag: "Process",
    title: "Ship first, then refine",
    body: "I prioritise getting something live and real over perfect upfront design. Tayora Sustain and LASU Navigate both went from zero to deployed in weeks — then improved iteratively.",
  },
  {
    icon: BookOpen,
    iconColor: "text-accent",
    iconBg: "bg-accent/5 border-accent/10",
    tag: "Teaching",
    title: "I also teach what I build",
    body: "Designed and deliver a 16-week frontend curriculum at Tektariq Academy — covering Next.js, TypeScript, Tailwind, Git, and interview prep. Teaching sharpens how I think about fundamentals.",
  },
];

export default function AboutCard() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group border border-border bg-card p-6 transition-all duration-300 ease-out hover:border-foreground hover:shadow-lg flex flex-col gap-4"
          >
            <div className="flex items-start justify-between">
              <div
                className={`w-10 h-10 rounded-xl border flex items-center justify-center ${card.iconBg}`}
              >
                <Icon className={`w-5 h-5 ${card.iconColor}`} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-foreground-muted mt-1">
                {card.tag}
              </span>
            </div>
            <div>
              <p className="font-semibold text-base text-foreground mb-1.5 group-hover:text-foreground transition-colors">
                {card.title}
              </p>
              <p className="text-sm leading-relaxed text-foreground-muted group-hover:text-foreground-muted transition-colors">
                {card.body}
              </p>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
