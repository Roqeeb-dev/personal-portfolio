"use client";

import { useViewModeStore } from "@/store/viewModeStore";
import { links } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Briefcase } from "lucide-react";

export default function Navbar() {
  const { mode, toggleMode } = useViewModeStore();
  const isRecruiter = mode === "recruiter";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto px-6 py-4">
        <a
          href="#"
          aria-label="Home"
          className="group flex items-center gap-2.5"
        >
          <div className="relative w-8 h-8 border border-gray-900 flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-200">
            <span className="text-xs font-bold tracking-tight text-gray-900 group-hover:text-white transition-colors duration-200 leading-none">
              RS
            </span>
            {/* corner accent */}
            <span className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-600" />
          </div>
          <span className="hidden sm:block text-sm font-semibold tracking-wide text-gray-900 uppercase">
            Roqeeb
          </span>
        </a>

        <div className="flex items-center gap-4">
          {/* ── Desktop nav links ── */}
          <nav className="hidden md:flex items-center space-x-8 font-medium text-[15px]">
            {links.map((link, idx) => (
              <div key={idx} className="relative group">
                <a
                  href={`#${link.to}`}
                  className="text-gray-700 transition-colors duration-200 group-hover:text-black"
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
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] bg-black rounded-full"
              style={{ left: isRecruiter ? "calc(50%)" : "4px" }}
            />
          </button>

          {/* ── Mobile toggle: icon button ── */}
          <button
            onClick={toggleMode}
            aria-label={`Switch to ${isRecruiter ? "engineer" : "recruiter"} view`}
            className="flex md:hidden relative w-9 h-9 items-center justify-center border border-gray-200 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={mode}
                initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
                transition={{ duration: 0.18 }}
                className="absolute"
              >
                {isRecruiter ? (
                  <Briefcase className="w-4 h-4 text-blue-600" />
                ) : (
                  <Code2 className="w-4 h-4 text-gray-700" />
                )}
              </motion.span>
            </AnimatePresence>
            {/* active dot */}
            <span
              className={`absolute top-0.5 right-0.5 w-2 h-2 rounded-full border-2 border-white ${isRecruiter ? "bg-blue-500" : "bg-gray-400"}`}
            />
          </button>

          {/* ── CTA ── */}
          <a
            href="#contact"
            className="bg-black text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition hidden sm:inline-flex"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* ── Mode indicator banner ── */}
      <AnimatePresence>
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className={`text-center text-[11px] font-medium py-1 tracking-wide ${
            isRecruiter
              ? "bg-blue-50 text-blue-600 border-t border-blue-100"
              : "bg-gray-50 text-gray-400 border-t border-gray-100"
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
