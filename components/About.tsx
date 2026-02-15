"use client";

import { motion } from "framer-motion";
import AboutCard from "./AboutCard";

export default function About() {
  return (
    <main
      id="about"
      className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-6 py-20 max-w-[1400px] mx-auto"
    >
      <section className="w-full lg:w-1/2">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="uppercase text-gray-500 tracking-widest text-sm font-medium"
        >
          About Me
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[clamp(2.5rem,7vw,4rem)] leading-[1.05] tracking-tight my-3"
        >
          Building the <br />
          <span className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 bg-clip-text text-transparent font-bold">
            Future of Web
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-lg leading-relaxed text-gray-600">
            I'm a passionate developer who loves crafting elegant solutions to
            complex problems. With expertise in modern web technologies, I
            create digital experiences that are both visually stunning and
            technically robust.
          </p>

          <p className="text-lg leading-relaxed text-gray-600 mt-4">
            My approach combines clean code architecture, thoughtful design, and
            a deep understanding of user needs to deliver products that make a
            real impact.
          </p>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          href="https://docs.google.com/document/d/1qw-Fb9qKjWaB8te4UOf7j9NjGyMuresa/edit?usp=drive_link&ouid=116454153911136080919&rtpof=true&sd=true"
          download
          target="__blank"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 border border-gray-300 text-gray-900 transition-all duration-300 ease-out hover:border-gray-900 hover:shadow-lg"
        >
          Download resume
        </motion.a>
      </section>

      <motion.section
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2"
      >
        <AboutCard />
      </motion.section>
    </main>
  );
}
