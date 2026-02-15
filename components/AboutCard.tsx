"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/lib/data";

export default function AboutCard() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {aboutData.map((obj, idx) => {
        const Icon = obj.icon;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group border border-gray-200 p-7 transition-all duration-300 ease-out hover:border-gray-900 hover:shadow-xl"
          >
            {Icon && (
              <Icon className="w-10 h-10 p-2 border border-gray-300 transition-colors duration-300 group-hover:border-gray-900 group-hover:shadow-lg group-hover:-translate-y-0.5" />
            )}

            <p className="font-medium text-xl my-2 transition-colors duration-300 group-hover:text-gray-900">
              {obj.title}
            </p>

            <p className="font-base text-lg text-gray-600 my-3 transition-colors duration-300 group-hover:text-gray-700">
              {obj.text}
            </p>
          </motion.div>
        );
      })}
    </section>
  );
}
