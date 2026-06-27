"use client";

import { useViewModeStore } from "@/store/viewModeStore";
import { links } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Briefcase } from "lucide-react";

export default function Navbar() {
  const { mode, toggleMode } = useViewModeStore();
  const isRecruiter = mode === "recruiter";

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto px-6 py-4">
        {/* ── Logo ── */}
        <a
          href="#"
          aria-label="Home"
          className="group flex items-center gap-2.5"
        >
          <div className="relative w-8 h-8 border border-foreground flex items-center justify-center group-hover:bg-foreground transition-colors duration-200">
            <span className="text-xs font-bold tracking-tight text-foreground group-hover:text-background transition-colors duration-200 leading-none">
              RS
            </span>
            <span className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-primary" />
          </div>
          <span className="text-sm font-semibold tracking-wide text-foreground uppercase">
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
                  className="text-foreground-muted transition-colors duration-200 group-hover:text-foreground"
                >
                  {link.text}
                </a>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary rounded-full transition-all duration-300 ease-in-out group-hover:w-full" />
              </div>
            ))}
          </nav>

          {/* ── Desktop toggle ── */}
          <button
            onClick={toggleMode}
            aria-label={`Switch to ${isRecruiter ? "engineer" : "recruiter"} view`}
            className="hidden md:flex items-center gap-0.5 p-1 rounded-full border border-border bg-background-subtle hover:bg-muted transition-colors relative"
          >
            <span
              className={`relative z-10 px-3 py-1 text-xs font-semibold rounded-full transition-colors duration-200 ${!isRecruiter ? "text-primary-foreground" : "text-foreground-muted"}`}
            >
              Engineer
            </span>
            <span
              className={`relative z-10 px-3 py-1 text-xs font-semibold rounded-full transition-colors duration-200 ${isRecruiter ? "text-primary-foreground" : "text-foreground-muted"}`}
            >
              Recruiter
            </span>
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] bg-secondary rounded-full"
              style={{ left: isRecruiter ? "calc(50%)" : "4px" }}
            />
          </button>

          {/* ── Mobile toggle ── */}
          <button
            onClick={toggleMode}
            aria-label={`Switch to ${isRecruiter ? "engineer" : "recruiter"} view`}
            className="flex md:hidden relative w-9 h-9 items-center justify-center border border-border rounded-full bg-background-subtle hover:bg-muted transition-colors"
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
                  <Briefcase className="w-4 h-4 text-primary" />
                ) : (
                  <Code2 className="w-4 h-4 text-foreground-muted" />
                )}
              </motion.span>
            </AnimatePresence>
            <span
              className={`absolute top-0.5 right-0.5 w-2 h-2 rounded-full border-2 border-background ${isRecruiter ? "bg-primary" : "bg-muted-foreground"}`}
            />
          </button>

          {/* ── CTA ── */}
          <a
            href="#contact"
            className="hidden sm:inline-flex bg-secondary text-secondary-foreground px-4 py-2 text-sm font-medium hover:bg-secondary-hover transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* ── Mode banner ── */}
      <AnimatePresence>
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className={`text-center text-[11px] font-medium py-1 tracking-wide border-t ${
            isRecruiter
              ? "bg-primary/5 text-primary border-primary/10"
              : "bg-background-subtle text-foreground-muted border-border-subtle"
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
