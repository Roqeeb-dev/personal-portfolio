import AboutCard from "./AboutCard";

export default function About() {
  return (
    <main className="flex items-center space-x-3 py-15 max-w-7xl mx-auto">
      <section className="max-w-1/2">
        <p>About Me</p>
        <h1>
          Building the <span>Future of Web</span>
        </h1>
        <p>
          I'm a passionate developer who loves crafting elegant solutions to
          complex problems. With expertise in modern web technologies, I create
          digital experiences that are both visually stunning and technically
          robust.
        </p>
        <p>
          My approach combines clean code architecture, thoughtful design, and a
          deep understanding of user needs to deliver products that make a real
          impact.
        </p>
      </section>

      <section className="max-w-1/2">
        <AboutCard />
      </section>
    </main>
  );
}
