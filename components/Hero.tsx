"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Pill from "./Pill";
import Button from "./Button";
import Icon from "./Icon";

export default function Hero() {
  return (
    <main className="relative w-full pb-12 overflow-hidden">
      {/* Background with subtle grain texture and gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100" />
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiAvPjwvc3ZnPg==')]" />

      {/* Floating gradient orbs */}
      <div
        className="absolute top-20 -left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-40 -right-20 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "6s", animationDelay: "1s" }}
      />

      <section className="relative min-h-screen max-w-6xl mx-auto px-6 flex flex-col items-center justify-center space-y-10">
        {/* Pill with subtle animation */}
        <div
          className="animate-fadeInDown"
          style={{
            animationDelay: "0.1s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <Pill />
        </div>

        {/* Main heading with enhanced typography */}
        <h1
          className="text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.95] text-center tracking-[-0.02em] font-light animate-fadeInDown"
          style={{
            animationDelay: "0.2s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          Crafting Digital <br />
          <span className="relative inline-block mt-2">
            <span className="relative z-10 bg-gradient-to-r from-blue-950 via-blue-700 to-blue-950 bg-clip-text text-transparent font-semibold tracking-[-0.03em]">
              Experiences
            </span>
            {/* Subtle underline effect */}
            <span className="absolute bottom-2 left-0 right-0 h-3 bg-blue-200/40 -z-10 transform -skew-x-12" />
          </span>
        </h1>

        {/* Description */}
        <p
          className="max-w-2xl text-xl text-gray-700 text-center leading-relaxed animate-fadeInDown"
          style={{
            animationDelay: "0.3s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <span className="inline-block relative px-3 py-1 text-gray-900 font-medium border border-gray-300 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
            Full-stack developer
          </span>{" "}
          specializing in building exceptional digital experiences with modern
          web technologies and thoughtful design.
        </p>

        {/* CTA buttons with staggered animation */}
        <div
          className="flex flex-col md:flex-row items-center gap-4 pt-6 animate-fadeInDown"
          style={{
            animationDelay: "0.4s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <Button
            text="View My Work"
            variant="primary"
            icon={ArrowDown}
            href="#projects"
          />
          <Button text="Get in Touch" variant="secondary" href="#contact" />
        </div>
      </section>

      {/* Social icons with enhanced spacing and animation */}
      <div
        className="relative flex items-center justify-center gap-6 animate-fadeInUp"
        style={{
          animationDelay: "0.5s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
        <Icon href="https://github.com/Roqeeb-dev" icon={Github} />
        <div className="w-px h-6 bg-gray-300" />
        <Icon
          href="https://www.linkedin.com/in/roqeeb-shafiriyu-51288b29a/"
          icon={Linkedin}
        />
        <div className="w-px h-6 bg-gray-300" />
        <Icon href="mailto:shafiriyuroqeeb@gmail.com" icon={Mail} />
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </main>
  );
}
