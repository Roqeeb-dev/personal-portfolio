"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";
import { useViewModeStore } from "@/store/viewModeStore";
import AboutCard from "./AboutCard";

const stats = [
  { value: "3", label: "Production apps shipped" },
  { value: "4.69", label: "First Class CGPA" },
  { value: "16-week", label: "Curriculum designed & taught" },
  { value: "500+", label: "Cognify visitors" },
];

const copy = {
  recruiter: {
    heading: (
      <>
        Final-year CS student,{" "}
        <span className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 bg-clip-text text-transparent font-bold">
          already shipping.
        </span>
      </>
    ),
    body: [
      "I'm Roqeeb — a frontend engineer graduating First Class from Lagos State University in August 2026. Before graduation I've already shipped three production apps solo across edtech, circular economy, and GIS, interned at Tektariq IT Solutions, and designed and teach a 16-week frontend curriculum at Tektariq Academy.",
      "I'm actively looking for remote frontend roles at funded Nigerian or African startups where I can grow fast, own real features, and work on products that matter.",
    ],
  },
  engineer: {
    heading: (
      <>
        I build{" "}
        <span className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 bg-clip-text text-transparent font-bold">
          fast, clean frontends.
        </span>
      </>
    ),
    body: [
      "I'm Roqeeb — a frontend engineer based in Lagos. My stack is Next.js 15, TypeScript, Tailwind CSS, Zustand, and TanStack Query. I care about predictable state, clean component boundaries, and interfaces that feel instant.",
      "I've built across edtech (Cognify LMS), circular economy (Tayora Sustain), and GIS (LASU Navigate) — each one a solo frontend build with a real backend collaborator or API integration. I try to make architectural decisions I can defend, not just patterns I copied.",
    ],
  },
};

export default function About() {
  const { mode } = useViewModeStore();
  const activeCopy = copy[mode];

  return (
    <main id="about" className="max-w-[1400px] mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
        {/* ── Left column ── */}
        <section className="w-full lg:w-1/2 lg:sticky lg:top-28 self-start">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="uppercase text-gray-400 tracking-widest text-xs font-semibold mb-3"
          >
            About Me
          </motion.p>

          {/* Heading — mode-gated */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={`heading-${mode}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="text-[clamp(2rem,6vw,3.5rem)] leading-[1.1] tracking-tight mb-6 text-slate-900"
            >
              {activeCopy.heading}
            </motion.h2>
          </AnimatePresence>

          {/* Body copy — mode-gated */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`body-${mode}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {activeCopy.body.map((para, i) => (
                <p
                  key={i}
                  className="text-base sm:text-lg leading-relaxed text-gray-600"
                >
                  {para}
                </p>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-100"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-slate-900">{s.value}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-3 mt-8"
          >
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/Shafiriyu_Roqeeb_Taiwo_Frontend_Engineer_CV.pdf"
              download="Shafiriyu_Roqeeb_Taiwo_Frontend_Engineer_CV.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-sm font-medium hover:bg-gray-900 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download CV
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="https://www.linkedin.com/in/roqeeb-shafiriyu-51288b29a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-800 text-sm font-medium hover:border-gray-900 transition-colors"
            >
              LinkedIn
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </section>

        {/* ── Right column ── */}
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <AboutCard />
        </motion.section>
      </div>
    </main>
  );
}
