import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo, links } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#0f1419] text-gray-300 relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left — identity */}
          <article>
            <h2 className="text-2xl font-bold text-white mb-1">
              Roqeeb Shafiriyu
            </h2>
            <p className="text-sm text-blue-400 font-medium mb-4 tracking-wide">
              Frontend Engineer
            </p>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Building fast, accessible, and well-architected web products. Open
              to remote frontend roles at funded startups.
            </p>

            <div className="flex gap-3">
              <a
                href="https://github.com/Roqeeb-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 border border-gray-600 flex items-center justify-center hover:border-white hover:bg-white/5 transition-all group"
              >
                <Github className="w-4.5 h-4.5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/roqeeb-shafiriyu-51288b29a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 border border-gray-600 flex items-center justify-center hover:border-white hover:bg-white/5 transition-all group"
              >
                <Linkedin className="w-4.5 h-4.5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:shafiriyuroqeeb@gmail.com"
                aria-label="Email"
                className="w-11 h-11 border border-gray-600 flex items-center justify-center hover:border-white hover:bg-white/5 transition-all group"
              >
                <Mail className="w-4.5 h-4.5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </article>

          {/* Right — nav + contact */}
          <article className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">
                Navigation
              </h3>
              <nav className="flex flex-col space-y-3">
                {links.map((obj) => (
                  <a
                    key={obj.text}
                    href={`#${obj.to}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {obj.text}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">
                Get in Touch
              </h3>
              <div className="flex flex-col space-y-3">
                {personalInfo.map((obj) => (
                  <p key={obj.title} className="text-gray-400 text-sm">
                    {obj.text}
                  </p>
                ))}
              </div>
            </div>
          </article>
        </section>

        {/* Copyright */}
        <section className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Roqeeb Shafiriyu. Built with{" "}
            <span className="text-red-500 inline-block animate-pulse">❤</span>{" "}
            using Next.js & Tailwind CSS.
          </p>

          <p className="text-gray-600 text-xs">
            Lagos, Nigeria · Open to remote
          </p>
        </section>
      </div>
    </footer>
  );
}
