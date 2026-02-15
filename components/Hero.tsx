import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Pill from "./Pill";
import Button from "./Button";
import Icon from "./Icon";

export default function Hero() {
  return (
    <main className="bg-gray-300/10 w-full pb-5">
      <section className="min-h-screen max-w-5xl mx-auto flex flex-col items-center justify-center space-y-8">
        <Pill />
        <h1 className="text-[clamp(3.5rem,8vw,6rem)] leading-[1.1] text-center tracking-tight font-light">
          Crafting Digital <br />
          <span className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 bg-clip-text text-transparent font-semibold">
            Experiences
          </span>
        </h1>
        <p className="max-w-2xl text-lg text-gray-600 text-center leading-relaxed">
          Full-stack developer specializing in building exceptional digital
          experiences with modern web technologies and thoughtful design.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 pt-4">
          <Button
            text="View My Work"
            variant="primary"
            icon={ArrowDown}
            href="#projects"
          />
          <Button text="Get in Touch" variant="secondary" href="#contact" />
        </div>
      </section>

      <div className="flex items-center justify-center space-x-4">
        <Icon href="https://github.com/Roqeeb-dev" icon={Github} />
        <Icon
          href="https://www.linkedin.com/in/roqeeb-shafiriyu-51288b29a/"
          icon={Linkedin}
        />
        <Icon href="mailto:shafiriyuroqeeb@gmail.com" icon={Mail} />
      </div>
    </main>
  );
}
