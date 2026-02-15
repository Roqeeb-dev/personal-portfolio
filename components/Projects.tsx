"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <main id="projects" className="bg-gray-200/10">
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="mb-5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="uppercase text-gray-500 tracking-widest text-sm font-medium"
          >
            Selected Work
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[clamp(2.5rem,7vw,4rem)] leading-[1.05] tracking-tight my-3"
          >
            Featured <br />
            <span className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 bg-clip-text text-transparent font-bold">
              Projects
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl leading-relaxed text-gray-800 max-w-2xl"
          >
            A curated selection of my recent work, showcasing expertise in
            design, development, and delivering exceptional user experiences.
          </motion.p>
        </div>

        <ProjectCard />
      </section>
    </main>
  );
}
