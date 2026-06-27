import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo, links } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left */}
          <article>
            <div className="flex items-center gap-2.5 mb-1">
              <div className="relative w-7 h-7 border border-background/30 flex items-center justify-center">
                <span className="text-[10px] font-bold tracking-tight text-background leading-none">
                  RS
                </span>
                <span className="absolute -top-[2px] -right-[2px] w-1.5 h-1.5 bg-primary" />
              </div>
              <h2 className="text-lg font-bold text-background">
                Roqeeb Shafiriyu
              </h2>
            </div>
            <p className="text-sm text-primary font-medium mb-4 tracking-wide">
              Frontend Engineer
            </p>
            <p className="text-background/60 leading-relaxed mb-6 max-w-md text-sm">
              Building fast, accessible, and well-architected web products. Open
              to remote frontend roles at funded startups.
            </p>
            <div className="flex gap-3">
              {[
                {
                  href: "https://github.com/Roqeeb-dev",
                  icon: Github,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/roqeeb-shafiriyu-51288b29a/",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:shafiriyuroqeeb@gmail.com",
                  icon: Mail,
                  label: "Email",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border border-background/20 flex items-center justify-center hover:border-background/60 hover:bg-background/5 transition-all group"
                >
                  <Icon className="w-4 h-4 text-background/50 group-hover:text-background transition-colors" />
                </a>
              ))}
            </div>
          </article>

          {/* Right */}
          <article className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xs font-semibold text-background/40 uppercase tracking-widest mb-5">
                Navigation
              </h3>
              <nav className="flex flex-col space-y-3">
                {links.map((obj) => (
                  <a
                    key={obj.text}
                    href={`#${obj.to}`}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {obj.text}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-background/40 uppercase tracking-widest mb-5">
                Get in Touch
              </h3>
              <div className="flex flex-col space-y-3">
                {personalInfo.map((obj) => (
                  <p key={obj.title} className="text-background/60 text-sm">
                    {obj.text}
                  </p>
                ))}
              </div>
            </div>
          </article>
        </section>

        {/* Copyright */}
        <section className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © 2026 Roqeeb Shafiriyu. Built with{" "}
            <span className="text-primary inline-block animate-pulse">❤</span>{" "}
            using Next.js & Tailwind CSS.
          </p>
          <p className="text-background/30 text-xs">
            Lagos, Nigeria · Open to remote
          </p>
        </section>
      </div>
    </footer>
  );
}
