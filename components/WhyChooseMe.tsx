"use client";

import { motion } from "framer-motion";
import { ReasonsData } from "@/lib/data";

export default function WhyChooseMe() {
  return (
    <main className="max-w-[1400px] mx-auto py-16 px-6 border-t border-slate-200">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ReasonsData.map(({ title, text }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group relative p-8 border border-slate-300 bg-white transition-all duration-300 ease-out hover:border-slate-900 hover:shadow-sm"
          >
            {/* Accent line */}
            <motion.div
              initial={{ width: "2.5rem" }}
              whileInView={{ width: "2.5rem" }}
              whileHover={{ width: "4rem" }}
              transition={{ duration: 0.3 }}
              className="h-[4px] bg-gradient-to-r from-slate-800 to-slate-900 rounded-full"
            />

            <h1 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
              {title}
            </h1>

            <p className="text-slate-700 text-lg leading-relaxed">{text}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
