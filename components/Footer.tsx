import { Github, Linkedin, Mail } from "lucide-react";
import { links } from "./Navbar";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#0f1419] text-gray-300 relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left  */}
          <article>
            <h2 className="text-2xl font-bold text-white mb-4">
              Let's Build Together
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Crafting exceptional digital experiences through clean code,
              thoughtful design, and a passion for innovation.
            </p>

            <div className="flex gap-3">
              <a
                href="https://github.com/Roqeeb-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-gray-600 flex items-center justify-center hover:border-gray-500 transition-all group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/roqeeb-shafiriyu-51288b29a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-gray-600 flex items-center justify-center hover:border-gray-500 transition-all group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>

              <a
                href="mailto:shafiriyuroqeeb@gmail.com"
                className="w-12 h-12 border border-gray-600 flex items-center justify-center hover:border-gray-500 transition-all group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </article>

          {/* Right  */}
          <article className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                Navigation
              </h3>

              <nav className="flex flex-col space-y-3">
                {links.map((obj) => (
                  <a
                    key={obj.text}
                    href={`#${obj.to}`}
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    {obj.text}
                  </a>
                ))}
              </nav>
            </div>

            {/* Get in Touch */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                Get in Touch
              </h3>

              <div className="flex flex-col space-y-3">
                {personalInfo.map((obj) => (
                  <p key={obj.title} className="text-gray-400 text-base">
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
            © 2026 Portfolio. Made with{" "}
            <span className="text-red-500 inline-block animate-pulse">❤</span>{" "}
            by CynoDev
          </p>

          <div className="flex gap-6">
            <a
              href="#privacy"
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}
