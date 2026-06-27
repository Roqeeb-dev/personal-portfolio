"use client";

import { useViewModeStore } from "@/store/viewModeStore";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";

export default function Navbar() {
  const { mode, toggleMode } = useViewModeStore();
  const isRecruiter = mode === "recruiter";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto px-6 py-4">
        <h1 className="text-xl font-semibold tracking-tight uppercase">
          Portfolio
        </h1>

        <div className="flex items-center space-x-6">
          {/* Nav links */}
          <nav className="hidden md:flex items-center space-x-8 font-medium text-[16px]">
            {links.map((link, idx) => (
              <div key={idx} className="relative group">
                <a
                  href={`#${link.to}`}
                  className="text-gray-800 transition-colors duration-200 group-hover:text-black"
                >
                  {link.text}
                </a>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black rounded-full transition-all duration-300 ease-in-out group-hover:w-full" />
              </div>
            ))}
          </nav>

          <button
            onClick={toggleMode}
            aria-label={`Switch to ${isRecruiter ? "engineer" : "recruiter"} view`}
            className="hidden md:flex items-center gap-0.5 p-1 rounded-full border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors relative"
          >
            <span
              className={`relative z-10 px-3 py-1 text-xs font-semibold rounded-full transition-colors duration-200 ${
                !isRecruiter ? "text-white" : "text-gray-500"
              }`}
            >
              Engineer
            </span>

            <span
              className={`relative z-10 px-3 py-1 text-xs font-semibold rounded-full transition-colors duration-200 ${
                isRecruiter ? "text-white" : "text-gray-500"
              }`}
            >
              Recruiter
            </span>

            {/* Sliding background */}
            <motion.span
              layout
              layoutId="toggle-bg"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] bg-black rounded-full"
              style={{ left: isRecruiter ? "calc(50%)" : "4px" }}
            />
          </button>

          <a
            href="#contact"
            className="bg-black text-white px-5 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <AnimatePresence>
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className={`text-center text-[11px] font-medium py-1 tracking-wide ${
            isRecruiter
              ? "bg-blue-50 text-blue-700 border-t border-blue-100"
              : "bg-gray-50 text-gray-500 border-t border-gray-100"
          }`}
        >
          {isRecruiter
            ? "Recruiter view — showing impact and outcomes"
            : "Engineer view — showing technical depth"}
        </motion.div>
      </AnimatePresence>
    </header>
  );
}
