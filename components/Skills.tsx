"use client";

import { motion } from "framer-motion";
import { techStackData } from "@/lib/data";

export default function Skills() {
  return (
    <main id="skills" className="max-w-[1400px] mx-auto px-6 py-20">
      <div className="mb-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="uppercase text-gray-500 tracking-widest text-sm font-medium"
        >
          Expertise
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[clamp(2.5rem,7vw,4rem)] leading-[1.05] tracking-tight my-3 text-slate-900"
        >
          Skills and <br />
          <span className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 bg-clip-text text-transparent font-bold">
            Technologies
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl leading-relaxed text-slate-700 max-w-2xl"
        >
          Proficient in modern development tools and frameworks, with a focus on
          creating scalable, performant applications.
        </motion.p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {techStackData.map((obj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group relative p-5 border border-slate-200 bg-white transition-all duration-300 ease-out hover:border-blue-800"
          >
            {/* Content */}
            <div className="relative">
              {/* Top */}
              <div className="flex items-center justify-between mb-3">
                <p className="font-semibold tracking-tight text-slate-900">
                  {obj.text}
                </p>
                <span className="text-sm font-semibold text-blue-800">
                  {obj.proficiency}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${obj.proficiency}%` }}
                  transition={{
                    duration: 1,
                    delay: idx * 0.08 + 0.3,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 rounded-full transition-all duration-700 ease-out group-hover:from-blue-900 group-hover:via-blue-800 group-hover:to-blue-950"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
