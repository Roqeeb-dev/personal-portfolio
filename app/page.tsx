import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WhyChooseMe from "@/components/WhyChooseMe";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Roqeeb | Frontend Developer Portfolio",
  description:
    "Frontend-focused developer skilled in React, Next.js and Tailwind CSS. Building modern, responsive, and scalable web interfaces.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "Tailwind CSS Developer",
  ],
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <WhyChooseMe />
      <Contact />
    </>
  );
}
